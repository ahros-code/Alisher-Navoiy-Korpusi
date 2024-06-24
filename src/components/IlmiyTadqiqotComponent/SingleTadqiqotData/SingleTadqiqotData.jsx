import css from './SingleTadqiqotData.module.css';
import {Link} from "react-router-dom";
import eyeIcon from "../../../assets/images/eye.svg";

const SingleTadqiqotData = ({title, authors, published_at, pdf}) => {
  return (
          <tr className={css.wrapper}>
              <td className={css.newsDataItem}>{title}
              </td>
              <td className={css.newsDataItem}>{authors}</td>
              <td className={css.newsDataItem}>{published_at}</td>
              <td className={css.newsDataItem}><Link to={pdf}> <img src={eyeIcon} alt="eye icon"/></Link></td>
          </tr>
  )
}

export default SingleTadqiqotData;