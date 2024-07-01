import { createContext, useState } from "react";

export const SecondaryJanrContext = createContext();

export const SecondaryJanrContextProvider = ({ children }) => {
  const [secondarySelectedGenre, setSecondarySelectedGenre] = useState({
    id: "281ea5d0-34c5-4bb5-ae16-5ba49d7606ee",
    number: "1",
    text: "Ashraqat min aksi shamsil-ka’si anvorul-hudo",
  });
  return (
    <SecondaryJanrContext.Provider
      value={{ secondarySelectedGenre, setSecondarySelectedGenre }}
    >
      {children}
    </SecondaryJanrContext.Provider>
  );
};
