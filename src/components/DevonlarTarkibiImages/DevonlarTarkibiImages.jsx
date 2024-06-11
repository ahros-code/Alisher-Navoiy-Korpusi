import css from './DevonlarTarikibiImages.module.css';

const DevonlarTarkibiImages = ({img, number}) => {
  return (
      <div className={css.devonlarTarkibiImageWrapper}>
          <img src={img} alt="image" className={css.devonlarTarkibiImage} />
          <div className={css.numberOverlay}>{number}</div>
      </div>
  )
}

export default DevonlarTarkibiImages;