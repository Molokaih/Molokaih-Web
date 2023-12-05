import React, { useContext } from "react";
import style from "./Footer.module.css";
import logoM from "../../assets/logoM.avif";
import { InstagramLogo, LinkedinLogo, Bank } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../App";

export default function Footer() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={style.footer}>
      <div className={style.contentTextLeft}>
        {/* <h3 className={style.title}>Molokaih</h3> */}
        <img src={logoM} alt="" className={style.logo} />
        <div className={style.networks}>
          <a href="https://www.instagram.com/molokaih/" target="_blank">
            <InstagramLogo className={style.logoNetwork} weight="fill" />
          </a>
          <a href="https://www.linkedin.com/company/molokaih/" target="_blank">
            <LinkedinLogo className={style.logoNetwork} weight="fill" />
          </a>
        </div>
      </div>

      <div className={style.contentTextRigth}>
        <div className={style.contentLinksWeb}>
          <h3 className={style.titleSection}>
            {language === "es" ? "Metodos de pago" : "Payment methods"}
          </h3>
          <p>
            <Bank className={style.logobank} />
            {language === "es" ? "Transferencia bancaria" : "Bank transfer"}
          </p>
        </div>
        <div className={style.contentLinksWeb}>
          <h3 className={style.titleSection}>
            {language === "es" ? "Links utiles" : "Useful links"}
          </h3>
          <NavLink to="/">{language === "es" ? "Inicio" : "Home"}</NavLink>
          <NavLink to="/about">
            {language === "es" ? "Sobre nosotros" : "About us"}
          </NavLink>
          <NavLink to="/wedo">
            {language === "es" ? "Como trabajamos" : "What we do"}
          </NavLink>
        </div>

        <div>
          <h3 className={style.titleSection}>
            {language === "es" ? "Contactanos" : "Contact us"}
          </h3>

          <p>
            8 The Green STE B Dover, DE 19901
            <br />
            +39 (320) 912 4943 <br />
            hello@molokaih.com
          </p>
        </div>
      </div>
      <div className={style.contentTextBottom}>
        <div className={style.contentTerms}>
          <a
            href="https://drive.google.com/file/d/1nUVrB3ukyFZoCwHPbB7_ao469mTO5U8_/view"
            target="_blank"
          >
            PRIVACY POLICY{" "}
          </a>
          <a
            href="https://drive.google.com/file/d/1nUVrB3ukyFZoCwHPbB7_ao469mTO5U8_/view"
            target="_blank"
          >
            | TERMS AND CONDITIONS
          </a>
        </div>
        <p>Copyright © 2023 molokaih LLC</p>
      </div>
    </div>
  );
}
