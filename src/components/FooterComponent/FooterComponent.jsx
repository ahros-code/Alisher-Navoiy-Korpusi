import css from "./FooterComponent.module.css";
import footerLogo from "../../assets/images/footer_logo.svg";

const FooterComponent = () => {
  return (
    <div className={css.footerWrapper}>
      <div className={css.footerImage}>
        <img src={footerLogo} alt="footer logo" />
      </div>
      <div className={css.footerRuknlar}>
        <h3 className={css.footerTitle}>Ruknlar</h3>
        <ul className={css.footerListItems}>
          <li>Tarjimayi hol</li>
          <li>Devonlar</li>
          <li>Asarlar</li>
          <li>Ilmiy tadqiqotlar</li>
          <li>Korpus haqida</li>
        </ul>
      </div>
      <div className={css.footerJanrlar}>
        <h3 className={css.footerTitle}>Janrlar</h3>
        <ul className={css.footerListItems}>
          <li>Maqollar</li>
          <li>Iboralar</li>
          <li>Arxaizm</li>
          <li>Istorizm</li>
          <li>She’riy san’at</li>
        </ul>
      </div>
      <div className={css.footerMurojaat}>
        <div className={css.footerMurojaatMain}>
          <h3 className={css.footerTitle}>Murojaat uchun</h3>
          <ul className={css.footerListItems}>
            <li>+998 91 333 86 55</li>
            <li>+998 93 159 11 01</li>
            <li>+998 91 254 50 10</li>
            <li>sadullayevashahrizoda@gmail.com</li>
            <li>Telegram: @programmer</li>
          </ul>
        </div>
      </div>
      <div className={css.footerLogoResponsive}>
        <img src={footerLogo} alt="footer logo" />
      </div>
    </div>
  );
};

export default FooterComponent;
