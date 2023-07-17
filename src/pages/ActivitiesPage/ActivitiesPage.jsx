import ActivityCard from "../../components/ActivityCard/ActivityCard";
import { useSelector } from "react-redux";
import { ActivitiesListContainer } from "./Styles";
import {
  NoResultsContainer,
  NoResultsMessage,
} from "../../Styles/NoResultsMessage";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

export default function ActivitiesPage() {
  const { allActivities, error, isLoading } = useSelector((state) => state);

  if (error)
    return (
      <NoResultsContainer>
        <NoResultsMessage>{error}</NoResultsMessage>
      </NoResultsContainer>
    );

  return (
    <ActivitiesListContainer
      className={allActivities.length === 0 && "noActivities"}
    >
      {isLoading ? (
        <LoadingAnimation />
      ) : allActivities.length !== 0 ? (
        allActivities.map(({ id, name, difficulty, duration, season }) => {
          return (
            <ActivityCard
              key={id}
              name={name}
              difficulty={difficulty}
              duration={duration}
              season={season}
              id={id}
            />
          );
        })
      ) : (
        <NoResultsContainer>
          <NoResultsMessage>No hay actividades creadas.</NoResultsMessage>
        </NoResultsContainer>
      )}
    </ActivitiesListContainer>
  );
}
