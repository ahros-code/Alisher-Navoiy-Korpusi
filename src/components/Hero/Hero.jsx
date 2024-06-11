import css from './Hero.module.css'
import heroContent from '../../assets/images/heroContent.png';

const Hero = () => {
  return (
      <div className={css.wrapper}>
          <img src={heroContent} alt="hero" />
      </div>
  )
}

export default Hero;