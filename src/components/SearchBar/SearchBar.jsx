import { useState, useEffect } from "react"
import { searchCountry } from '../../redux/actions';
import { useDispatch } from 'react-redux'
import { SearchInput } from './Styles'

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchCountry(query.trim()))
  }, [query, dispatch]);
  
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <SearchInput autoComplete='off' type="text" name="searchBar" onChange={handleChange} value={query} />
  );
}

