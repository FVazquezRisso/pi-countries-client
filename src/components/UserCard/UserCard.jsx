import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserById } from "../../redux/actions";

export default function UserCard({ id, username }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(getUserById(id));
    navigate(`/users/${id}`);
  };

  return (
    <div onClick={handleClick}>
      <p>{username}</p>
    </div>
  );
}
