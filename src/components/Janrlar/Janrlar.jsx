import css from './Janrlar.module.css';
import janrNameIcon from '../../assets/images/tarjimaiHol.svg'
import {Link, useLocation} from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";
import {useContext} from "react";
import {JanrContext} from "../../context/JanrContext.jsx";

const Janrlar = () => {
  const {selectedGenre, setSelectedGenre} = useContext(JanrContext)
  const {data, isLoading, error} = useFetch('https://biryuzikki.uz/api/v1/general/');
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.seconds) {
    return <div>No data available</div>;
  }
  return (
      <div className={css.janrlarWrapper}>
          <h3 className={css.janrlarTitle}>
            Janrlar
          </h3>
        <ul className={css.janrlarNameList}>
            <li className={`${css.janrlarNameItem} ${selectedGenre.name === selectedGenre.name ? css.active : ''}`}>
                <div className={css.janrlarNameItemLeft} >
                    <img src={janrNameIcon} alt="icon"/>
                    <h4 className={css.janrlarNameItemText}>
                        {selectedGenre.name}
                    </h4>
                </div>
                <div className={css.janrlarNameItemRight}>
                    <div className={css.janrlarItemsCount}>{selectedGenre.counts} ta</div>
                </div>
            </li>
            {data.seconds.map(item => (
                <li className={`${css.janrlarNameItem} ${selectedGenre.name === item.name ? css.active : ''}`}>
                    <div className={css.janrlarNameItemLeft}>
                        <img src={janrNameIcon} alt="icon"/>
                        <h4 className={css.janrlarNameItemText}>
                            {item.name}
                        </h4>
                    </div>
                    <div className={css.janrlarNameItemRight}>
                        <div className={css.janrlarItemsCount}>{item.counts} ta</div>
                  </div>
                </li>
          ))}
        </ul>
      </div>
  )
}

export default Janrlar;