import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectedCardData, setSelectedCardData] = useState(null);
    const [isCardLoading, setIsCardLoading] = useState(false);

    const handleCardClick = (id) => {
        setIsCardLoading(true);
        fetch(`https://biryuzikki.uz/api/v1/general/?devan_id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setSelectedCardData(data);
                setIsCardLoading(false);
            })
            .catch(error => {
                console.error('Error fetching card data:', error);
                setIsCardLoading(false);
            });
    };

    return (
        <DataContext.Provider value={{ selectedCardData, isCardLoading, handleCardClick }}>
            {children}
        </DataContext.Provider>
    );
};
