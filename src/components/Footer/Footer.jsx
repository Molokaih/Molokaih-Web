import React from "react";
import style from "./Footer.module.css";
import { InstagramLogo, LinkedinLogo } from "phosphor-react";
import logoM from "../../assets/logoM.png";

export default function Footer() {
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
          <h3 className={style.titleSection}>Useful links</h3>
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">What we do</a>
        </div>

        <div>
          <h3 className={style.titleSection}>Contact us</h3>

          <p>
            8 The Green STE B Dover, DE 19901
            <br />
            +1 (647) 865-9825 <br />
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
