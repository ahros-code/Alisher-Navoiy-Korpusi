import css from './Works.module.css';
import useFetch from "../../hooks/useFetch.jsx";
import {useEffect, useState} from "react";
import SingleWorkComponent from "../../components/SingleWorkComponent/SingleWorkComponent.jsx";

const Works = () => {
    const {data, isLoading, error} = useFetch('https://biryuzikki.uz/api/v1/works/')
    const [searchData, setSearchData] = useState('');
    const [searchedData, setSearchedData] = useState();

    useEffect(() => {
        if (searchData) {
            fetch(`https://biryuzikki.uz/api/v1/works?search=${searchData}`)
                .then(res => res.json())
                .then(response => {
                    setSearchedData(response.results)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [searchData]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data || !data.count > 0) {
        return <div>No data available</div>;
    }

    const handleInputChange = (event) => {
        setSearchData(event.target.value);
    };

    return (
        <div className={css.worksWrapper}>
            <div className={css.container}>
                <h2 className={css.worksTitle}>
                    Asarlar
                </h2>
                <div className={css.newsMainSectionWrapper}>
                    <form className={css.form}>
                        <input type="text" className={css.searchInput} placeholder="Qidiruv" value={searchData}
                               onChange={handleInputChange}/>
                    </form>
                    <table className={css.table}>
                        <thead>
                        <tr className={css.headerRow}>
                            <th className={css.headerItem}>Nomi</th>
                            <th className={css.headerItem}>Sanasi</th>
                            <th className={css.headerItem}>Ko'rish</th>
                        </tr>
                        </thead>
                        <tbody>
                        {searchData ? (
                            searchedData?.map(item => (
                                <SingleWorkComponent
                                    key={item.id}
                                    title={item.title}
                                    fromYear={item.from_year}
                                    toYear={item.to_year}
                                    pdf={item.pdf_file}
                                    className={css.bodyRow}
                                />
                            ))
                        ) : (
                            data?.results.map(item => (
                                <SingleWorkComponent
                                    key={item.id}
                                    title={item.title}
                                    fromYear={item.from_year}
                                    toYear={item.to_year}
                                    pdf={item.pdf_file}
                                    className={css.bodyRow}
                                />
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Works;