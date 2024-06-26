import css from "./DevonlarTarikibiImages.module.css";
import genreImageWhite from "../../assets/images/genreImage.svg";
import genreImageBlue from "../../assets/images/genreImageBlue.svg";
import { useContext } from "react";
import { JanrContext } from "../../context/JanrContext.jsx";

const DevonlarTarkibiImages = ({ name, number }) => {
  const { selectedGenre } = useContext(JanrContext);
  return (
    <div className={css.devonlarTarkibiImageWrapper}>
      <img
        src={name == selectedGenre.name ? genreImageBlue : genreImageWhite}
        alt="image"
        className={css.devonlarTarkibiImage}
      />
      <h4 className={css.title}>{name}</h4>
      <div className={css.numberOverlay}>{number}</div>
    </div>
  );
};

export default DevonlarTarkibiImages;
