import React, { useContext, useEffect } from "react";
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
import Footer from "../../components/Footer/Footer";

import { LanguageContext } from "../../App";
import ButtonWhatsapp from "../../components/ButtonWhatsapp/ButtonWhatsapp";

export default function DetailService() {
  const { language, setLanguage } = useContext(LanguageContext);

  const { position } = useParams();

  const dataServices = [
    {
      title: "Website development",
      content:
        "We forge perfection into every line of code, fusing innovation and functionality to create websites that not only are visually captivating, but also, but also drive performance, scalability and ease of maintenance.",
      image: web,
    },
    {
      title: "Website design",
      content:
        "We guide every design to the detail for an exceptional experience: fusing impeccable functionality with captivating esthetics, for a user journey that transcends the ordinary.",
      image: ux,
    },
    {
      title: "Application development",
      content:
        "We build exceptional mobile experiences, where every pulse of code translates into applications that dazzle aesthetically, operate effortlessly and expand with agility, providing an unparalleled journey in the digital world.",
      image: mobile,
    },
  ];

  const dataServicesEs = [
    {
      title: "Desarrollo de sitios web",
      content:
        "Forjamos la perfección en cada línea de código, fusionando innovación y funcionalidad para crear sitios web que no sólo sean visualmente cautivadores, sino que también impulsen el rendimiento, la escalabilidad y la facilidad de mantenimiento.",
      image: web,
    },
    {
      title: "Diseño de paginas web",
      content:
        "Guiamos cada diseño al detalle para lograr una experiencia excepcional: fusionando una funcionalidad impecable con una estética cautivadora, para un viaje del usuario que trasciende lo ordinario.",
      image: ux,
    },
    {
      title: "Desarrollo de aplicaciones",
      content:
        "Construimos experiencias móviles excepcionales, donde cada pulso de código se traduce en aplicaciones que deslumbran estéticamente, funcionan sin esfuerzo y se expanden con agilidad, proporcionando un viaje sin igual en el mundo digital.",
      image: mobile,
    },
  ];

  const dataLanguege = language === "es" ? dataServicesEs : dataServices;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className={style.detailService}>
      <Nav />
      <ButtonWhatsapp />
      <section className={style.contentInfoService}>
        <img src={dataLanguege[position].image} alt="" />
        <div className={style.texts}>
          <h1>{dataLanguege[position].title}</h1>
          <p>{dataLanguege[position].content}</p>
          <NavLink className={style.button} to="/contact">
            {language === "es" ? "Reunirse con el experto" : "Meet at expert"}
          </NavLink>
        </div>
      </section>
      <section className={style.sectionBenefits}>
        <div className={style.contentTitleAndBorder}>
          <h2 className={style.title}>
            {language === "es" ? "Nuestro valor añadido" : "Our Added value"}
          </h2>
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
          <p>
            {language === "es"
              ? "Experiencia de usuario satisfactoria."
              : "Satisfactory user experience."}
          </p>
        </div>
        <div className={style.benefit}>
          <CurrencyCircleDollar
            color="#25D9D9"
            className={style.logoBenefits}
          />
          <p>
            {language === "es"
              ? "Inversión inteligente y flexible."
              : "Intelligent and flexible investment."}
          </p>
        </div>
        <div className={style.benefit}>
          <Magnet color="#25D9D9" className={style.logoBenefits} />
          <p>
            {language === "es"
              ? "Alto cumplimiento de los objetivos."
              : "High compliance with objectives."}
          </p>
        </div>
        <div className={style.benefit}>
          <ChartLineUp color="#25D9D9" className={style.logoBenefits} />
          <p>
            {language === "es"
              ? "Asistencia permanente a la calidad."
              : "Permanent quality assistance."}
          </p>
        </div>
      </section>
      <Footer />
    </header>
  );
}
