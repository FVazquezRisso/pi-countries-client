import { useDispatch } from 'react-redux';
import { sortByPopulation } from '../../../redux/actions';
import { PopulationSelector } from './Styles';

export default function SelectPopulation() {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(sortByPopulation(event.target.value))
  }

  return (
    <PopulationSelector name="selectPopulation" onChange={handleChange}>
      <option>Select Order</option>
      <option value="Ascending">Ascending</option>
      <option value="Descending">Descending</option>
    </PopulationSelector>
  );
}