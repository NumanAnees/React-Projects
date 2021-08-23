import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { SetSearchTerm } = useGlobalContext();
  return (
    <div>
      <h2>search form component</h2>
    </div>
  );
};

export default SearchForm;
