import React, { useState } from "react";
import style from "./CardProfile.module.css";
import { LinkedinLogo, X } from "phosphor-react";
import { ArrowRight } from "phosphor-react";

export default function CardProfile({
  name,
  position,
  imageProfile,
  urlLinkedin,
  description,
}) {
  const [viewDescription, setViewDescription] = useState(false);
  return (
    <div className={style.cardProfile}>
      <img src={imageProfile} alt="" className={style.imageProfile} />
      <div className={style.contentNameAndInfo}>
        <h3 className={style.name}>{name}</h3>
        <ArrowRight
          color="#25D9D9"
          weight="bold"
          onClick={() => setViewDescription(true)}
          className={style.buttonDescription}
        />
      </div>
      <p className={style.position}>{position}</p>

      <section
        className={style.popup}
        style={{ display: viewDescription ? "flex" : "none" }}
      >
        <div className={style.contentInfo}>
          <X
            className={style.buttonClose}
            onClick={() => setViewDescription(false)}
          />
          <div className={style.contentImageAndNetwork}>
            <img src={imageProfile} alt="" />
            <a href={urlLinkedin} target="_blank">
              <LinkedinLogo className={style.logoNetwork} weight="fill" />
            </a>
          </div>

          <div className={style.contentNameAndDescription}>
            <h3>{name}</h3>
            <p className={style.infoProfile}>{description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
