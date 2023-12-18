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
  SET_USER_ID,
  SET_ALLOWED_ACCESS,
  GET_ALL_USERS,
  GET_USER_BY_ID,
} from "./action-types";

const initialState = {
  UserId: null,
  allowAccess: false,
  allCountries: [],
  filteredCountries: [],
  countryDetail: [],
  allActivities: [],
  countriesIds: [],
  allUsers: [],
  userDetail: [],
  currentPage: 1,
  isLoading: false,
  error: null,
};

const rootReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case SEARCH_COUNTRY:
      return {
        ...state,
        allCountries: payload,
        filteredCountries: payload,
        error: error || null,
      };

    case GET_COUNTRY_BY_ID:
      if (payload === null) {
        return {
          ...state,
          countryDetail: [],
        };
      }
      return {
        ...state,
        countryDetail: payload,
        error: error || null,
      };

    case FILTER_BY_CONTINENT:
      const filteredCountriesByContinent = state.allCountries.filter(
        (country) => country.continent === payload
      );
      return {
        ...state,
        filteredCountries:
          payload === "All" ? state.allCountries : filteredCountriesByContinent,
      };

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: payload,
        error: error || null,
      };

    case GET_COUNTRY_BY_ACTIVITY_NAME:
      const { Countries } = state.allActivities.find((activity) => {
        return activity.name === payload;
      });

      if (payload) {
        return {
          ...state,
          filteredCountries: Countries,
        };
      }

    case SORT_BY_ALPHABET:
      const countriesAlphabet =
        state.filteredCountries.length === 0
          ? state.allCountries
          : state.filteredCountries;
      const countriesSortedByAlphabet = countriesAlphabet.sort((a, b) =>
        payload === "A-Z"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
      return {
        ...state,
        filteredCountries: countriesSortedByAlphabet,
      };

    case SORT_BY_POPULATION:
      const countriesPopulation =
        state.filteredCountries.length === 0
          ? state.allCountries
          : state.filteredCountries;
      const countriesSortedByPopulation = countriesPopulation.sort((a, b) =>
        payload === "Ascending"
          ? a.population - b.population
          : b.population - a.population
      );
      return {
        ...state,
        filteredCountries: countriesSortedByPopulation,
      };

    case CHANGE_CURRENT_PAGE:
      if (payload === "reset") {
        return {
          ...state,
          currentPage: 1,
        };
      }
      return {
        ...state,
        currentPage:
          payload === "next" ? state.currentPage + 1 : state.currentPage - 1,
      };

    case ADD_COUNTRIES_ID:
      return {
        ...state,
        countriesIds: [...state.countriesIds, payload],
      };

    case REMOVE_COUNTRIES_ID:
      if (!payload) {
        return {
          ...state,
          countriesIds: [],
        };
      }

      const countryIdRemoved = state.countriesIds.filter(
        (id) => id !== payload
      );
      return {
        ...state,
        countriesIds: countryIdRemoved,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    case SET_USER_ID:
      return {
        ...state,
        UserId: payload,
      };

    case SET_ALLOWED_ACCESS:
      return {
        ...state,
        allowAccess: payload,
      };

    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload,
        error: error || null,
      };

    case GET_USER_BY_ID:
      if (payload === null) {
        return {
          ...state,
          userDetail: [],
        };
      }

      return {
        ...state,
        userDetail: payload,
        error: error || null,
      };

    default:
      return state;
  }
};

export default rootReducer;
