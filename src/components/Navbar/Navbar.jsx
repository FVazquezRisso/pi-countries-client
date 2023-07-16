import { NavContainer, NavButton } from "./Styles";
import { useDispatch } from 'react-redux';
import { removeCountriesId } from '../../redux/actions';

export default function Navbar() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(removeCountriesId())
  }

  return (
    <NavContainer>
      <NavButton
        to={"/home"}
        className={({ isActive }) => (isActive ? "isActive" : "")}
        onClick={handleClick}
      >
        Home
      </NavButton>
    </NavContainer>
  );
}
