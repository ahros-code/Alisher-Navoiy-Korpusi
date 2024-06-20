import css from './IlmiyTadqiqotlar.module.css';
import NewsComponent from '../../components/NewsComponent/NewsComponent.jsx'
import SingleTadqiqotData from "../../components/IlmiyTadqiqotComponent/SingleTadqiqotData/SingleTadqiqotData.jsx";

const News = () => {
    return (
        <div className={css.newsWrapper}>
            <div className={css.container}>
                <h2 className={css.newsTitle}>News</h2>
                <div className={css.newsMainSectionWrapper}>
                    <SingleTadqiqotData />
                </div>
            </div>
        </div>
    )
}

export default News;