import axios from "axios";
import { useState, useEffect } from "react";
import { validateActivityInfo } from "../../validators/validateActivityInfo";
import SearchSelect from "../../components/SearchSelect/SearchSelect";
import { useSelector, useDispatch } from "react-redux";
import { removeCountriesId } from "../../redux/actions";
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
  ButtonsContainer,
  FormLink,
} from "./Styles";
import {
  NoResultsContainer,
  NoResultsMessage,
} from "../../Styles/NoResultsMessage";

export default function FormPage() {
  const { UserId, countriesIds, allowAccess } = useSelector((state) => state);

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
  const dispatch = useDispatch();
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState("disabled");

  const [activityInfo, setActivityInfo] = useState({
    name: "",
    difficulty: 3,
    duration: 1,
    season: "Summer",
    CountryIds: countriesIds,
    UserId: UserId,
  });

  const postData = async ({
    name,
    difficulty,
    duration,
    season,
    CountryIds,
    UserId,
  }) => {
    try {
      const response = await axios.post("http://localhost:3001/activities", {
        name: name.trim(),
        difficulty: Number(difficulty),
        duration: Number(duration),
        season: season.trim(),
        CountryIds,
        UserId,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

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

  const handleClick = () => {
    if (validateActivityInfo(activityInfo)) {
      postData(activityInfo);
      dispatch(removeCountriesId());
      navigate(`/home/${UserId}`);
    }
  };

  useEffect(() => {
    if (validateActivityInfo(activityInfo)) {
      setButtonState("");
    } else {
      setButtonState("disabled");
    }
  }, [activityInfo]);

  useEffect(() => {
    setActivityInfo((previousActivityInfo) => {
      return {
        ...previousActivityInfo,
        CountryIds: countriesIds,
      };
    });
  }, [countriesIds]);

  return (
    <MainContainer>
      <FormContainer>
        <Label>
          Name (letters only):
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

        <SearchSelect initialSelectedOption={countryName} />

        <Button
          type="button"
          onClick={handleClick}
          disabled={buttonState}
          className={buttonState}
        >
          Create Activity
        </Button>
      </FormContainer>
    </MainContainer>
  );
}
