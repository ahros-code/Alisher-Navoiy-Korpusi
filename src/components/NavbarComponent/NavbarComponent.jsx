import css from './NavbarComponent.module.css'
import navLogo from '../../assets/images/navLogo.svg'
import search from '../../assets/images/search.svg'
import flag from '../../assets/images/flag.svg'
import {Link, useLocation} from "react-router-dom";
import Hamburger from 'hamburger-react'
import {useState} from "react";
import {Drawer, List, ListItem, ListItemText} from "@mui/material";
import tarjimaiHol from '../../assets/images/tarjimaiHol.svg'


const NavbarComponent = () => {
    const location = useLocation();
    const [isOpen, setOpen] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => {
        setOpen(false)
        setOpenDrawer(false)
    }

    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };
    return (
        <div className={css.test}>
            <div className={css.hamburgerMenu2} style={location.pathname === '/' ? {} : {
                display: 'none'
            }}>
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} onToggle={toggleDrawer(true)} />
            </div>
            <div className={css.drawer}>
                <Drawer open={openDrawer} onClose={handleClose} style={{width: 300}}  PaperProps={{ style: { width: 300 } }}>
                    <List>
                        <ListItem>
                                <Link to={'/'} className={css.drawerHead} onClick={handleClose}>
                                    <div >
                                        <img src={navLogo} alt={"sasa"}/>
                                    </div>
                                    <ListItemText primary={"Alisher Navoiy Korpusi"} />
                                </Link>
                        </ListItem>
                        <ListItem>
                            <Link to={'/about'} className={location.pathname === '/about' ? css.activeDrawerItem : css.notActiveDrawerItem}  onClick={handleClose}>
                                <img src={tarjimaiHol} alt={"sasa"}/>
                                <div className={css.drawerItemText}>Tarjimayi hol</div>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to={'/devonlar'} onClick={handleClose}
                                className={location.pathname === '/devonlar' ? css.activeDrawerItem : css.notActiveDrawerItem}>
                                <img src={tarjimaiHol} alt={"sasa"}/>
                                <div className={css.drawerItemText}>Devonlar</div>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to={'/asarlar'} onClick={handleClose}
                                className={location.pathname === '/asarlar' ? css.activeDrawerItem : css.notActiveDrawerItem}>
                                <img src={tarjimaiHol} alt={"sasa"}/>
                                <div className={css.drawerItemText}>Asarlar</div>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to={'/ilmiy-tadqiqotlar'} onClick={handleClose}
                                className={location.pathname === '/ilmiy-tadqiqotlar' ? css.activeDrawerItem : css.notActiveDrawerItem}>
                                <img src={tarjimaiHol} alt={"sasa"}/>
                                <div className={css.drawerItemText}>Ilmiy tadqiqotlar</div>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to={'/korpus'} onClick={handleClose}
                                className={location.pathname === '/korpus' ? css.activeDrawerItem : css.notActiveDrawerItem}>
                                <img src={tarjimaiHol} alt={"sasa"}/>
                                <div className={css.drawerItemText}>Korpus haqida</div>
                            </Link>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
            <div className={css.navWrapper}>
                <div className={css.navLogo}>
                    <Link to={"/"}>
                        <img src={navLogo} alt="logo"/>
                    </Link>
                </div>
                <div className={css.navInput}>
                    <img src={search} alt="search icon"/>
                    <input type="text" className={css.searchInput} placeholder={'Qidiruv'}/>
                </div>
                <div className={css.navbarItemsList}>
                    <ul className={css.itemsList}>
                        <li className={css.item}><Link to="/about"
                                                       className={location.pathname === '/about' ? css.activeLink : ''}>Tarjimai
                            hol</Link></li>
                        <li className={css.item}><Link to="/devonlar"
                                                       className={location.pathname === '/devonlar' ? css.activeLink : ''}>Devonlar</Link>
                        </li>
                        <li className={css.item}><Link to="/asarlar"
                                                       className={location.pathname === '/asarlar' ? css.activeLink : ''}>Asarlar</Link>
                        </li>
                        <li className={css.item}><Link to="/ilmiy-tadqiqotlar"
                                                       className={location.pathname === '/news' ? css.activeLink : ''}>Ilmiy
                            tadqiqotlar</Link>
                        </li>
                        <li className={css.item}><Link to="/korpus"
                                                       className={location.pathname === '/korpus' ? css.activeLink : ''}>Korpus
                            haqida</Link></li>
                    </ul>

                </div>
                <div className={css.navFlag}>
                    <img src={flag} alt="flag icon"/>
                </div>
                <div className={css.hamburgerMenu}>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={24}/>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent