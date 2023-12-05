import React from "react";
import style from "./ButtonWhatsapp.module.css";
import { WhatsappLogo } from "phosphor-react";

export default function ButtonWhatsapp() {
  return (
    <a
      href="https://wa.me/34656651032"
      target="_blank"
      className={style.whatsapp}
    >
      ¿Necesitas Ayuda? <WhatsappLogo className={style.icon} />
    </a>
  );
}
