import {createContext, useState} from "react";

export const JanrContext = createContext();

export const JanrContextProvider = ({children}) => {
    // const fetch =
    const [selectedGenre, setSelectedGenre] = useState({
            "id": "4b97b8c5-e382-4917-ad33-7a20b1d82bc6",
        "ordering_number": 1,
        "name": "Ga’zal",
        "counts": 229
    });
    return (
        <JanrContext.Provider value={{selectedGenre, setSelectedGenre}}>
            {children}
        </JanrContext.Provider>
    )
}