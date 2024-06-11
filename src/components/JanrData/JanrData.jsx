import css from './JanrData.module.css';
import {Link, useLocation} from "react-router-dom";
import {capitalize} from "@mui/material";
import search from '../../assets/images/search.svg'
import data from '../JANRLAR_MOCK_DATA/data.js'
import {useState} from "react";

const JanrData = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search)
    const queryValue = query.get("janr")
    const submitHandler = e => {
        e.preventDefault();
    };
    const [searchData, setSearchData] = useState('');
    const allData = data.filter(item => item.category.toLowerCase() === queryValue.toLowerCase())
    const mappingAllData = allData.map(item => (
        <Link to={`?janr=${queryValue}&id=${item.id}`} key={item.id}>
            <li className={css.janrDataItem}>
                <p className={css.janrDataItemNumber}>{item.id}.</p>
                <p className={css.janrDataItemData}>{item.data}</p>
            </li>
        </Link>
    ))
    let searchedData = allData.filter(item => item.data.toLowerCase().includes(searchData.trim().toLowerCase())).map(item => (
        <Link to={`?janr=${queryValue}&id=${item.id}`} key={item.id}>
            <li className={css.janrDataItem}>
                <p className={css.janrDataItemNumber}>{item.id}.</p>
                <p className={css.janrDataItemData}>{item.data}</p>
            </li>
        </Link>
    ))
    return (
        <div className={css.janrDataWrapper}>
            <h3 className={css.janrDataTitle}>
                {capitalize(queryValue)}
            </h3>
            <div className={css.navInput}>
                <img src={search} alt="search icon"/>
                <form onSubmit={submitHandler} className={css.form}>
                    <input type="text" className={css.searchInput} placeholder={'Raqamlar bo‘yicha qidiruv'}
                           onChange={e => setSearchData(e.target.value)} value={searchData}/>
                </form>
            </div>
            <ul className={css.janrDataList}>
                {searchData !== '' ? searchedData : mappingAllData}
            </ul>
        </div>
    )
}
export default JanrData;