import React, { useEffect } from "react";
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

export default function DetailService() {
  const { position } = useParams();
  const dataServices = [
    {
      title: "Web development",
      content:
        "We forge perfection into every line of code, fusing innovation and functionality to create websites that not only are visually captivating, but also, but also drive performance, scalability and ease of maintenance.",
      image: web,
    },
    {
      title: "UX/UI design",
      content:
        "We guide every design to the detail for an exceptional experience: fusing impeccable functionality with captivating esthetics, for a user journey that transcends the ordinary.",
      image: ux,
    },
    {
      title: "Mobile development",
      content:
        "We build exceptional mobile experiences, where every pulse of code translates into applications that dazzle aesthetically, operate effortlessly and expand with agility, providing an unparalleled journey in the digital world.",
      image: mobile,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className={style.detailService}>
      <Nav />
      <section className={style.contentInfoService}>
        <img src={dataServices[position].image} alt="" />
        <div className={style.texts}>
          <h1>{dataServices[position].title}</h1>
          <p>{dataServices[position].content}</p>
          <NavLink className={style.button} to="/contact">
            Obtain
          </NavLink>
        </div>
      </section>
      <section className={style.sectionBenefits}>
        <div className={style.contentTitleAndBorder}>
          <h2 className={style.title}>Benefits</h2>
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
          <p>Satisfactory user experience.</p>
        </div>
        <div className={style.benefit}>
          <CurrencyCircleDollar
            color="#25D9D9"
            className={style.logoBenefits}
          />
          <p>Lower support costs.</p>
        </div>
        <div className={style.benefit}>
          <Magnet color="#25D9D9" className={style.logoBenefits} />
          <p>Increased customer retention.</p>
        </div>
        <div className={style.benefit}>
          <ChartLineUp color="#25D9D9" className={style.logoBenefits} />
          <p>Boost in conversion and sales.</p>
        </div>
      </section>
      <Footer />
    </header>
  );
}
