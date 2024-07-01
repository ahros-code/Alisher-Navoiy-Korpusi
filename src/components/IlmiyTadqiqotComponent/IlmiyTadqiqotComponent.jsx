import css from "./IlmiyTadqiqotlar.module.css";
import search from "../../assets/images/search.svg";
import { useState } from "react";
import useFetch from "../../hooks/useFetch.jsx";

const IlmiyTadqiqotlar = () => {
  const { data, isLoading, error } = useFetch(
    "https://biryuzikki.uz/api/v1/news",
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.devans) {
    return <div>No data available</div>;
  }
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const [searchData, setSearchData] = useState("");
  const myData = data.map((item) => (
    <SingleTadqiqot
      key={item.id}
      link={item.link}
      muallifi={item.muallifi}
      name={item.nomi}
      sanasi={item.sanasi}
    />
  ));
  return (
    <div className={css.newsWrapper}>
      <div className={css.newsInputSection}>
        <div className={css.searchBar}>
          <div className={css.searchIconContainer}>
            <img src={search} alt="search icon" />
          </div>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Qidiruv"
              className={css.searchInput}
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className={css.newsMain}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr className={css.newsDataTitleWrapper}>
              <th
                style={{ width: "55%", textAlign: "left" }}
                className={css.newsDataTitle}
              >
                Nomi
              </th>
              <th
                style={{ width: "20%", textAlign: "left" }}
                className={css.newsDataTitle}
              >
                Muallifi
              </th>
              <th
                style={{ width: "15%", textAlign: "left" }}
                className={css.newsDataTitle}
              >
                Sanasi
              </th>
              <th
                style={{ width: "10%", textAlign: "left" }}
                className={css.newsDataTitle}
              >
                Ko'rish
              </th>
            </tr>
          </thead>
          <tbody>{myData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default IlmiyTadqiqotlar;
