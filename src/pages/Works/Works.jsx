import css from './Works.module.css';
import SingleTadqiqotData from "../../components/IlmiyTadqiqotComponent/SingleTadqiqotData/SingleTadqiqotData.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import {useEffect, useState} from "react";

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
                  {searchData ? (
                      searchedData?.map(item => (
                          <div style={{
                              borderBottom: '1px solid #C7D9E580'
                          }}><SingleTadqiqotData key={item.id} title={item.title} authors={item.authors}
                                                 published_at={item.published_at} pdf={item.pdf_file}/></div>
                      ))
                  ) : data?.results.map(item => (
                      <div style={{
                          borderBottom: '1px solid #C7D9E580'
                      }}><SingleTadqiqotData key={item.id} title={item.title} authors={item.authors}
                                             published_at={item.published_at} pdf={item.pdf_file}/></div>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default Works;