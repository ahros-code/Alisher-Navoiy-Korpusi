import css from './IlmiyTadqiqotlar.module.css';
import SingleTadqiqotData from "../../components/IlmiyTadqiqotComponent/SingleTadqiqotData/SingleTadqiqotData.jsx";
import useFetch from "../../hooks/useFetch.jsx";

const News = () => {
    const {data, isLoading, error} = useFetch('https://biryuzikki.uz/api/v1/researches/')

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data || !data.count > 0) {
        return <div>No data available</div>;
    }

    return (
        <div className={css.newsWrapper}>
            <div className={css.container}>
                <h2 className={css.newsTitle}>Ilmiy tadqiqotlar</h2>
                <div className={css.newsMainSectionWrapper}>

                    {data?.results.map(item => (
                        <div style={{
                            borderBottom: '1px solid #C7D9E580'
                        }}><SingleTadqiqotData key={item.id} title={item.title} authors={item.authors} published_at={item.published_at} pdf={item.pdf_file} /></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News;