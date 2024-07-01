import css from './NavbarComponent.module.css'
import navLogo from '../../assets/images/navLogo.svg'
import search from '../../assets/images/search.svg'
import flag from '../../assets/images/flag.svg'
import {Link, useLocation, useNavigate} from "react-router-dom";
import Hamburger from 'hamburger-react'
import {useContext, useState} from "react";
import {Drawer, List, ListItem, ListItemText} from "@mui/material";
import tarjimaiHol from '../../assets/images/tarjimaiHol.svg'
import {SearchContext} from "../../context/SearchContext.jsx";


const NavbarComponent = () => {
    const location = useLocation();
    const [isOpen, setOpen] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false);
    const {performSearch} = useContext(SearchContext);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false)
        setOpenDrawer(false)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (location.pathname !== '/devonlar') {
                navigate("/devonlar")
                performSearch(searchValue)
            } else {
                performSearch(searchValue);
            }
        }
    };


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
                                className={location.pathname === '/works' ? css.activeDrawerItem : css.notActiveDrawerItem}>
                                <img src={tarjimaiHol} alt={"sasa"}/>
                                <div className={css.drawerItemText}>Asarlar</div>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to={'/news'} onClick={handleClose}
                                className={location.pathname === '/news' ? css.activeDrawerItem : css.notActiveDrawerItem}>
                                <img src={tarjimaiHol} alt={"sasa"}/>
                                <div className={css.drawerItemText}>Yangiliklar</div>
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
                    <input type="text" className={css.searchInput} placeholder={'Qidiruv'} value={searchValue} onChange={e => setSearchValue(e.target.value)} onKeyPress={handleKeyPress} />
                </div>
                <div className={css.navbarItemsList}>
                    <ul className={css.itemsList}>
                        <li className={css.item}><Link to="/about"
                                                       className={location.pathname === '/about' ? css.activeLink : ''}>Tarjimai
                            hol</Link></li>
                        <li className={css.item}><Link to="/devonlar"
                                                       className={location.pathname === '/devonlar' ? css.activeLink : ''}>Devonlari</Link>
                        </li>
                        <li className={css.item}><Link to="/works"
                                                       className={location.pathname === '/works' ? css.activeLink : ''}>Asarlari</Link>
                        </li>
                        <li className={css.item}><Link to="/researches"
                                                       className={location.pathname === '/researches' ? css.activeLink : ''}>Ilmiy
                            tadqiqotlar</Link></li>
                        <li className={css.item}><Link to="/news"
                                                       className={location.pathname === '/news' ? css.activeLink : ''}>Yangiliklar</Link>
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