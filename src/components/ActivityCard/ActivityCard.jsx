import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllActivities } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { CardContainer, Name, Info, ButtonsContainer, Button } from "./Styles";

export default function ActivityCard({
  name,
  difficulty,
  duration,
  season,
  id,
  hiddenButtons,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteActivity = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/activities/${id}`
      );

      if (response.status === 200) {
        dispatch(getAllActivities());
        return "The activity has been successfully deleted.";
      }

      throw new Error("Error deleting the activity.");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEditActivity = () => {
    dispatch(getAllActivities());
    navigate(`/edit/${id}`);
  };

  return (
    <CardContainer>
      <Name>{name}</Name>
      <Info>Difficulty: {difficulty}</Info>
      <Info>Duration: {duration}h</Info>
      <Info>Season: {season}</Info>
      {!hiddenButtons && (
        <ButtonsContainer>
          <Button onClick={handleEditActivity}>Edit</Button>
          <Button onClick={handleDeleteActivity}>Delete</Button>
        </ButtonsContainer>
      )}
    </CardContainer>
  );
}
