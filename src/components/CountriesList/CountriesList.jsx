import { useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import Pagination from "../Pagination/Pagination";
import { CountriesListContainer } from "./Styles";
import { NoResultsContainer, NoResultsMessage } from '../../Styles/NoResultsMessage';
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

export default function CountriesList() {
  const { currentPage, filteredCountries, allCountries, error, isLoading } =
    useSelector((state) => state);

  if (error) {
    return (
      <NoResultsContainer>
        <NoResultsMessage>{error}</NoResultsMessage>
      </NoResultsContainer>
    );
  }

  const countries =
    filteredCountries.length === 0 ? allCountries : filteredCountries;
  const countriesPerPage = 10;
  const totalPages = Math.ceil(countries.length / countriesPerPage);
  const firstIndex = (currentPage - 1) * countriesPerPage;
  const lastIndex = currentPage * countriesPerPage;
  const countriesOnCurrentPage = countries.slice(firstIndex, lastIndex);

  return (
    <>
      <CountriesListContainer>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          countriesOnCurrentPage.length !== 0 &&
          countriesOnCurrentPage.map((country) => (
            <CountryCard
              key={country.id}
              id={country.id}
              img={country.flag}
              name={country.name}
              continent={country.continent}
            />
          ))
        )}
      </CountriesListContainer>
      <Pagination totalPages={totalPages} countries={countries} />
    </>
  );
}
