import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, SetLoading] = useState(true);
  const [searchTerm, SetsearchTerm] = useState("a");
  const [cocktails, Setcocktails] = useState([]);

  const fetchDrink = async () => {
    SetLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        Setcocktails(newCocktails);
      } else {
        Setcocktails([]);
      }
      SetLoading(false);
    } catch (e) {
      console.log(e);
      SetLoading(false);
    }
  };
  useEffect(() => {
    fetchDrink();
  }, [searchTerm]);
  return (
    <AppContext.Provider value={{ loading, cocktails, SetsearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
