import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [generalSearch, setGeneralSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const performSearch = async (searchTerm) => {
    try {
      setGeneralSearch(searchTerm);
      const response = await fetch(
        `https://biryuzikki.uz/api/v1/general/?search=${searchTerm}`,
      );
      const data = await response.json();
      setSearchResults(data.main.results);
    } catch (err) {
      console.error(`Error while performing search: ${err}`);
      setSearchResults([]);
    }
  };
  return (
    <SearchContext.Provider
      value={{ generalSearch, searchResults, performSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};
