import Hero from "../../components/Hero/Hero.jsx";
import css from "./Home.module.css";
import Devonlar from "../../components/Devonlar/Devonlar.jsx";
import Korpus from "../../components/Korpus/Korpus.jsx";
import Biografiya from "../../components/Biografiya/Biografiya.jsx";

const Home = () => {
  return (
    <>
      <div className={css.heroWrapper}>
        <Hero />
      </div>
      <div className={css.homeMainSection}>
        <div className={css.devonlarWrapper}>
          <div className={css.container}>
            <Devonlar />
          </div>
        </div>
        <div className={css.korpusWrapper}>
          <div className={css.container}>
            <Korpus />
          </div>
        </div>
        <div className={css.biografiyaWrapper}>
          <div className={css.container}>
            <Biografiya />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
