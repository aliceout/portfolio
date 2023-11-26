// Fonction pour générer une séquence cyclique à partir du tableau

export const generateCycleColor = (colorThemes, theme) => {
  let currentIndex = 0;

  const currentThemeColors = colorThemes.find((colorTheme) =>
    colorTheme.hasOwnProperty(theme)
  );

  // Utiliser le thème light par défaut si le thème spécifié n'est pas trouvé
  const colorsArray = currentThemeColors
    ? currentThemeColors[theme].map((colorObject) => colorObject.value)
    : colorThemes[0].light.map((colorObject) => colorObject.value);

  return () => {
    const currentColor = colorsArray[currentIndex];
    currentIndex = (currentIndex + 1) % colorsArray.length;
    return currentColor;
  };
};



export const hexToRgba = (hex, opacity) => {
  hex = hex.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};