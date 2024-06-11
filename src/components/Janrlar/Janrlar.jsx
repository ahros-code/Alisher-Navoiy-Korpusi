import css from './Janrlar.module.css';
import janrNameIcon from '../../assets/images/tarjimaiHol.svg'
import {Link, useLocation} from "react-router-dom";

const Janrlar = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search)
  const queryValue = query.get("janr")
  return (
      <div className={css.janrlarWrapper}>
          <h3 className={css.janrlarTitle}>
            Janrlar
          </h3>
        <ul className={css.janrlarNameList}>
          <Link to={'?janr=maqollar'}>
            <li className={`${css.janrlarNameItem} ${queryValue === 'maqollar' ? css.active : ''}`}>
              <div className={css.janrlarNameItemLeft}>
                <img src={janrNameIcon} alt="icon"/>
                <h4 className={css.janrlarNameItemText}>
                  Maqollar
                </h4>
              </div>
              <div className={css.janrlarNameItemRight}>
                <div className={css.janrlarItemsCount}>650 ta</div>
              </div>
            </li>
          </Link>
          <Link to={'?janr=iboralar'}>
            <li className={`${css.janrlarNameItem} ${queryValue === 'iboralar' ? css.active : ''}`}>
              <div className={css.janrlarNameItemLeft}>
                <img src={janrNameIcon} alt="icon"/>
                <h4 className={css.janrlarNameItemText}>
                  Iboralar
                </h4>
              </div>
              <div className={css.janrlarNameItemRight}>
                <div className={css.janrlarItemsCount}>650 ta</div>
              </div>
            </li>
          </Link>
          <Link to={'?janr=arxaizm'}>
            <li className={`${css.janrlarNameItem} ${queryValue === 'arxaizm' ? css.active : ''}`}>
              <div className={css.janrlarNameItemLeft}>
                <img src={janrNameIcon} alt="icon"/>
                <h4 className={css.janrlarNameItemText}>
                  Arxaizm
                </h4>
              </div>
              <div className={css.janrlarNameItemRight}>
                <div className={css.janrlarItemsCount}>650 ta</div>
              </div>
            </li>
          </Link>
          <Link to={'?janr=istorizm'}>
            <li className={`${css.janrlarNameItem} ${queryValue === 'istorizm' ? css.active : ''}`}>
              <div className={css.janrlarNameItemLeft}>
                <img src={janrNameIcon} alt="icon"/>
                <h4 className={css.janrlarNameItemText}>
                  Istorizm
                </h4>
              </div>
              <div className={css.janrlarNameItemRight}>
                <div className={css.janrlarItemsCount}>650 ta</div>
              </div>
            </li>
          </Link>
          <Link to={'?janr=sheriy'}>
            {/*TODO: sheriyni togirla*/}
            <li className={`${css.janrlarNameItem} ${queryValue === 'sheriy' ? css.active : ''}`}>
              <div className={css.janrlarNameItemLeft}>
                <img src={janrNameIcon} alt="icon"/>
                <h4 className={css.janrlarNameItemText}>
                  She’riy san’at
                </h4>
              </div>
              <div className={css.janrlarNameItemRight}>
                <div className={css.janrlarItemsCount}>650 ta</div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
  )
}

export default Janrlar;