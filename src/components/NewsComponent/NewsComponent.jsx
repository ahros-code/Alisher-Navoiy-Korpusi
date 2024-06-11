import css from './NewsComponent.module.css'
import search from "../../assets/images/search.svg";
import eyeIcon from '../../assets/images/eye.svg'
import {Link} from "react-router-dom";
import tadqiqotlar from './tadqiqotlar.js';
import SingleNewsData from "./SingleNewsData/SingleNewsData.jsx";
import {useState} from "react";

const NewsComponent = () => {
    const submitHandler = e => {
        e.preventDefault();
    };
    const [searchData, setSearchData] = useState('');
    const myData = tadqiqotlar
        .filter(item => {
            if (!searchData.trim()) {
                return item;
            } else if (
                item.nomi.toLowerCase().includes(searchData.toLowerCase())
            ) {
                return item;
            }
        }).map(item => (
            <SingleNewsData key={item.id} link={item.link} muallifi={item.muallifi} name={item.nomi} sanasi={item.sanasi}/>
        ))
    return (
        <div className={css.newsWrapper}>
            <div className={css.newsInputSection}>
                <div className={css.searchBar}>
                    <div className={css.searchIconContainer}>
                        <img src={search} alt="search icon"/>
                    </div>
                    <form onSubmit={submitHandler}>
                        <input
                            type='text'
                            placeholder='Qidiruv'
                            className={css.searchInput}
                            value={searchData}
                            onChange={e => setSearchData(e.target.value)}
                        />
                    </form>
                </div>
            </div>
            <div className={css.newsMain}>
                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                    <thead>
                    <tr className={css.newsDataTitleWrapper}>
                    <th style={{width: '55%', textAlign: 'left'}} className={css.newsDataTitle}>Nomi</th>
                        <th style={{width: '20%', textAlign: 'left'}} className={css.newsDataTitle}>Muallifi</th>
                        <th style={{width: '15%', textAlign: 'left'}} className={css.newsDataTitle}>Sanasi</th>
                        <th style={{width: '10%', textAlign: 'left'}} className={css.newsDataTitle}>Ko'rish</th>
                    </tr>
                    </thead>
                    <tbody>
                    {myData}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NewsComponent;