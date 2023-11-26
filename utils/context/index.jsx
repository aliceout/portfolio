// index.js

import React from "react";
import { IconsProvider } from "./IconsContext";
import { CategoryFilterProvider } from "./CategoryFilter";
import { GlobalContextProvider } from "./GlobalContext";

function AppProviders({ children }) {
  return (
    <IconsProvider>
      <CategoryFilterProvider>
      <GlobalContextProvider>
        {children}
        </GlobalContextProvider>
      </CategoryFilterProvider>
    </IconsProvider>
  );
}

export default AppProviders;
