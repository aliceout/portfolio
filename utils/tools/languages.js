export const filterDataByLanguage = (data, language) => {
  const languageData = data.find((item) => item[language]);
  return languageData ? languageData[language] : [];
};
