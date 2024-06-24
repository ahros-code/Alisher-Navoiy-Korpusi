import css from './DevonCard.module.css';
import {Link} from "react-router-dom";
import useFetch from "../../../hooks/useFetch.jsx";

const DevonCard = ({id, image, title, description, onClick}) => {
    // const devan = useFetch(`https://biryuzikki.uz/api/v1/general/?devan_id=${id}`);
    return (
        <div className={css.devonCardWrapper} onClick={() => onClick(id)} >
            <div className={css.imageWrapper}>
                <img src={image} alt={title}/>
            </div>
            <div className={css.devonCardTextSection}>
                <div className={css.devonCardTitle}>
                    {title}
                </div>
                <div className={css.devonCardDescription}>{description}</div>
                <Link className={css.devonCardButton} to={'https://kun.uz'}>
                    Batafsil
                </Link>
            </div>
        </div>
    )
}

export default DevonCard;