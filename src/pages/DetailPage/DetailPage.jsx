import { useSelector, useDispatch } from "react-redux";
import { addCountriesId } from "../../redux/actions";
import {
  DetailPageContainer,
  InfoContainer,
  ImageContainer,
  Image,
  Name,
  Info,
  Button
} from "./Styles";
import {
  NoResultsContainer,
  NoResultsMessage,
} from "../../Styles/NoResultsMessage";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

export default function DetailPage() {
  const dispatch = useDispatch();
  const { countryDetail, isLoading } = useSelector((state) => state);
  

  const handleClick = () => {
    dispatch(addCountriesId(countryDetail.id));
  };

  if (!countryDetail.id) {
    return isLoading ? (
      <LoadingAnimation />
    ) : (
      <NoResultsContainer>
        <NoResultsMessage>No countries found with that ID.</NoResultsMessage>
      </NoResultsContainer>
    );
  }

  return (
    <>
      <DetailPageContainer>
        <ImageContainer>
          <Name>{countryDetail.name}</Name>
          <Image
            src={countryDetail.flag}
            alt={`Bandera de ${countryDetail.name}`}
          />
          <Button to={`/form/${countryDetail.name}`} onClick={handleClick}>
            Create Activity
          </Button>
        </ImageContainer>
        <InfoContainer>
          <Info>
            <b>ID:</b> {countryDetail.id}
          </Info>
          <Info>
            <b>Continent:</b> {countryDetail.continent}
          </Info>
          {countryDetail.capital && (
            <Info>
              <b>Capital:</b> {countryDetail.capital}
            </Info>
          )}
          {countryDetail.subregion && (
            <Info>
              <b>Subregion:</b> {countryDetail.subregion}
            </Info>
          )}
          {countryDetail.area && (
            <Info>
              <b>Area:</b> {countryDetail.area}
            </Info>
          )}
          <Info>
            <b>Population:</b> {countryDetail.population}
          </Info>
        </InfoContainer>
      </DetailPageContainer>
    </>
  );
}
