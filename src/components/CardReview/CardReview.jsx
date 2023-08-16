import React from "react";
import style from "./CardReview.module.css";

export default function CardReview({
  textReview,
  imageProfile,
  nameUser,
  position,
  logo,
}) {
  return (
    <div className={style.cardReview}>
      <img src={imageProfile} alt="Profile" className={style.imageProfile} />
      <p className={style.textReview}>{textReview}</p>
      <div>
        <h3 className={style.namePerson}>{nameUser}</h3>
        <p className={style.booth}>{position}</p>
      </div>
      <img src={logo} alt="logoSCA" className={style.imageCompany} />
    </div>
  );
}
