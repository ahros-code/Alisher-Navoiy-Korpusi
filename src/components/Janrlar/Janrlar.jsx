import css from './Janrlar.module.css';
import janrNameIcon from '../../assets/images/tarjimaiHol.svg'
import {Link, useLocation} from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";

const Janrlar = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search)
  const queryValue = 'query.get("janr")'
  const {data, isLoading, error} = useFetch('http://biryuzikki.uz/api/v1/general/');
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
          {data.seconds.map(item => (
              <Link to={`?janr=${item.name}`}>
                <li className={`${css.janrlarNameItem} ${queryValue === item.name ? css.active : ''}`}>
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
              </Link>
          ))}
        </ul>
      </div>
  )
}

export default Janrlar;