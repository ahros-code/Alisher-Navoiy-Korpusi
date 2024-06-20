import css from './JanrData.module.css';
import { Link, useLocation } from "react-router-dom";
import { capitalize } from "@mui/material";
import search from '../../assets/images/search.svg';
import data from '../JANRLAR_MOCK_DATA/data.js';
import { useContext, useEffect, useState } from "react";
import { JanrContext } from "../../context/JanrContext.jsx";
import useFetch from "../../hooks/useFetch.jsx";

const JanrData = () => {
    const { selectedGenre, setSelectedGenre } = useContext(JanrContext);
    const [responseData, setResponseData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(); // Initial request
    }, [selectedGenre]);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `http://biryuzikki.uz/api/v1/general/?genre_id=${selectedGenre.id}`
            );
            const data = await response.json();
            setResponseData(data.main.results);
        } catch (error) {
            setError(error);
        }

        setIsLoading(false);
    };

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // if (!responseData || responseData.length === 0) {
    //     return <div>No data available</div>;
    // }

    return (
        <div className={css.janrDataWrapper}>
            <h3 className={css.janrDataTitle}>{selectedGenre.name}</h3>
            <div className={css.navInput}>
                <img src={search} alt="search icon" />
                <input
                    type="text"
                    className={css.searchInput}
                    placeholder={"Raqamlar bo‘yicha qidiruv"}
                />
            </div>
            <ul className={css.janrDataList}>
                {responseData.length !== 0 ? responseData.map((item, index) => (
                    <li className={css.janrDataItem} key={index}>
                        <p className={css.janrDataItemNumber}>{item.number}. </p>
                        <p className={css.janrDataItemData}>{item.text}</p>
                    </li>
                )) : <div>No data available</div>}
            </ul>
        </div>
    );
};

export default JanrData;