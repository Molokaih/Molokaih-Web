import React, { useContext } from "react";
import style from "./WeDo.module.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import arrow from "../../assets/weDo/arrow.svg";
import figma from "../../assets/weDo/figma.svg";
import react from "../../assets/weDo/react.svg";
import nodejs from "../../assets/weDo/nodejs.svg";
import flutter from "../../assets/weDo/flutter.svg";
import github from "../../assets/weDo/github.svg";
import postgres from "../../assets/weDo/postgresql.svg";
import imageWeDo from "../../assets/weDo/imageWeDo.avif";
import imageWeDoPhone from "../../assets/weDo/imageWeDoPhone.avif";
import imageWeDoEs from "../../assets/weDo/imageWeDoEs.avif";
import imageWeDoPhoneEs from "../../assets/weDo/imageWeDoPhoneEs.avif";

import { motion } from "framer-motion";

import { LanguageContext } from "../../App";
import ButtonWhatsapp from "../../components/ButtonWhatsapp/ButtonWhatsapp";

export default function WeDo() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={style.weDo}>
      <Nav />
      <ButtonWhatsapp />
      <section className={style.sectionText}>
        <div className={style.contentInfo}>
          <div className={style.contentText}>
            <motion.div
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className={style.contentTitleAndBorder}
            >
              <h2 className={style.title}>
                {language === "es"
                  ? "Lo que nos diferencia"
                  : "What makes us different"}
              </h2>
              <svg
                className={style.borderTitle}
                width="81"
                height="5"
                viewBox="0 0 81 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 2.5C0.5 1.11929 1.61929 0 3 0H78C79.3807 0 80.5 1.11929 80.5 2.5C80.5 3.88071 79.3807 5 78 5H3C1.61929 5 0.5 3.88071 0.5 2.5Z"
                  fill="#25D9D9"
                />
              </svg>
            </motion.div>
            <motion.p
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
            >
              {language === "es"
                ? "Gracias a nuestro enfoque integrado, capacitamos a nuestros clientes para que activamente en cada paso del proceso de desarrollo. Esta metodología de colaboración de metodología de colaboración garantiza que no sólo sean la evolución de su producto, lo que se traduce en una experiencia experiencia incomparable y distintiva. Creemos firmemente que que implicar a nuestros clientes es la clave para crear una solución excepcional y a medida."
                : " Through our integrated approach, we empower our clients to actively engage in every step of the development journey. This collaborative methodology ensures that they not only witness but actively shape the evolution of their product, resulting in an unparalleled and distinctive experience. We firmly believe involving our clients is the key to crafting a truly exceptional and tailored solution."}
            </motion.p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjB0ZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className={style.contentInfo}>
          <img
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className={style.contentText}>
            <motion.div
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className={style.contentTitleAndBorder}
            >
              <h2 className={style.title}>
                {language === "es"
                  ? "Metodologías con las que trabajamos"
                  : "Methodologies with which we work"}
              </h2>
              <svg
                className={style.borderTitle}
                width="81"
                height="5"
                viewBox="0 0 81 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 2.5C0.5 1.11929 1.61929 0 3 0H78C79.3807 0 80.5 1.11929 80.5 2.5C80.5 3.88071 79.3807 5 78 5H3C1.61929 5 0.5 3.88071 0.5 2.5Z"
                  fill="#25D9D9"
                />
              </svg>
            </motion.div>
            <motion.p
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
            >
              {language === "es" ? (
                <p>
                  Nuestra metodología <span>Lean </span> se centra en eliminar y
                  optimizar los procesos para lograr la eficiencia operativa.
                  Ayuda a identificar oportunidades de crecimiento y mantener la
                  agilidad negocio.
                  <br />
                  <br />
                  <span>Pensamiento de diseño </span>
                  creatividad a través de la empatía y la colaboración, guiando
                  la la innovación desde la generación de ideas hasta su
                  aplicación, satisfaciendo necesidades del cliente.
                  <br />
                  <br />
                  <span>Scrum </span>
                  promueve la gestión ágil de proyectos con colaboración y
                  entrega incremental, garantizando la y adaptabilidad a los
                  cambios.
                </p>
              ) : (
                <p>
                  Our <span>Lean </span>methodology focuses on eliminating waste
                  and optimizing processes for operational efficiency. It helps
                  identify growth opportunities and maintain agility in
                  business.
                  <br />
                  <br />
                  <span>Design Thinking </span>
                  unlocks creativity through empathy and collaboration, guiding
                  innovation from idea generation to implementation, satisfying
                  customer needs.
                  <br />
                  <br />
                  <span>Scrum </span>
                  methodology promotes agile project management with
                  collaboration and incremental delivery, ensuring timely
                  completion and adaptability to changes.
                </p>
              )}
            </motion.p>
          </div>
        </div>
      </section>
      <section className={style.sectionMethodology}>
        {window.innerWidth <= 600 ? (
          language === "es" ? (
            <img src={imageWeDoPhoneEs} alt="image methodology" />
          ) : (
            <img src={imageWeDoPhone} alt="image methodology" />
          )
        ) : language === "es" ? (
          <img src={imageWeDoEs} alt="image methodology" />
        ) : (
          <img src={imageWeDo} alt="image methodology" />
        )}
      </section>
      <section className={style.sectionTechnologies}>
        <div className={style.contentTechnologies}>
          <p>
            {language === "es" ? "Experiencia de usuario" : "User experience"}
          </p>
          <img src={arrow} alt="" />
          <div className={style.contentLogos}>
            <img src={figma} alt="" className={style.logos} />
            <div></div>
          </div>
        </div>
        <div className={style.contentTechnologies}>
          <p>Front End</p>
          <img src={arrow} alt="" />
          <div className={style.contentLogos}>
            <div></div>
            <img src={react} alt="" className={style.logos} />
          </div>
        </div>
        <div className={style.contentTechnologies}>
          <p>Back End</p>
          <img src={arrow} alt="" />
          <div className={style.contentLogos}>
            <img src={nodejs} alt="" className={style.logos} />
            <div></div>
          </div>
        </div>
        <div className={style.contentTechnologies}>
          <p>{language === "es" ? "Base de datos" : "Data base"}</p>
          <img src={arrow} alt="" />
          <div className={style.contentLogos}>
            <div></div>
            <img src={postgres} alt="" className={style.logos} />
          </div>
        </div>
        <div className={style.contentTechnologies}>
          <p>
            {language === "es" ? "Control de versiones" : "Version control"}
          </p>
          <img src={arrow} alt="" />
          <div className={style.contentLogos}>
            <img src={github} alt="" className={style.logos} />
            <div></div>
          </div>
        </div>
        <div className={style.contentTechnologies}>
          <p>{language === "es" ? "Móvil" : "Mobile"}</p>
          <img src={arrow} alt="" />
          <div className={style.contentLogos}>
            <div></div>
            <img src={flutter} alt="" className={style.logos} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
