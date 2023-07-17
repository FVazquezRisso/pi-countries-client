import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllowedAccess, setUserId } from "../../redux/actions";
import {
  LoginContainer,
  Form,
  Title,
  Label,
  Input,
  ErrorMessage,
  Button,
  ToRegister,
  Register,
} from "./Styles";

export default function LoginPage() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [buttonState, setButtonState] = useState("disabled");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setError("");
    setInput((prevInput) => {
      return {
        ...prevInput,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const { username, password } = input;

      if (!username) throw new Error("Debe ingresar un nombre de usuario.");

      if (!password) throw new Error("Debe ingresar una contraseña.");

      const { data } = await axios("http://localhost:3001/users");

      const existUser = data.find((user) => user.username === username);

      if (!existUser)
        throw new Error(`No existe el usuario con el nombre ${username}.`);

      if (existUser.password !== password)
        throw new Error("Contraseña incorrecta.");

      dispatch(setAllowedAccess(true));
      dispatch(setUserId(existUser.id));
      navigate(`/home/${existUser.id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (input.username && input.password) {
      setButtonState("");
    } else {
      setButtonState("disabled");
    }
  }, [input]);

  return (
    <LoginContainer>
      <Form>
        <Title>Sign In</Title>
        <Label>
          Username:
          <Input
            autoComplete="off"
            name="username"
            type="text"
            onChange={handleChange}
            value={input.username}
          />
        </Label>
        <Label>
          Password:
          <Input
            autoComplete="off"
            name="password"
            type="password"
            onChange={handleChange}
            value={input.password}
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
          Login
        </Button>
        <ToRegister>
          Don't have an account? <Register to="/register">Sign up.</Register>
        </ToRegister>
      </Form>
    </LoginContainer>
  );
}
