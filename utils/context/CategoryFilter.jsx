import React, { createContext, useContext, useState } from "react";

const CategoryFilterContext = createContext();

export const CategoryFilterProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <CategoryFilterContext.Provider
      value={{ selectedCategories, setSelectedCategories }}
    >
      {children}
    </CategoryFilterContext.Provider>
  );
};

export const useCategoryFilter = () => {
  return useContext(CategoryFilterContext);
};
