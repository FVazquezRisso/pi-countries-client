import { useSelector } from "react-redux";
import UserCard from "../../components/UserCard/UserCard";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

export default function UsersPage() {
  const { allUsers, isLoading, error } = useSelector((state) => state);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Users List</h1>
      {isLoading ? (
        <LoadingAnimation />
      ) : allUsers.length !== 0 ? (
        allUsers.map(({ id, username }) => {
          return <UserCard key={id} id={id} username={username} />;
        })
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
