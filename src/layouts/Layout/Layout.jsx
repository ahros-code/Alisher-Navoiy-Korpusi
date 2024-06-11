import css from './Layout.module.css'
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  return (
      <div className={css.wrapper}>
        <div className={css.navbar}>
          <div className={css.container}>
            <Navbar />
          </div>
        </div>
        <div className={css.main}>
          {/*<div className={css.container}>*/}
            <Outlet />
          {/*</div>*/}
        </div>
          <div className={css.footer}>
              <div className={css.container}>
                  <Footer />
              </div>
          </div>
      </div>
  )
}

export default Layout