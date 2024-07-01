import css from "./JanrData.module.css";
import { Pagination } from "@mui/material";
import search from "../../assets/images/search.svg";
import { useContext, useEffect, useState } from "react";
import { JanrContext } from "../../context/JanrContext.jsx";
import { SecondaryJanrContext } from "../../context/SecondaryJanrContext.jsx";
import { SearchContext } from "../../context/SearchContext.jsx";
import { SecondaryContext } from "../../context/SecondaryDataContext.jsx";
import { BaytContext } from "../../context/BaytContext.jsx";
import { DataContext } from "../../context/DataContext.jsx";

const JanrData = () => {
  const { selectedGenre } = useContext(JanrContext);
  const { secondarySelectedGenre, setSecondarySelectedGenre } =
    useContext(SecondaryJanrContext);
  const { searchResults, generalSearch } = useContext(SearchContext);
  const { selectedCard } = useContext(DataContext);

  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState(0);
  const [searchedData, setSearchedData] = useState([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [page, setPage] = useState(1);
  const [filterResults, setFilterResults] = useState({
    text_types: [],
    auditory_ages: [],
  });
  const [loadingFilters, setLoadingFilters] = useState(false);
  const [selectedTextType, setSelectedTextType] = useState("");
  const [selectedAuditoryAge, setSelectedAuditoryAge] = useState("");
  const { secondaryData } = useContext(SecondaryContext);
  const [secondaryFetchedData, setSecondaryFetchedData] = useState([]);
  const { setSelectedBayt } = useContext(BaytContext);

  useEffect(() => {
    fetchData();
    fetchFilters();
  }, [selectedGenre]);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://biryuzikki.uz/api/v1/general/?genre_id=${selectedGenre.id}`,
      );
      const data = await response.json();
      setPagesCount(Math.ceil(data.main.count / 10));
      setResponseData(data.main.results);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const fetchSecondaryData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://biryuzikki.uz/api/v1/general/?second=${secondaryData.id}&devan_id=${selectedCard}`,
      );
      const data = await response.json();
      setSecondaryFetchedData(data.main.results);
    } catch (err) {
      setError(err);
    }
  };

  const fetchFilters = async () => {
    setLoadingFilters(true);
    try {
      const response = await fetch(
        "https://biryuzikki.uz/api/v1/general/filters/",
      );
      const data = await response.json();
      setFilterResults(data);
    } catch (err) {
      console.error(`Error while fetching filters: ${err}`);
      setError(err);
    }
    setLoadingFilters(false);
  };

  const handleInputChange = (event) => {
    setSearchData(event.target.value);
  };

  const handleChange = (event, value) => {
    setPage(value);
    fetchPageData(value);
  };

  const fetchPageData = (pageNumber) => {
    const url = `https://biryuzikki.uz/api/v1/general/?page=${pageNumber}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data.main.results);
        setSecondaryFetchedData(data.main.results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const fetchDataByTextType = () => {
    fetch(
      selectedAuditoryAge !== "" && selectedAuditoryAge !== `Yosh bo'yicha`
        ? `https://biryuzikki.uz/api/v1/general?text_type_id__in=${selectedTextType}&auditory_age__in=${selectedAuditoryAge}`
        : `https://biryuzikki.uz/api/v1/general?text_type_id__in=${selectedTextType}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setResponseData(data.main.results);
        setSecondaryFetchedData(data.main.results);
      })
      .catch((err) => {
        console.error(`Error fetching data: `, err);
      });
  };

  const fetchDataByAuditoryAge = () => {
    fetch(
      selectedTextType !== "" && selectedTextType !== "Matn tipi"
        ? `https://biryuzikki.uz/api/v1/general?auditory_age__in=${selectedAuditoryAge}&text_type_id__in=${selectedTextType}`
        : `https://biryuzikki.uz/api/v1/general?auditory_age__in=${selectedAuditoryAge}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setResponseData(data.main.results);
        setSecondaryFetchedData(data.main.results);
      })
      .catch((err) => {
        console.error(`Error fetching data: `, err);
      });
  };

  useEffect(() => {
    fetchSecondaryData();
  }, [secondaryData]);

  useEffect(() => {
    if (searchData) {
      fetch(
        `https://biryuzikki.uz/api/v1/general?genre_detail_number=${searchData}`,
      )
        .then((res) => res.json())
        .then((response) => {
          setSearchedData(response.main.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchData]);

  useEffect(() => {
    fetchDataByAuditoryAge();
  }, [selectedAuditoryAge]);

  useEffect(() => {
    fetchDataByTextType();
  }, [selectedTextType]);

  useEffect(() => {
    if (responseData.length > 0) {
      setSecondarySelectedGenre(responseData[0]);
    } else {
      setSecondarySelectedGenre(null);
    }
  }, [responseData]);

  useEffect(() => {
    if (generalSearch) {
      setResponseData(searchResults);
    } else {
      fetchData();
    }
  }, [searchResults]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (secondaryFetchedData[0]?.number === "") {
    setSecondarySelectedGenre(null);
  }

  const handleTextTypeSelect = (event) => {
    const selectedId = event.target.value;
    if (selectedId !== "") {
      setSelectedTextType(selectedId);
    } else if (selectedId === "") {
      setSelectedTextType("");
      fetchData();
    }
  };

  const handleSecondSelectChange = (event) => {
    const selectedId = event.target.value;
    if (selectedId !== "") {
      setSelectedAuditoryAge(selectedId);
    } else if (selectedId === "") {
      setSelectedAuditoryAge(``);
      fetchData();
    }
  };

  return (
    <div className={css.janrDataWrapper} style={{ position: "relative" }}>
      <h3 className={css.janrDataTitle}>
        {secondaryData
          ? secondaryData !== "main"
            ? secondaryData.name
            : selectedGenre.name
          : ""}
      </h3>
      <div className={css.navInput}>
        <img src={search} alt="search icon" />
        <input
          type="text"
          className={css.searchInput}
          placeholder="Raqamlar bo‘yicha qidiruv"
          value={searchData === 0 ? "" : searchData}
          onChange={handleInputChange}
        />
        <div className={css.selects}>
          <select
            value={selectedTextType}
            onChange={handleTextTypeSelect}
            className={css.select}
          >
            <option value="">Matn tipi</option>
            {!loadingFilters ? (
              filterResults?.text_types.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))
            ) : (
              <option disabled>Loading...</option>
            )}
          </select>
          <select
            value={selectedAuditoryAge}
            onChange={handleSecondSelectChange}
            className={css.select}
          >
            <option value="">Yosh bo'yicha</option>
            {!loadingFilters ? (
              filterResults?.auditory_ages.map((item) => (
                <option key={item.id} value={item.auditory_age}>
                  {item.auditory_age}
                </option>
              ))
            ) : (
              <option disabled>Loading...</option>
            )}
          </select>
        </div>
      </div>
      <ul className={css.janrDataList}>
        {searchData && searchedData && searchedData.length > 0 ? (
          searchedData.map((item, index) => (
            <li
              className={css.janrDataItem}
              key={index}
              onClick={() => setSecondarySelectedGenre(item)}
            >
              <p className={css.janrDataItemNumber}>{item.number}. </p>
              <p className={css.janrDataItemData}>{item.text}</p>
            </li>
          ))
        ) : secondaryFetchedData.length < 0 ? (
          responseData.length > 0 ? (
            responseData.map((item, index) => (
              <li
                className={`${css.janrDataItem} ${secondarySelectedGenre?.id === item.id ? css.active : ""}`}
                key={index}
                onClick={() => setSecondarySelectedGenre(item)}
              >
                <p className={css.janrDataItemNumber}>{item.number}. </p>
                <p className={css.janrDataItemData}>{item.text}</p>
              </li>
            ))
          ) : (
            <div>No data available</div>
          )
        ) : (
          secondaryFetchedData.map((item, index) => (
            <div onClick={() => setSelectedBayt(item)}>
              <li
                className={`${css.janrDataItem} ${secondarySelectedGenre?.id === item.id ? css.active : ""}`}
                key={index}
                onClick={() =>
                  item.number !== "" ? setSecondarySelectedGenre(item) : ""
                }
              >
                {item.byte ? (
                  <p className={css.janrDataItemNumber}>{index + 1}. </p>
                ) : item.number === "" ? (
                  <p className={css.janrDataItemNumber}>{index + 1}. </p>
                ) : (
                  <p className={css.janrDataItemNumber}>{item.number}. </p>
                )}
                <div style={{ width: "100%" }}>
                  <p className={css.janrDataItemData2}>{item.text}</p>
                  <p
                    style={
                      !item.byte
                        ? {
                            display: "none",
                          }
                        : {
                            textAlign: "right",
                            color: "rgb(156 163 175)",
                            fontSize: ".875rem",
                            lineHeight: "1.25rem",
                          }
                    }
                  >
                    ({item.number} - {item.genre_name}, {item.byte} - bayt)
                  </p>
                </div>
              </li>
            </div>
          ))
        )}
      </ul>
      <Pagination
        count={pagesCount}
        variant="text"
        shape="rounded"
        page={page}
        onChange={handleChange}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#026AA2",
            backgroundColor: "transparent",
            borderRadius: "8px",
          },
          "& .Mui-selected": {
            backgroundColor: "#026AA3",
            color: "white",
          },
          position: "absolute",
          bottom: "25px",
          left: "50px",
        }}
      />
    </div>
  );
};

export default JanrData;
