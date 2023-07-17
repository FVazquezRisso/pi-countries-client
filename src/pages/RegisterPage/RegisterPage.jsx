import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId, setAllowedAccess } from "../../redux/actions";
import {
  RegisterContainer,
  Form,
  Title,
  Label,
  Input,
  Button,
  ErrorMessage,
  ToLogin,
  Login,
} from "./Styles";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [buttonState, setButtonState] = useState("disabled");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setError("");
    setInput((prevInput) => {
      return {
        ...prevInput,
        [event.target.name]: event.target.value,
      };
    });
  };

  const postData = async ({ username, password }) => {
    try {
      const { data } = await axios("http://localhost:3001/users");
      const existUser = data.filter((user) => user.username === username);

      if (existUser.length !== 0) {
        throw new Error(`El usuario "${username}" ya existe.`);
      }

      const response = await axios.post("http://localhost:3001/users", {
        username,
        password,
      });

      return response.data.id;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (input.username && input.password && input.confirmPassword) {
      try {
        if (input.password !== input.confirmPassword) {
          throw new Error("Las contraseñas no coinciden.");
        }

        const id = await postData(input);

        if (!id) {
          throw new Error("Error al registrar el usuario.");
        }

        dispatch(setUserId(id));
        dispatch(setAllowedAccess(true));
        navigate(`/home/${id}`);
      } catch (error) {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    if (input.username && input.password && input.confirmPassword) {
      setButtonState("");
    } else {
      setButtonState("disabled");
    }
  }, [input]);

  return (
    <RegisterContainer>
      <Form>
        <Title>Sign Up</Title>
        <Label>
          Username:
          <Input
            autoComplete="off"
            name="username"
            type="text"
            value={input.username}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password:
          <Input
            autoComplete="off"
            name="password"
            type="password"
            value={input.password}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Confirm password:
          <Input
            autoComplete="off"
            name="confirmPassword"
            type="password"
            value={input.confirmPassword}
            onChange={handleChange}
          />
        </Label>
        {error && (
          <ErrorMessage>
            <b>Error:</b> {error}
          </ErrorMessage>
        )}
        <Button
          onClick={handleClick}
          disabled={buttonState}
          className={buttonState}
        >
          Register
        </Button>
        <ToLogin>
          Already have an account? <Login to="/login">Log in.</Login>
        </ToLogin>
      </Form>
    </RegisterContainer>
  );
}
