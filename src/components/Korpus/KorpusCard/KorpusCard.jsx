import css from './KorpusCard.module.css';
import {Link} from "react-router-dom";
import arrowIcon from '../../../assets/images/arrowIcon.png'

const KorpusCard = ({id, title, description}) => {
    return (
        <div className={css.korpusCardWrapper}>
            <div className={css.korpurCardTitleSection}>
                <div className={css.korpusCardTitle}>
                    <h3 className={css.korpusCardTitleText}>{title}</h3>
                </div>
                <div className={css.korpusCardIconSection}>
                    <Link to={`/cards/${id}`}>
                        <img src={arrowIcon} alt={'icon'}/>
                    </Link>
                </div>
            </div>
            <div className={css.korpusCardDescriptionSection}>
                <p className={css.korpusCardDescription}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default KorpusCard;