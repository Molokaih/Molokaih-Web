import React from "react";
import style from "./DetailService.module.css";
import { useParams, NavLink } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import {
  Star,
  CurrencyCircleDollar,
  Magnet,
  ChartLineUp,
} from "phosphor-react";

import web from "../../assets/serviceWeb.avif";
import ux from "../../assets/servicesUXUI.avif";
import mobile from "../../assets/serviceMobile.avif";

export default function DetailService() {
  const { position } = useParams();
  const dataServices = [
    {
      title: "Desarrollo Web",
      content:
        "Nos esforzamos por que nuestros productos sean correctos, fáciles de usar, seguros, eficientes, flexibles, mantenibles, escalables y robustos.",
      image: web,
    },
    {
      title: "Diseño UX/UI",
      content:
        "Nos esforzamos por que nuestros productos sean correctos, fáciles de usar, seguros, eficientes, flexibles, mantenibles, escalables y robustos.",
      image: ux,
    },
    {
      title: "Desarrollo Mobile",
      content:
        "Nos esforzamos por que nuestros productos sean correctos, fáciles de usar, seguros, eficientes, flexibles, mantenibles, escalables y robustos.",
      image: mobile,
    },
  ];
  return (
    <header className={style.detailService}>
      <Nav />
      <section className={style.contentInfoService}>
        <img src={dataServices[position].image} alt="" />
        <div className={style.texts}>
          <h1>{dataServices[position].title}</h1>
          <p>{dataServices[position].content}</p>
          <NavLink className={style.button} to="/contact">
            Obtener
          </NavLink>
        </div>
      </section>
      <section className={style.sectionBenefits}>
        <div className={style.contentTitleAndBorder}>
          <h2 className={style.title}>Beneficios</h2>
          <svg
            className={style.borderTitle}
            viewBox="0 0 81 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 2.5C0.5 1.11929 1.61929 0 3 0H78C79.3807 0 80.5 1.11929 80.5 2.5C80.5 3.88071 79.3807 5 78 5H3C1.61929 5 0.5 3.88071 0.5 2.5Z"
              fill="#25D9D9"
            />
          </svg>
        </div>
        <div className={style.benefit}>
          <Star color="#25D9D9" className={style.logoBenefits} />
          <p>Experiencia satisfactoria del usuario.</p>
        </div>
        <div className={style.benefit}>
          <CurrencyCircleDollar
            color="#25D9D9"
            className={style.logoBenefits}
          />
          <p>Menos costos de soporte.</p>
        </div>
        <div className={style.benefit}>
          <Magnet color="#25D9D9" className={style.logoBenefits} />
          <p>Mayor retención de clientes.</p>
        </div>
        <div className={style.benefit}>
          <ChartLineUp color="#25D9D9" className={style.logoBenefits} />
          <p>Impulso en la conversión y ventas.</p>
        </div>
      </section>
    </header>
  );
}
