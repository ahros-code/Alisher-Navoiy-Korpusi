import css from "./SecondHero.module.css";

const SecondHero = () => {
  return (
    <div className={css.secondHeroWrapper}>
      <div className={css.secondHeroText}>
        <div className={css.secondContainer}>
          <h2 className={css.secondHeroTitle}>
            Alisher Navoiy tarjimayi holi, hayoti va ijodi
          </h2>
          <p className={css.secondHeroDescription}>
            1441-yildan 1501-yilgacha hayot kechirgan
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
