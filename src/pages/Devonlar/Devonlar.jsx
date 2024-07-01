import css from "./Devonlar.module.css";
import Carousel from "../../components/Carousel/Carousel.jsx";
import DevonTarkibi from "../../components/DevonlarTarkibi/DevonTarkibi.jsx";

const Devonlar = () => {
  return (
    <div className={css.devonlarWrapper}>
      <div className={css.container}>
        <div className={css.devonlarSection}>
          <h2 className={css.devonlarSectionText}>Devonlar</h2>
          <div className={css.carousel}>
            <Carousel />
          </div>
          <div className={css.devonlarTarkibiWrappper}>
            <DevonTarkibi />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devonlar;
