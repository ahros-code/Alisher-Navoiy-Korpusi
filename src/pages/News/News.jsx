import css from './News.module.css';
import NewsComponent from '../../components/NewsComponent/NewsComponent.jsx'

const News = () => {
  return (
      <div className={css.newsWrapper}>
          <div className={css.container}>
            <h2 className={css.newsTitle}>Ilmiy tadqiqotlar</h2>
              <div className={css.newsMainSectionWrapper}>
                  <NewsComponent />
              </div>
          </div>
      </div>
  )
}

export default News;