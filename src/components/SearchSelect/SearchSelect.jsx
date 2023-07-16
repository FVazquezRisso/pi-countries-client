import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCountriesId,
  removeCountriesId,
  searchCountry,
} from "../../redux/actions";
import {
  SearchSelectContainer,
  Input,
  SuggestionsList,
  SuggestionItem,
  SelectedList,
  SelectedItem,
  DefaultSelectedItem,
  SelectedText,
} from "./Styles";

export default function SearchSelect({ initialSelectedOption }) {
  const [query, setQuery] = useState("");
  const [selectedOptions, setSelectedoptions] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state);
  const countries = allCountries.map((country) => ({
    name: country.name,
    id: country.id,
  }));

  useEffect(() => {
    dispatch(searchCountry(query.trim(), true));
  }, [query, dispatch]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClickAdd = (event) => {
    const name = event.target.textContent.replace(/⇨|⇦/g, "").trim();
    const id = event.target.dataset.id;
    if (id) {
      if (!selectedOptions.some((option) => option.id === id)) {
        dispatch(addCountriesId(id));
        setSelectedoptions((previousSelectedOptions) => {
          return [...previousSelectedOptions, { name, id }];
        });
      }
      setQuery("");
    }
  };

  const handleClickRemove = (event) => {
    const name = event.target.textContent;
    const id = event.target.dataset.id;
    if (id) {
      dispatch(removeCountriesId(id));
      const newSelectedOptions = selectedOptions.filter(
        (option) => option.name !== name
      );
      setSelectedoptions(newSelectedOptions);
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <SearchSelectContainer>
      <Input
        autoComplete="off"
        name="searchSelect"
        onChange={handleChange}
        value={query}
      />
      {countries.length !== 0 && (
        <SuggestionsList>
          {countries?.map((country, index) => {
            const isHovered = index === hoveredIndex;
            return (
              <SuggestionItem
                key={country.id}
                data-id={country.id}
                onClick={handleClickAdd}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {isHovered && <span>⇨ </span>}
                {country.name}
                {isHovered && <span> ⇦</span>}
              </SuggestionItem>
            );
          })}
        </SuggestionsList>
      )}
      <div>
        <SelectedText>Selected:</SelectedText>
        <SelectedList>
          <DefaultSelectedItem>{initialSelectedOption}</DefaultSelectedItem>
          {selectedOptions?.map((option) => {
            return (
              <SelectedItem
                key={option.id}
                data-id={option.id}
                onClick={handleClickRemove}
              >
                {option.name}
              </SelectedItem>
            );
          })}
        </SelectedList>
      </div>
    </SearchSelectContainer>
  );
}
