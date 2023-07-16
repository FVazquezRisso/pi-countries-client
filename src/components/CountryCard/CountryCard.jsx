import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountryById } from "../../redux/actions";
import { CardContainer, FlagImg, Name, Continent } from "./Styles";
import { getRandomColor } from '../../utils/randomColors';

export default function CountryCard({ img, name, continent, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const continentName = continent.split(' ').join('')

  const continentImages = {
    NorthAmerica:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-north-america-vacation-planning-trip-abroad-flaticons-lineal-color-flat-icons.png",
    SouthAmerica:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-south-america-vacation-planning-trip-abroad-flaticons-lineal-color-flat-icons.png",
    Europe:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-europe-vacation-planning-trip-abroad-flaticons-lineal-color-flat-icons.png",
    Asia: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-asia-vacation-planning-trip-abroad-flaticons-lineal-color-flat-icons.png",
    Africa:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-africa-vacation-planning-trip-abroad-flaticons-lineal-color-flat-icons.png",
    Oceania:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-australia-vacation-planning-trip-abroad-flaticons-lineal-color-flat-icons.png",
    Antarctica:
      "https://img.icons8.com/external-others-pike-picture/50/external-arctic-arctic-and-antarctic-others-pike-picture.png",
  };

  const handleClick = () => {
    dispatch(getCountryById(id));
    navigate(`/detail/${id}`);
  };

  return (
    <CardContainer onClick={handleClick} $hoverColor={getRandomColor()}>
      <FlagImg $imageUrl={img} />
      <Name>{name}</Name>
      <Continent
        src={continentImages[continentName]}
        alt={continent}
      />
    </CardContainer>
  );
}
