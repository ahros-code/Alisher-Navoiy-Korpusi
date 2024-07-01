import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [isCardLoading, setIsCardLoading] = useState(false);
  const [moyData, setMoyData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(
    "5d6ec30e-0a9a-425e-89ce-041809a7894c",
  );

  (function fetchDa() {
    try {
      fetch("https://biryuzikki.uz/api/v1/general")
        .then((res) => res.json())
        .then((data) => {
          setMoyData(data);
        });
    } catch (err) {
      console.error(`Error while fetching data: ${err}`);
    }
  })();

  const handleCardClick = (id) => {
    setIsCardLoading(true);
    setSelectedCard(id);
    fetch(`https://biryuzikki.uz/api/v1/general/?devan_id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSelectedCardData(data);
        setIsCardLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
        setIsCardLoading(false);
      });
  };

  return (
    <DataContext.Provider
      value={{
        selectedCardData,
        isCardLoading,
        handleCardClick,
        selectedCard,
        setSelectedCard,
        setMoyData,
        moyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
