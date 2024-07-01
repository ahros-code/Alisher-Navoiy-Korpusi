import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/globals.css";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/DataContext.jsx";
import { JanrContextProvider } from "./context/JanrContext.jsx";
import { SecondaryJanrContextProvider } from "./context/SecondaryJanrContext.jsx";
import { SearchContextProvider } from "./context/SearchContext.jsx";
import { SecondaryDataProvider } from "./context/SecondaryDataContext.jsx";
import { BaytContextProvider } from "./context/BaytContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SearchContextProvider>
      <DataProvider>
        <SecondaryDataProvider>
          <JanrContextProvider>
            <BaytContextProvider>
              <SecondaryJanrContextProvider>
                <App />
              </SecondaryJanrContextProvider>
            </BaytContextProvider>
          </JanrContextProvider>
        </SecondaryDataProvider>
      </DataProvider>
    </SearchContextProvider>
  </BrowserRouter>,
);
