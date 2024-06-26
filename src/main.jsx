import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/globals.css'
import {BrowserRouter} from "react-router-dom";
import {DataProvider} from "./context/DataContext.jsx";
import {JanrContextProvider} from "./context/JanrContext.jsx";
import {SecondaryJanrContextProvider} from "./context/SecondaryJanrContext.jsx";
import {SearchContextProvider} from "./context/SearchContext.jsx";
import {SecondaryDataProvider} from "./context/SecondaryDataContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <SearchContextProvider>
            <DataProvider>
                <SecondaryDataProvider>
                    <JanrContextProvider>
                        <SecondaryJanrContextProvider>
                            <App/>
                        </SecondaryJanrContextProvider>
                    </JanrContextProvider>
                </SecondaryDataProvider>
            </DataProvider>
        </SearchContextProvider>
    </BrowserRouter>
)
