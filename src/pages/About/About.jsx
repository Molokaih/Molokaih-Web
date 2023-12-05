import React, { useContext } from "react";
import style from "./About.module.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import CardProfile from "../../components/CardProfile/CardProfile";

import AndreaProfile from "../../assets/teamProfiles/AndreaProfile.avif";
import MarioProfile from "../../assets/teamProfiles/MarioProfile.avif";
import BrianProfile from "../../assets/teamProfiles/BrianProfile.avif";
import franciscoProfile from "../../assets/teamProfiles/franciscoProfile.avif";
import montserratProfile from "../../assets/teamProfiles/montserratProfile.avif";
import JulianProfile from "../../assets/teamProfiles/JulianProfile.avif";

import { motion } from "framer-motion";

import { LanguageContext } from "../../App";
import ButtonWhatsapp from "../../components/ButtonWhatsapp/ButtonWhatsapp";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={style.about}>
      <Nav />
      <ButtonWhatsapp />
      <section className={style.profiles}>
        <div className={style.contentTitleAndBorder}>
          <h2 className={style.title}>
            {language === "es" ? "Sobre nosotros" : "About us"}
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={style.contentCardProfile}
        >
          <motion.div variants={item}>
            <CardProfile
              name="Brian Niwoyda"
              imageProfile={BrianProfile}
              urlLinkedin="https://www.linkedin.com/in/brianniwoyda"
              position={
                language === "es"
                  ? "Consejero Delegado"
                  : "Chief Executive Officer"
              }
              description={
                language === "es"
                  ? "CEO & Fundador en Molokaih, con experiencia en liderazgo estratégico y expansión empresarial en Delaware, EEUU. Experto en desarrollo de software a medida y metodologías ágiles. Formador en Silicon Missions y Temperies, centrado en formación y optimización de habilidades."
                  : "CEO & Founder at Molokaih, with experience in strategic leadership and business expansion in Delaware, USA. Expert in custom software development and agile methodologies. Trainer at Silicon Missions and Temperies, focused on training and skills optimization."
              }
            />
          </motion.div>
          <motion.div variants={item}>
            <CardProfile
              name="Mario Niwoyda"
              urlLinkedin="https://www.linkedin.com/in/mario-germ%C3%A1n-niwoyda-89a435258"
              imageProfile={MarioProfile}
              position={
                language === "es"
                  ? "Director Financiero"
                  : "Chief Financial Officer"
              }
              description={
                language === "es"
                  ? "Director Financiero y Cofundador de Molokaih. Amplia experiencia como Director de Sucursal, centrado en el análisis del riesgo crediticio y estrategias de venta a crédito en Coop Palmares. Licenciado en Administración y Dirección de Empresas y con experiencia como Director Financiero. Comprometido a impulsar el crecimiento financiero de Molokaih."
                  : "CFO & Co-Founder at Molokaih. Extensive experience as Branch Manager, focused on credit risk analysis and credit sales strategies at Coop Palmares. Bachelor's Degree in Business Administration and experience as Finance Director. Committed to driving Molokaih's financial growth."
              }
            />
          </motion.div>
          <motion.div variants={item}>
            <CardProfile
              name="Andrea Otero Bay"
              urlLinkedin="https://www.linkedin.com/in/andreaoterobay"
              imageProfile={AndreaProfile}
              position={
                language === "es"
                  ? "Responsable de contratación de IT"
                  : "IT Recruitment Manager"
              }
              description={
                language === "es"
                  ? "Reclutador IT experimentado con experiencia en Silicon Missions. Experto en búsqueda de candidatos, evaluación y coordinación de entrevistas. Competente en head-hunting avanzado utilizando operadores booleanos. Construye fuertes relaciones cliente-candidato para servicios integrales de reclutamiento. Experiencia en todo el proceso de selección, desde el perfil hasta la negociación. Experiencia en diversas funciones de TI. Formado en gestión de RRHH y administración de personal."
                  : "Experienced IT Recruiter with Silicon Missions expertise. Skilled in candidate sourcing, assessment, and interview coordination. Proficient in advanced head-hunting using Boolean operators. Builds strong client-candidate relationships for comprehensive recruitment services. Experienced in full selection process, from profiling to negotiation. Expertise in diverse IT roles. Trained in HR management and personnel administration."
              }
            />
          </motion.div>
          <motion.div variants={item}>
            <CardProfile
              name="Francisco Moreno"
              imageProfile={franciscoProfile}
              position={
                language === "es" ? "Analista funcional" : "Functional Analyst"
              }
              description={
                language === "es"
                  ? "Analista financiero y gestor de riesgos, con experiencia en estrategias de inversión y gestión de carteras."
                  : "Financial analyst and risk manager, with experience in investment strategies and portfolio management."
              }
            />
          </motion.div>
          <motion.div variants={item}>
            <CardProfile
              name="Montserrat Guadian"
              imageProfile={montserratProfile}
              urlLinkedin="https://www.linkedin.com/in/montserrat-sol%C3%B3rzano-guadian-271317152"
              position={language === "es" ? "Contadora" : "Accountant"}
              description={
                language === "es"
                  ? "Contador. Con experiencia en contabilidad y finanzas corporativas en México y Canadá."
                  : "Accountant. With experience in corporate accounting and finance in Mexico and Canada."
              }
            />
          </motion.div>
          <motion.div variants={item}>
            <CardProfile
              name="Julian Maiaru"
              imageProfile={JulianProfile}
              urlLinkedin="https://www.linkedin.com/in/julian-maiaru"
              position={language === "es" ? "Jefe de Ventas" : "Head of Sales"}
              description={
                language === "es"
                  ? "Jefe de Ventas, con experiencia en liderazgo y gestión de equipos de ventas en diferentes contextos y geografías, incluyendo un puesto anterior como Business & Technology Delivery Associate en Accenture e IBM."
                  : "Head of Sales, with experience in leadership and management of sales teams in different contexts and geographies, including a previous position as Business & Technology Delivery Associate at Accenture and IBM."
              }
            />
          </motion.div>
        </motion.div>
      </section>
      <section className={style.contentText}>
        <div>
          <div className={style.contentTitleAndBorder}>
            <h2 className={style.title}>
              {language === "es" ? "Nuestra mision" : "Our Mission"}
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
          <p>
            {language === "es"
              ? "Nuestra misión es dotar a las empresas de soluciones tecnológicas de vanguardia que impulsen el crecimiento, la eficiencia y la innovación."
              : "  Our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency and innovation."}
          </p>
        </div>
        <div>
          <div className={style.contentTitleAndBorder}>
            <h2 className={style.title}>Vision</h2>
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
          <p>
            {language === "es"
              ? "En Molokaih, nuestra visión es ampliar nuestro alcance y establecer sólidas con clientes, proveedores y empresas. Nos hemos propuesto nos hemos propuesto ser un socio tecnológico estratégico para las empresas tanto de nuestra como en el mercado estadounidense."
              : "At Molokaih, our vision is to expand our reach and establish strong relationships with customers, suppliers and businesses. We have set out to be a strategic technology partner for companies both in our region and in the U.S. market."}
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
