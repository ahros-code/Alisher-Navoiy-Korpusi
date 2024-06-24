import css from './NewsComponent.module.css'
import search from "../../assets/images/search.svg";
import eyeIcon from '../../assets/images/eye.svg'
import {Link} from "react-router-dom";
import tadqiqotlar from './tadqiqotlar.js';
import SingleNewsData from "./SingleNewsData/SingleNewsData.jsx";
import {useState} from "react";
import useFetch from "../../hooks/useFetch.jsx";

const NewsComponent = () => {
    const {data, isLoading, error} = useFetch('https://biryuzikki.uz/api/v1/news')
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }

    return (
       <div className={css.wrapper}></div>
    )
}

export default NewsComponent;