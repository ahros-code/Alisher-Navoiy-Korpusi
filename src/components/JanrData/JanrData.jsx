import css from './JanrData.module.css';
import { Link, useLocation } from "react-router-dom";
import {capitalize, Pagination} from "@mui/material";
import search from '../../assets/images/search.svg';
import data from '../JANRLAR_MOCK_DATA/data.js';
import { useContext, useEffect, useState } from "react";
import { JanrContext } from "../../context/JanrContext.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import {SecondaryJanrContext} from "../../context/SecondaryJanrContext.jsx";

const JanrData = () => {
    const { selectedGenre, setSelectedGenre } = useContext(JanrContext);
    const [responseData, setResponseData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchData, setSearchData] = useState(0);
    const [searchedData, setSearchedData] = useState();

    const [pagesCount, setPagesCount] = useState(Number);

    useEffect(() => {
        fetchData(); // Initial request
    }, [selectedGenre]);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://biryuzikki.uz/api/v1/general/?genre_id=${selectedGenre.id}`
            );
            const data = await response.json();
            // console.log(Math.ceil(data.main.count / 10))
            setPagesCount(Math.ceil(data.main.count / 10))
            // console.log(pagesCount)
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

    const handleInputChange = (event) => {
        setSearchData(event.target.value);
    };

    useEffect(() => {
        if (searchData) {
            // Make your request here
            fetch(`https://biryuzikki.uz/api/v1/general?genre_detail_number=${searchData}`)
                .then(res => res.json())
                .then(response => {
                    setSearchedData(response.main.results)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [searchData]);


    const {secondarySelectedGenre,setSecondarySelectedGenre} = useContext(SecondaryJanrContext);

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
        fetchPageData(value)
    };

    const fetchPageData = (pageNumber) => {
        const url = `https://biryuzikki.uz/api/v1/general/?page=${pageNumber}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setResponseData(data.main.results)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };


    return (
        <div className={css.janrDataWrapper} style={{position: 'relative'}}>
            <h3 className={css.janrDataTitle}>{selectedGenre.name}</h3>
            <div className={css.navInput}>
                <img src={search} alt="search icon" />
                <input
                    type="text"
                    className={css.searchInput}
                    placeholder={"Raqamlar bo‘yicha qidiruv"}
                    value={searchData}
                    onChange={handleInputChange}
                />
            </div>
            <ul className={css.janrDataList}>
                {searchData ? searchedData?.map((item, index) => (
                    <li className={`${css.janrDataItem}`}
                        key={index} onClick={() => setSecondarySelectedGenre(item)}>
                        <p className={css.janrDataItemNumber}>{item.number}. </p>
                        <p className={css.janrDataItemData}>{item.text}</p>
                    </li>
                )) : responseData.length !== 0 ? responseData.map((item, index) => (
                        <li className={`${css.janrDataItem} ${secondarySelectedGenre.id == item.id ? css.active : ''}`} key={index} onClick={() => setSecondarySelectedGenre(item)}>
                            <p className={css.janrDataItemNumber}>{item.number}. </p>
                            <p className={css.janrDataItemData}>{item.text}</p>
                        </li>
                    )) : <div>No data available</div>}
            </ul>
            <Pagination
                count={pagesCount}
                variant="text"
                shape="rounded"
                page={page}
                onChange={handleChange}
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: '#026AA2',
                        backgroundColor: 'transparent',
                        borderRadius: '8px'
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#026AA3',
                        color: 'white',
                    },
                    position: 'absolute',
                    bottom: '25px',
                    left: '50px'
                }}
            />
        </div>
    );
};

export default JanrData;