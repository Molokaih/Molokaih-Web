import style from "./Nav.module.css";
import logo from "../../assets/molokaih-logo-5.avif";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import {
  X,
  List,
  CaretRight,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";

import { LanguageContext } from "../../App";

import es from "../../assets/es.avif";
import en from "../../assets/en.avif";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <nav className={style.nav}>
      <NavLink to="/">
        <img
          src={logo}
          alt="logo Molokaih"
          className={style.logo}
          style={{ position: menu ? "fixed" : "relative" }}
        />
      </NavLink>
      <nav className={style.navigation}>
        <NavLink to="/about">
          {language === "es" ? "Sobre nosotros" : "About us"}
        </NavLink>
        <NavLink to="/wedo">
          {language === "es" ? "Como trabajamos" : "What we do"}
        </NavLink>
      </nav>
      <div className={style.contentButtons}>
        <NavLink to="/contact" className={style.buttonContact}>
          {language === "es" ? "Contactanos" : "Contact us"}
        </NavLink>
        <img
          src={language === "es" ? es : en}
          onClick={() =>
            language === "es" ? setLanguage("en") : setLanguage("es")
          }
          className={style.selectLanguage}
        />
      </div>
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
          className={style.buttonMenu}
        />
      )}
      <nav
        className={style.navegationMobile}
        style={{ display: menu ? "flex" : "none" }}
      >
        <div className={style.contentLinks}>
          <NavLink to="/about" className={style.linksMobile}>
            {language === "es" ? "Sobre nosotros" : "About us"}
          </NavLink>
          <CaretRight className={style.logoNavegation} />
        </div>
        <div className={style.contentLinks}>
          <NavLink to="/wedo" className={style.linksMobile}>
            {language === "es" ? "Como trabajamos" : "What we do"}
          </NavLink>
          <CaretRight className={style.logoNavegation} />
        </div>
        <div className={style.contentLinks}>
          <NavLink to="/contact" className={style.linksMobile}>
            {language === "es" ? "Contactanos" : "Contact us"}
          </NavLink>
          <CaretRight className={style.logoNavegation} />
        </div>
        <div className={style.contentNetworks}>
          <div className={style.networks}>
            <a href="https://www.instagram.com/molokaih/" target="_blank">
              <InstagramLogo className={style.logoNetwork} />
            </a>
            <a
              href="https://www.linkedin.com/company/molokaih/"
              target="_blank"
            >
              <LinkedinLogo className={style.logoNetwork} />
            </a>
          </div>

          <img
            src={language === "es" ? es : en}
            onClick={() =>
              language === "es" ? setLanguage("en") : setLanguage("es")
            }
            className={style.selectLanguage}
          />
        </div>
      </nav>
    </nav>
  );
}
