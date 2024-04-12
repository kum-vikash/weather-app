import React, { createContext, useState } from "react";

export const SearchLocContext = createContext();
const SearchLocState = ({ children }) => {
  const [loc, setLoc] = useState("");
  const handleLoc = (e) => setLoc(e.target.value);

  return (
    <SearchLocContext.Provider value={{ loc, handleLoc }}>
      {children}
    </SearchLocContext.Provider>
  );
};

export default SearchLocState;
