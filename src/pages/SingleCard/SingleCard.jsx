import css from "./SingleCard.module.css";
import { useNavigate, useParams } from "react-router-dom";
import arrowLeft from "../../assets/images/arrowLeft.svg";
import useFetch from "../../hooks/useFetch.jsx";

const SingleCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useFetch(`https://biryuzikki.uz/api/v1/questions/${id}`);
  return (
    <div className={css.singleCardWrapper}>
      <div className={window.innerWidth >= 500 ? css.container : ""}>
        <button onClick={() => navigate(-1)} className={css.backButton}>
          <img src={arrowLeft} alt="arrow left" />
          <p className={css.backButtonText}>Ortga</p>
        </button>
        <div className={css.responsiveSection}>
          <div className={css.secondBackBtn}>
            <button onClick={() => navigate(-1)} className={css.secondBtn}>
              <img src={arrowLeft} alt="arrow left" />
            </button>
          </div>
          <div className={css.secondTitle}>{data.question}</div>
        </div>
        <div className={css.main}>
          <h2 className={css.singleCardTitle}>{data.question}</h2>
          <p
            className={css.singleCardDescription}
            dangerouslySetInnerHTML={{ __html: data.answer }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
