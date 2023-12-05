import Nav from "../../components/Nav/Nav";
import style from "./Home.module.css";
import bgHome from "../../assets/backgroundHome.avif";
import { PenNib, Browser, DeviceMobile } from "@phosphor-icons/react";

import serviceMobile from "../../assets/serviceMobile.avif";
import serviceWeb from "../../assets/serviceWeb.avif";
import servicesUXUI from "../../assets/servicesUXUI.avif";

import logoSCA from "../../assets/reviws/logoSCA.avif";
import logoZDA from "../../assets/reviws/logoZDA.avif";
import DanelProfile from "../../assets/reviws/DanelProfile.avif";
import SamulProfile from "../../assets/reviws/SamulProfile.avif";
import map from "../../assets/mapaMolokaih.avif";

import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import CardReview from "../../components/CardReview/CardReview";

import { ArrowRight } from "phosphor-react";

import { motion } from "framer-motion";

import { LanguageContext } from "../../App";
import { useContext } from "react";
import ButtonWhatsapp from "../../components/ButtonWhatsapp/ButtonWhatsapp";

export default function Home() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <main className={style.home}>
      <Nav />
      <ButtonWhatsapp />
      <main className={style.hero}>
        <section className={style.contentPresentation}>
          <motion.h1
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {language === "es"
              ? "Desarrollo de sitios web"
              : "Software development"}
          </motion.h1>
          <motion.h2
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
            className={style.subtitle}
          >
            {language === "es"
              ? "Conecte con nuestras soluciones innovadoras"
              : "Connect with our innovative solutions"}
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.6,
            }}
            className={style.contentSolutions}
          >
            <NavLink className={style.solutionCard} to="/detail/1">
              {language === "es" ? (
                <p>Diseño de paginas web</p>
              ) : (
                <p>Website design</p>
              )}

              <PenNib color="#24B0FF" className={style.logoCardSoluiton} />
            </NavLink>
            <NavLink className={style.solutionCard} to="/detail/0">
              {language === "es" ? (
                <p>Desarrollo de paginas web</p>
              ) : (
                <p>Website development</p>
              )}
              <Browser color="#3EF3B2" className={style.logoCardSoluiton} />
            </NavLink>
            <NavLink className={style.solutionCard} to="/detail/2">
              <p></p>
              {language === "es" ? (
                <p>Desarrollo de aplicaciones</p>
              ) : (
                <p>Application development</p>
              )}
              <DeviceMobile
                color="#8F00FF"
                className={style.logoCardSoluiton}
              />
            </NavLink>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.9,
            }}
            className={style.buttons}
          >
            <NavLink to="/contact" className={style.buttonContact}>
              {language === "es" ? "Contactanos" : "Contact us"}
            </NavLink>
          </motion.div>
        </section>
        <div className={style.background}>
          <div className={style.backgroundLinear}></div>
          <img src={bgHome} alt="" />
        </div>
      </main>
      <section id="servicios" className={style.sectionServices}>
        <div className={style.contentTitleAndBorder}>
          <h2 className={style.title}>
            {language === "es"
              ? "Vea lo que podemos hacer"
              : "See what we can do"}
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
              {language === "es" ? "Diseño de paginas web" : "Website design"}
              <ArrowRight
                color="#25D9D9"
                className={style.buttonDetail}
                weight="bold"
              />
            </NavLink>
            <p className={style.textService}>
              {language === "es"
                ? "Guiamos cada diseño al detalle para lograr una experiencia excepcional: fusionando una funcionalidad impecable con una estética cautivadora, para un viaje del usuario que trasciende lo ordinario."
                : "We guide every design to the detail for an exceptional experience: fusing impeccable functionality with captivating esthetics, for a user journey that transcends the ordinary."}
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
              {language === "es"
                ? "Desarrollo de sitios web"
                : "Website development"}

              <ArrowRight
                color="#25D9D9"
                className={style.buttonDetail}
                weight="bold"
              />
            </NavLink>
            <p className={style.textService}>
              {language === "es"
                ? "Forjamos la perfección en cada línea de código, fusionando innovación y funcionalidad para crear sitios web que no sólo sean visualmente cautivadores, sino que también impulsen el rendimiento, la escalabilidad y la facilidad de mantenimiento."
                : "We forge perfection into every line of code, fusing innovation and functionality to create websites that not only are visually captivating, but also drive performance, scalability and ease of maintenance."}
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
              {language === "es"
                ? "Desarrollo de aplicaciones"
                : "Application development"}
              <ArrowRight
                color="#25D9D9"
                className={style.buttonDetail}
                weight="bold"
              />
            </NavLink>
            <p className={style.textService}>
              {language === "es"
                ? "Construimos experiencias móviles excepcionales, donde cada pulso de código se traduce en aplicaciones que deslumbran estéticamente, funcionan sin esfuerzo y se expanden con agilidad, proporcionando un viaje sin igual en el mundo digital."
                : "We build exceptional mobile experiences, where every pulse of code translates into applications that dazzle aesthetically, operate effortlessly and expand with agility, providing an unparalleled journey in the digital world."}
            </p>
          </motion.div>
        </div>
        <NavLink to="/contact" className={style.buttonContact}>
          {language === "es" ? "Consúltanos" : "Contact us at"}
        </NavLink>
      </section>
      <section className={style.sectionReviews}>
        <div className={style.contentTitleAndBorder}>
          <h2 className={style.title}>
            {language === "es"
              ? "Con la confianza de nuestros clientes"
              : "With the confidence of our customers"}
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
        </div>
        <div className={style.contentCards}>
          <CardReview
            textReview={
              language === "es"
                ? `"Molokaih ha sido un verdadero socio para Smart Cap, colaborando en
                la materialización de una plataforma digital realmente diferenciada
                que ha revolucionado por completo la experiencia de nuestros estudiantes."`
                : `"Molokaih has been a true partner for Smart Cap, collaborating in
              the materialization of a truly differentiated digital platform
              that has completely revolutionized our student experience."`
            }
            imageProfile={DanelProfile}
            nameUser="Danel Manzanares"
            position={
              language === "es"
                ? "Fundador de Smart Cap Academy"
                : "Founder of Smart Cap Academy"
            }
            logo={logoSCA}
          />
          <CardReview
            textReview={
              language === "es"
                ? `"Elegimos Molokaih por la pasión inigualable de su equipo.
                Su enfoque va más allá del desarrollo de software.
                revolucionar nuestra industria."`
                : `
              "We chose Molokaih because of their unmatched passion in our team.
              Their focus goes beyond software development, they seek to truly
              revolutionize our industry."`
            }
            imageProfile={SamulProfile}
            nameUser="Samuel Zdanovich"
            position={
              language === "es"
                ? "Fundador de ZDA motors"
                : "Founder of ZDA motors"
            }
            logo={logoZDA}
          />
        </div>
      </section>
      <section className={style.sectionMaps}>
        <div className={style.contentTitleAndBorder}>
          <h2 className={style.title}>
            {language === "es"
              ? "Donde se encuentran nuestros clientes"
              : "Where our customers are located"}
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
        </div>
        <img src={map} alt="" className={style.map} />
      </section>
      <section className={style.sectionText}>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
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
          className={style.contentText}
        >
          <h2>
            {language === "es"
              ? "¿Su empresa aprovecha al máximo todas las oportunidades que ofrece la tecnología?"
              : "Is your business maximizing all the opportunities that technology has to offer?"}
          </h2>

          <p className={style.contentText}>
            {language === "es"
              ? "Impulsados por el éxito de nuestros clientes, nuestra agilidad deriva de más de más de 5 años de experiencia práctica en proyectos. Basándonos en los principios de Design Thinking y Lean Startup, generamos soluciones que abordan los retos actuales con una visión de futuro, superando los posibles obstáculos con soluciones bien pensadas."
              : "Driven by the success of our clients, our agility derives from more  than 5 years of practical experience in projects. Based on the  principles of Design Thinking and Lean Startup, we generate  solutions that address current challenges with a vision of the  future, overcoming potential hurdles with well thought-out  solutions."}
          </p>
          <NavLink to="/contact" className={style.buttonContact}>
            {language === "es"
              ? "Accede a sus beneficios"
              : "Access your benefits"}
          </NavLink>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
