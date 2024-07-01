import css from "./Janrlar.module.css";
import janrNameIcon from "../../assets/images/tarjimaiHol.svg";
import { useContext, useEffect, useState } from "react";
import { JanrContext } from "../../context/JanrContext.jsx";
import { SecondaryContext } from "../../context/SecondaryDataContext.jsx";
import { DataContext } from "../../context/DataContext.jsx";

const Janrlar = () => {
  const { selectedGenre } = useContext(JanrContext);
  const { setSecondaryData } = useContext(SecondaryContext);
  const [myData, setMyData] = useState([]);
  const { selectedCard, moyData } = useContext(DataContext);

  const fetchData = () => {
    try {
      fetch(
        `https://biryuzikki.uz/api/v1/general?devan_id=${selectedCard}`,
      ).then((res) =>
        res.json().then((data) => {
          setMyData(data.seconds);
        }),
      );
    } catch (err) {
      console.error(`Error while fetching data: ${err}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCard]);

  return (
    <div className={css.janrlarWrapper}>
      <h3 className={css.janrlarTitle}>Janrlar</h3>
      <ul className={css.janrlarNameList}>
        <li
          className={`${css.janrlarNameItem} ${selectedGenre.name === selectedGenre.name ? css.active : ""}`}
          onClick={() => setSecondaryData("main")}
        >
          <div className={css.janrlarNameItemLeft}>
            <img src={janrNameIcon} alt="icon" />
            <h4 className={css.janrlarNameItemText}>{selectedGenre.name}</h4>
          </div>
          <div className={css.janrlarNameItemRight}>
            <div className={css.janrlarItemsCount}>
              {selectedGenre.counts} ta
            </div>
          </div>
        </li>
        {myData
          ? myData.map((item) => (
              <li
                className={`${css.janrlarNameItem} ${selectedGenre.name === item.name ? css.active : ""}`}
                onClick={() => setSecondaryData(item)}
              >
                <div className={css.janrlarNameItemLeft}>
                  <img src={janrNameIcon} alt="icon" />
                  <h4 className={css.janrlarNameItemText}>{item.name}</h4>
                </div>
                <div className={css.janrlarNameItemRight}>
                  <div className={css.janrlarItemsCount}>{item.counts} ta</div>
                </div>
              </li>
            ))
          : moyData?.seconds.map((item) => (
              <li
                className={`${css.janrlarNameItem} ${selectedGenre.name === item.name ? css.active : ""}`}
                onClick={() => setSecondaryData(item)}
              >
                <div className={css.janrlarNameItemLeft}>
                  <img src={janrNameIcon} alt="icon" />
                  <h4 className={css.janrlarNameItemText}>{item.name}</h4>
                </div>
                <div className={css.janrlarNameItemRight}>
                  <div className={css.janrlarItemsCount}>{item.counts} ta</div>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Janrlar;
