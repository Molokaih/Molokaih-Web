import style from "./Nav.module.css";
import logo from "../../assets/molokaih-logo-5.avif";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  X,
  List,
  CaretRight,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className={style.nav}>
      <NavLink to="/">
        <img
          src={logo}
          alt=""
          className={style.logo}
          style={{ position: menu ? "fixed" : "relative" }}
        />
      </NavLink>
      <nav className={style.navigation}>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/wedo">What we do</NavLink>
      </nav>
      <NavLink to="/contact" className={style.buttonContact}>
        Contact us
      </NavLink>
      {menu ? (
        <X
          size="30"
          onClick={() => setMenu(false)}
          style={{ display: menu ? "flex" : "none" }}
          className={style.buttonClose}
        />
      ) : (
        <List
          size="30"
          onClick={() => setMenu(true)}
          // style={{ display: menu ? "none" : "flex" }}
          className={style.buttonMenu}
        />
      )}
      <nav
        className={style.navegationMobile}
        style={{ display: menu ? "flex" : "none" }}
      >
        <div className={style.contentLinks}>
          <NavLink to="/about" className={style.linksMobile}>
            About
          </NavLink>
          <CaretRight className={style.logoNavegation} />
        </div>
        <div className={style.contentLinks}>
          <NavLink to="/wedo" className={style.linksMobile}>
            Como lo hacemos
          </NavLink>
          <CaretRight className={style.logoNavegation} />
        </div>
        <div className={style.contentLinks}>
          <NavLink to="/contact" className={style.linksMobile}>
            Contactanos
          </NavLink>
          <CaretRight className={style.logoNavegation} />
        </div>

        <div className={style.networks}>
          <a href="https://www.instagram.com/molokaih/" target="_blank">
            <InstagramLogo className={style.logoNetwork} />
          </a>
          <a href="https://www.linkedin.com/company/molokaih/" target="_blank">
            <LinkedinLogo className={style.logoNetwork} />
          </a>
        </div>
      </nav>
    </nav>
  );
}