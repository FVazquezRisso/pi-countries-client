import SearchBar from "../../components/SearchBar/SearchBar";
import CountriesList from "../../components/CountriesList/CountriesList";
import FilterOptions from "../../components/FilterOptions/FilterOptions";
import { HomeContainer } from "./Styles";

export default function HomePage() {
  return (
    <HomeContainer>
      <SearchBar />
      <FilterOptions />
      <CountriesList />
    </HomeContainer>
  );
}
