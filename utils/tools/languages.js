export const filterDataByLanguage = (data, language) => {
  const languageData = data.find((item) => item[language]);
  return languageData ? languageData[language] : [];
};


export const filterDataItemInLang = (data, language, itemName) => {
  const languageData = data[language];

  if (!languageData) {
    return [];
  }

  const itemData = languageData.find((item) => item[itemName]);

  return itemData ? itemData[itemName] : [];
};