import axios from "axios";
import { useState, useEffect } from "react";
import { validateActivityInfo } from "../../validators/validateActivityInfo";
import { useParams, useNavigate } from "react-router-dom";
import {
  FormContainer,
  MainContainer,
  InputName,
  InputDifficulty,
  InputDuration,
  SelectSeason,
  Label,
  Button,
  FormLink,
  ButtonsContainer,
} from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../../redux/actions";
import {
  NoResultsContainer,
  NoResultsMessage,
} from "../../Styles/NoResultsMessage";

export default function EditActivityPage() {
  const navigate = useNavigate();
  const { allowAccess } = useSelector((state) => state);
  if (!allowAccess) {
    return (
      <NoResultsContainer>
        <NoResultsMessage>
          You don't have access, you must log in to continue.
        </NoResultsMessage>
        <ButtonsContainer>
          <FormLink to="/login">Login</FormLink>
          <FormLink to="/register">Register</FormLink>
        </ButtonsContainer>
      </NoResultsContainer>
    );
  }

  const { activityId } = useParams();
  const dispatch = useDispatch();
  const [buttonState, setButtonState] = useState("disabled");

  if (!activityId) {
    return <p>Activity not found.</p>;
  }

  const [activityInfo, setActivityInfo] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case "name":
        if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 20) {
          setActivityInfo({
            ...activityInfo,
            [name]: value,
          });
        }
        break;

      case "difficulty":
        if (Number(value) >= 1 && Number(value) <= 5) {
          setActivityInfo({
            ...activityInfo,
            [name]: value,
          });
        }
        break;

      case "duration":
        if (Number(value) > -1 && Number(value) <= 16) {
          setActivityInfo({
            ...activityInfo,
            [name]: value,
          });
        }
        break;

      case "season":
        if (
          value === "Summer" ||
          value === "Autumn" ||
          value === "Winter" ||
          value === "Spring"
        ) {
          setActivityInfo({
            ...activityInfo,
            [name]: value,
          });
        }
        break;
    }
  };

  useEffect(() => {
    if (validateActivityInfo(activityInfo)) {
      setButtonState("");
    } else {
      setButtonState("disabled");
    }
  }, [activityInfo]);

  const handleClick = async (event) => {
    event.preventDefault();
    if (
      activityInfo.name &&
      activityInfo.difficulty &&
      activityInfo.duration &&
      activityInfo.season
    ) {
      try {
        const response = await axios.put(
          `http://localhost:3001/activities/${activityId}`,
          activityInfo
        );

        if (response.status === 200) {
          dispatch(getAllActivities());
          navigate(`/activities`);
          return "Actividad actualizada con éxito.";
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <MainContainer>
      <FormContainer>
        <Label>
          Name:
          <InputName
            autoComplete="off"
            type="text"
            name="name"
            onChange={handleChange}
            value={activityInfo.name}
          />
        </Label>
        <Label>
          Difficulty: {activityInfo.difficulty}
          <InputDifficulty
            type="range"
            name="difficulty"
            min="1"
            max="5"
            onChange={handleChange}
            value={activityInfo.difficulty}
          />
        </Label>
        <Label>
          Duration (0-16 hrs):
          <InputDuration
            type="number"
            name="duration"
            onChange={handleChange}
            value={activityInfo.duration}
          />
        </Label>
        <Label>
          Season:
          <SelectSeason
            name="season"
            onChange={handleChange}
            value={activityInfo.season}
          >
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </SelectSeason>
        </Label>

        <Button
          type="button"
          onClick={handleClick}
          disabled={buttonState}
          className={buttonState}
        >
          Edit Activity
        </Button>
      </FormContainer>
    </MainContainer>
  );
}
