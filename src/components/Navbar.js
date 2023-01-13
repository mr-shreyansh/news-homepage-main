import style from "../components/Navbar.module.css";
import logo from "../images/logo.svg";
import { useState } from "react";
import cx from "classnames";
const Navbar = () => {

    const [active, setActive] = useState(style.nav_list);
    const [toggleIcon, setToggleIcon] =useState(style.nav_toggler);
    const navToggle =()=>{
        active === style.nav_list ? setActive( cx(style.nav_list, style.nav_active)) : setActive(style.nav_list);
        toggleIcon === style.nav_toggler ? setToggleIcon(cx(style.nav_toggler, style.toggle)) : setToggleIcon (style.nav_toggler);
    }

    return ( 
        <div className={style.navbar}>
            <div className={style.nav_icon}><img src={logo}></img></div>
            <div>
                <ul className={active}>
                    <li className={style.nav_item}><a>Home</a></li>
                    <li className={style.nav_item}><a>New</a></li>
                    <li className={style.nav_item}><a>Popular</a></li>
                    <li className={style.nav_item}><a>Trending</a></li>
                    <li className={style.nav_item}><a>Categories</a></li>
                </ul>
                <div onClick={navToggle} className={toggleIcon}>
                    <div className={style.line1}></div>
                    <div className={style.line2}></div>
                    <div className={style.line3}></div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;