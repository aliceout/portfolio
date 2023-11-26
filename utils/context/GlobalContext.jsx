import React, { createContext, useContext, useState } from "react";

// Créez un contexte pour GlobalContext
export const GlobalContext = createContext();

// Créez un composant fournisseur qui utilisera le contexte
export function GlobalContextProvider({ children }) {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  // Fournissez la valeur du contexte avec les données nécessaires
  const contextValue = {
    hamburgerMenuIsOpen,
    setHamburgerMenuIsOpen,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

// Créez un hook pour utiliser plus facilement le contexte dans d'autres composants
export function useGlobalContext() {
  return useContext(GlobalContext);
}
