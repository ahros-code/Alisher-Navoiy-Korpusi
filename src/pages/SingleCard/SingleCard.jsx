import css from './SingleCard.module.css';
import {Link, useNavigate, useParams} from "react-router-dom";
import korpus_mock_data from "../../components/Korpus/korpus_mock_data.js";
import arrowLeft from '../../assets/images/arrowLeft.svg'

const SingleCard = () => {
    const {id} = useParams()
    const card = korpus_mock_data.find(data => data.id == id);
    const navigate = useNavigate()
    return (
        <div className={css.singleCardWrapper}>
            <div className={window.innerWidth >= 500 ? css.container : ''}>
                <button onClick={() => navigate(-1)} className={css.backButton}>
                    <img src={arrowLeft} alt="arrow left"/>
                    <p className={css.backButtonText}>Ortga</p>
                </button>
                <div className={css.responsiveSection}>
                    <div className={css.secondBackBtn}>
                        <button onClick={() => navigate(-1)} className={css.secondBtn}>
                            <img src={arrowLeft} alt="arrow left"/>
                        </button>
                    </div>
                    <div className={css.secondTitle}>
                        {card.title}
                    </div>
                </div>
                <div className={css.main}>
                    <h2 className={css.singleCardTitle}>{card.title}</h2>
                    <p className={css.singleCardDescription}>{card.description}</p>
                </div>

            </div>
        </div>
    )
}

export default SingleCard;