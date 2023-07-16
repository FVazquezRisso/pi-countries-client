export const getRandomColor = (neonColor = false) => {
  const neonColors = [
    "#FF00FF",
    "#00FFFF",
    "#FFD700",
    "#FF69B4",
    "#00FF00",
    "#FFFF00",
  ];

  if (neonColor) {
    return neonColors[Math.floor(Math.random() * neonColors.length)];
  } else {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }
};
