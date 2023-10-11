import React from "react";
import style from "./Services.module.css";

import serviceMobile from "../../assets/serviceMobile.avif";
import serviceWeb from "../../assets/serviceWeb.avif";
import servicesUXUI from "../../assets/servicesUXUI.avif";

import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

import { ArrowRight } from "phosphor-react";

import { motion } from "framer-motion";
import Nav from "../../components/Nav/Nav";

export default function Services() {
  return (
    <div className={style.services}>
      <Nav />
      <section id="servicios" className={style.sectionServices}>
        <div className={style.contentTitleAndBorder}>
          <h2 className={style.title}>Services</h2>
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

        <div className={style.contentService}>
          <NavLink to="/detail/1">
            <img src={servicesUXUI} alt="" />
          </NavLink>
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
            className={style.contentTextService}
          >
            <NavLink to="/detail/1" className={style.titleService}>
              UX/UI design
              <ArrowRight
                color="#25D9D9"
                className={style.buttonDetail}
                weight="bold"
              />
            </NavLink>
            <p className={style.textService}>
              We guide every design to the detail for an exceptional experience:
              fusing impeccable functionality with captivating esthetics, for a
              user journey that transcends the ordinary.
            </p>
          </motion.div>
        </div>
        <div className={style.contentService}>
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
            className={style.contentTextService}
          >
            <NavLink to="/detail/0" className={style.titleService}>
              Web development
              <ArrowRight
                color="#25D9D9"
                className={style.buttonDetail}
                weight="bold"
              />
            </NavLink>
            <p className={style.textService}>
              We forge perfection into every line of code, fusing innovation and
              functionality to create websites that not only are visually
              captivating, but also drive performance, scalability and ease of
              maintenance.
            </p>
          </motion.div>
          <NavLink to="/detail/0">
            <img src={serviceWeb} alt="" />
          </NavLink>
        </div>
        <div className={style.contentService}>
          <NavLink to="/detail/2">
            <img src={serviceMobile} alt="" />
          </NavLink>
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
            className={style.contentTextService}
          >
            <NavLink to="/detail/2" className={style.titleService}>
              Mobile development
              <ArrowRight
                color="#25D9D9"
                className={style.buttonDetail}
                weight="bold"
              />
            </NavLink>
            <p className={style.textService}>
              We build exceptional mobile experiences, where every pulse of code
              translates into applications that dazzle aesthetically, operate
              effortlessly and expand with agility, providing an unparalleled
              journey in the digital world.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
