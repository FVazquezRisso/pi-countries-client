import { NavContainer, NavButton, LogoutButton } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCountriesId,
  setAllowedAccess,
  getAllActivities,
  getAllUsers,
} from "../../redux/actions";

export default function Navbar() {
  const { UserId } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeCountriesId());
  };

  const handleLogout = () => {
    dispatch(setAllowedAccess(false));
  };

  const handleActivities = () => {
    dispatch(getAllActivities());
  };

  const handleUsers = () => {
    dispatch(getAllUsers());
  };

  return (
    <NavContainer>
      <NavButton to={`/home/${UserId}`} onClick={handleClick}>
        Home
      </NavButton>
      <NavButton to={"/activities"} onClick={handleActivities}>
        Activities
      </NavButton>
      <NavButton to={"/users"} onClick={handleUsers}>
        Users
      </NavButton>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </NavContainer>
  );
}
