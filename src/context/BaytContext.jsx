import {createContext, useState} from "react";

export const BaytContext = createContext();

export const BaytContextProvider = ({children}) => {
    const [selectedBayt, setSelectedBayt] = useState();
    return (
        <BaytContext.Provider value={{selectedBayt, setSelectedBayt}}>
            {children}
        </BaytContext.Provider>
    )
}