export const validateActivityInfo = ({ name, difficulty, duration, season }) => {
  if (/^\d/.test(name) || name.length === 0) return false;

  if (
    isNaN(Number(difficulty)) ||
    Number(difficulty) < 1 ||
    Number(difficulty) > 5
  )
    return false;

  if (isNaN(Number(duration)) || Number(duration) < 0 || Number(duration) > 16)
    return false;

  if (
    season !== "Summer" &&
    season !== "Autumn" &&
    season !== "Winter" &&
    season !== "Spring"
  )
    return false;

  return true;
};
