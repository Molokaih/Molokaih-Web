import React from "react";
import style from "./CardReview.module.css";
import { motion } from "framer-motion";

export default function CardReview({
  textReview,
  imageProfile,
  nameUser,
  position,
  logo,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      viewport={{ once: true }}
      className={style.cardReview}
    >
      <img src={imageProfile} alt="Profile" className={style.imageProfile} />
      <p className={style.textReview}>{textReview}</p>
      <div>
        <h3 className={style.namePerson}>{nameUser}</h3>
        <p className={style.booth}>{position}</p>
      </div>
      <img src={logo} alt="logoSCA" className={style.imageCompany} />
    </motion.div>
  );
}
