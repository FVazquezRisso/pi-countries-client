import { useDispatch } from 'react-redux'
import { sortByAlphabet } from '../../../redux/actions';
import { AlphabetSelector } from './Styles';

export default function SelectAlphabet() {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(sortByAlphabet(event.target.value))
  }

  return (
    <AlphabetSelector name="selectAlphabet" onChange={handleChange}>
      <option>Select Order</option>
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
    </AlphabetSelector>
  );
}