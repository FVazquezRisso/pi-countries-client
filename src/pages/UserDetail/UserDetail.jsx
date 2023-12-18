import { useSelector } from "react-redux";
import ActivityCard from "../../components/ActivityCard/ActivityCard";

export default function UserDetail() {
  const { userDetail } = useSelector((state) => state);
  const { username, Activities } = userDetail;

  return (
    <>
      <h2>{username}</h2>
      <h2>Activities</h2>
      <div>
        {Activities?.length !== 0 ? (
          Activities?.map(({ id, name, difficulty, duration, season }) => {
            return (
              <ActivityCard
                key={id}
                name={name}
                difficulty={difficulty}
                duration={duration}
                season={season}
                id={id}
                hiddenButtons={true}
              />
            );
          })
        ) : (
          <p>This user has no created activities.</p>
        )}
      </div>
    </>
  );
}
