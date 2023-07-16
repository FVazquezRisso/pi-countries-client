import { useDispatch } from "react-redux";
import { filterByContinent } from '../../../redux/actions';
import { ContinentSelector } from "./Styles"; 

export default function SelectContinent() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterByContinent(event.target.value));
  };

  return (
    <ContinentSelector name="selectContinent" onChange={handleChange}>
      <option value="All">All</option>
      <option value="North America">North America</option>
      <option value="South America">South America</option>
      <option value="Europe">Europe</option>
      <option value="Asia">Asia</option>
      <option value="Africa">Africa</option>
      <option value="Oceania">Oceania</option>
      <option value="Antarctica">Antarctica</option>
    </ContinentSelector>
  );
}