import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/globals.css'
import {BrowserRouter} from "react-router-dom";
import {DataProvider} from "./context/DataContext.jsx";
import {JanrContextProvider} from "./context/JanrContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <DataProvider>
            <JanrContextProvider>
                <App/>
            </JanrContextProvider>
        </DataProvider>
    </BrowserRouter>
)
