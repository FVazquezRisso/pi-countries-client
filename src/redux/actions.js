import {
  SEARCH_COUNTRY,
  GET_COUNTRY_BY_ID,
  FILTER_BY_CONTINENT,
  GET_ALL_ACTIVITIES,
  GET_COUNTRY_BY_ACTIVITY_NAME,
  SORT_BY_ALPHABET,
  SORT_BY_POPULATION,
  CHANGE_CURRENT_PAGE,
  ADD_COUNTRIES_ID,
  REMOVE_COUNTRIES_ID,
  SET_LOADING,
  // CHANGE_FILTERS
} from "./action-types";
import axios from "axios";

export const searchCountry = (query, disableViewAllCountries) => {
  const endpoint = `http://localhost:3001/countries?name=${query}`;
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      if (!query && disableViewAllCountries) {
        dispatch({ type: SEARCH_COUNTRY, payload: [] });
        dispatch(setLoading(false));
        return;
      }
      const response = await axios(endpoint);
      const data = response.data;

      if (response.status === 200) {
        dispatch({
          type: SEARCH_COUNTRY,
          payload: data,
        });
      }

      dispatch(setLoading(false));
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: SEARCH_COUNTRY,
        payload: [],
        error: "No se econtraron países con ese nombre.",
      });
      dispatch(setLoading(false));
    }
  };
};

export const getCountryById = (id) => {
  const endpoint = `http://localhost:3001/countries/${id}`;
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios(endpoint);
      const data = response.data;

      if (response.status === 200) {
        dispatch({
          type: GET_COUNTRY_BY_ID,
          payload: data,
        });
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: [],
        error: "No se encontró ningún país con ese ID.",
      });
      dispatch(setLoading(false));
    }
  };
};

export const filterByContinent = (continent) => {
  return { type: FILTER_BY_CONTINENT, payload: continent };
};

export const getAllActivities = () => {
  const endpoint = "http://localhost:3001/activities";
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios(endpoint);
      const data = response.data;

      if (response.status === 200) {
        dispatch({
          type: GET_ALL_ACTIVITIES,
          payload: data,
        });
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: [],
        error: "No se econtraron actividades con ese nombre.",
      });
      dispatch(setLoading(false));
    }
  };
};

export const getCountryByActivityName = (name) => {
  return {
    type: GET_COUNTRY_BY_ACTIVITY_NAME,
    payload: name,
  };
};

export const sortByAlphabet = (order) => {
  return {
    type: SORT_BY_ALPHABET,
    payload: order,
  };
};

export const sortByPopulation = (order) => {
  return {
    type: SORT_BY_POPULATION,
    payload: order,
  };
};

export const changeCurrentPage = (changeTo) => {
  return {
    type: CHANGE_CURRENT_PAGE,
    payload: changeTo,
  };
};

export const addCountriesId = (id) => {
  return {
    type: ADD_COUNTRIES_ID,
    payload: id,
  };
};

export const removeCountriesId = (id) => {
  return {
    type: REMOVE_COUNTRIES_ID,
    payload: id,
  };
};

export const setLoading = (isLoading) => {
  return (dispatch) => {
    if (isLoading) {
      dispatch({ type: SET_LOADING, payload: true });
    } else {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
};

// export const changeFilters = (filters) => {
//   dispatch(searchCountry(filters.query))
//   dispatch(filterByContinent(filters.continent))
//   dispatch(getCountryByActivityName(filters.activityName))
//   dispatch(sortByAlphabet(filters.alphabetOrder))
//   dispatch(sortByPopulation(filters.populationOrder))

//   return {
//     type: CHANGE_FILTERS,
//     payload: filters
//   }
// }