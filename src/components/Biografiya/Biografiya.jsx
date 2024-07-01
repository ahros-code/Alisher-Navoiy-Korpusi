import css from "./Biografiya.module.css";
import navoiyImage from "../../assets/images/alisherNavoiy.jpg";
import { Link } from "react-router-dom";

const Biografiya = () => {
  return (
    <div className={css.biografiyaSectionWrapper}>
      <div className={css.biografiyaTitleSection}>
        <h2 className={css.biografiyaTitle}>Alisher Navoiy biografiyasi</h2>
      </div>
      <div className={css.biografiyaCardSection}>
        <div className={css.biografiyaCardSectionImage}>
          <img src={navoiyImage} alt="alisher navoi's image" />
        </div>
        <div className={css.biografiyaCardTextSection}>
          {/*<h3 className={css.biografiyaCardTextSectionTitle}>Alisher Navoiy biografiyasi</h3>*/}
          <p className={css.biografiyaCardTextSectionDescription}>
            Alisher Navoiy (1441-1501) - buyuk shoir va mutafakkir, davlat
            arbobi. To‘liq ismi – Nizomiddin Mir Alisher. “Navoiy” taxallusi
            ostida chig‘atoy (eski o‘zbek tili) hamda fors tilida “Foniy”
            taxallusi bilan ijod qilgan. Navoiy yoshligidan Xurosonning bo‘lajak
            hukmdori Husayn Boyqaro bilan (humronlik davri:1469-1506 - yillar)
            do‘st bo‘lgan. 7-8 yoshidan she’rlar yozishni boshlagan. Navoiyning
            zamondoshi bo‘lmish tarixchi Xondamir qoldirgan ma’lumotlarga ko‘ra,
            mashhur o‘zbek shoiri Lutfiy (1369-1465) keksaygan chog‘larida yosh
            Alisher bilan ko‘rishadi va uning she’riy iqtidorini yuqori
            baholaydi.
          </p>
          <div className={css.readMoreBtn}>
            <Link to={"/about"}>Ko‘proq o‘qish...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biografiya;
