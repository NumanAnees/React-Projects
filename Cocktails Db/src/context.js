import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, isLoading] = useState(true);
  const [searchTerm, SetSearchTerm] = useState("a");
  const [cocktails, Setcocktails] = useState([]);
  return (
    <AppContext.Provider value={{ loading, cocktails, SetSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
