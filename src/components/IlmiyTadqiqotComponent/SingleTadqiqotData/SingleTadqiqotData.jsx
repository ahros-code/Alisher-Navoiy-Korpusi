import css from './SingleTadqiqotData.module.css';
import {Link} from "react-router-dom";
import eyeIcon from "../../../assets/images/eye.svg";

const SingleTadqiqotData = ({name, muallifi, sanasi, link}) => {
  return (
          <tr>
              <td className={css.newsDataItem}>{name}
              </td>
              <td className={css.newsDataItem}>{muallifi}</td>
              <td className={css.newsDataItem}>{sanasi}</td>
              <td className={css.newsDataItem}><Link to={"https://kun.uz"}> <img src={eyeIcon} alt="eye icon"/></Link></td>
          </tr>
  )
}

export default SingleTadqiqotData;