import css from './DevonCard.module.css';
import {Link} from "react-router-dom";

const DevonCard = ({id, image, title, description}) => {
    return (
        <div className={css.devonCardWrapper}>
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