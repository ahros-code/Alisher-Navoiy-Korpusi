import React, { createContext, useState } from "react";

export const SecondaryContext = createContext();

export const SecondaryDataProvider = ({ children }) => {
  const [secondaryData, setSecondaryData] = useState();
  return (
    <SecondaryContext.Provider value={{ secondaryData, setSecondaryData }}>
      {children}
    </SecondaryContext.Provider>
  );
};
