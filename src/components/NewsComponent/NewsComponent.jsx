import css from "./NewsComponent.module.css";
import useFetch from "../../hooks/useFetch.jsx";
import NewsCard from "../News/NewsCard/NewsCard.jsx";
import { useEffect, useState } from "react";

const NewsComponent = () => {
  const [searchData, setSearchData] = useState("");
  const [searchedData, setSearchedData] = useState();

  const { data, error } = useFetch("https://biryuzikki.uz/api/v1/news");

  useEffect(() => {
    if (searchData) {
      fetch(`https://biryuzikki.uz/api/v1/news?search=${searchData}`)
        .then((res) => res.json())
        .then((response) => {
          setSearchedData(response.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchData]);

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
    <div className={css.wrapper}>
      <form className={css.form}>
        <input
          type="text"
          className={css.searchInput}
          placeholder="Qidiruv"
          value={searchData}
          onChange={handleInputChange}
        />
      </form>
      <div className={css.cardsWrapper}>
        {searchData
          ? searchedData?.map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                authors={item.authors}
                main_image={item.main_image}
                published_at={item.published_at}
              />
            ))
          : data.results.map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                authors={item.authors}
                main_image={item.main_image}
                published_at={item.published_at}
              />
            ))}
      </div>
    </div>
  );
};

export default NewsComponent;
