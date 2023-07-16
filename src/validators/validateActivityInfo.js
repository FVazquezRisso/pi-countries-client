export const validateActivityInfo = ({
  name,
  difficulty,
  duration,
  season,
  CountryIds,
}, allCountries) => {

  if (/^\d/.test(name) || name.length === 0) return false;

  if (
    isNaN(Number(difficulty)) ||
    Number(difficulty) < 1 ||
    Number(difficulty) > 5
  )
    return false;

  if (isNaN(Number(duration)) || Number(duration) < 1 || Number(duration) > 16)
    return false;

  if (
    season !== "Summer" &&
    season !== "Autumn" &&
    season !== "Winter" &&
    season !== "Spring"
  )
    return false;

  const areAllIdsValid = CountryIds.every((id) => {
    return allCountries.some((country) => country.id === id);
  });

  if (!areAllIdsValid) return false;

  return true;
};
