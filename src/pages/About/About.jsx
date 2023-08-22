import React from "react";
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

export default function About() {
  return (
    <div className={style.about}>
      <Nav />
      <section className={style.profiles}>
        <div className={style.contentTitleAndBorder}>
          <h2 className={style.title}>Abot us</h2>
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
        <div className={style.contentCardProfile}>
          <CardProfile
            name="Brian Niwoyda"
            imageProfile={BrianProfile}
            urlLinkedin="https://www.linkedin.com/in/brianniwoyda"
            position="Chief Executive Officer"
            description="CEO & Fundador en Molokaih. Experto en software y
          metodologías ágiles. Formador en Silicon Missions. Amplia
          experiencia en Account Management y Market Management. Master en
          Gestión de Proyectos Tecnológicos."
          />
          <CardProfile
            name="Mario Niwoyda"
            urlLinkedin="https://www.linkedin.com/in/mario-germ%C3%A1n-niwoyda-89a435258"
            imageProfile={MarioProfile}
            position="Chief Financial Officer"
            description="CFO & Co-Founder at Molokaih. Extensive experience as Branch Manager, focused on credit risk analysis and credit sales strategies at Coop Palmares. Bachelor's Degree in Business Administration and experience as Finance Director. Committed to driving Molokaih's financial growth."
          />
          <CardProfile
            name="Andrea Otero Bay"
            urlLinkedin="https://www.linkedin.com/in/andreaoterobay"
            imageProfile={AndreaProfile}
            position="IT Recruitment Manager"
            description="Experienced IT Recruiter with Silicon Missions expertise. Skilled in candidate sourcing, assessment, and interview coordination. Proficient in advanced head-hunting using Boolean operators. Builds strong client-candidate relationships for comprehensive recruitment services. Experienced in full selection process, from profiling to negotiation. Expertise in diverse IT roles. Trained in HR management and personnel administration."
          />
          <CardProfile
            name="Brian Niwoyda"
            imageProfile={franciscoProfile}
            position="Financial analyst"
            description="Financial analyst and risk manager, with experience in investment strategies and portfolio management."
          />
          <CardProfile
            name="Montserrat Guadian"
            imageProfile={montserratProfile}
            urlLinkedin="https://www.linkedin.com/in/montserrat-sol%C3%B3rzano-guadian-271317152"
            position="Accountant"
            description="Accountant, with experience in accounting both in Mexico and Canada, where I work as a Bookkeeper."
          />
          <CardProfile
            name="Julian Maiaru"
            imageProfile={JulianProfile}
            urlLinkedin="https://www.linkedin.com/in/julian-maiaru"
            position="Head of Sales"
            description="Head of Sales, with experience in leadership and management of sales teams in different contexts and geographies, including a previous position as Business & Technology Delivery Associate at Accenture and IBM."
          />
        </div>
      </section>
      <section className={style.contentText}>
        <div>
          <div className={style.contentTitleAndBorder}>
            <h2 className={style.title}>Our Mission</h2>
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
            Our mission is to empower businesses with cutting-edge technology
            solutions that drive growth, efficiency and innovation.
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
            At Molokaih, our vision is to expand our reach and establish strong
            relationships with customers, suppliers and businesses in the strong
            relationships with customers, suppliers and businesses in the United
            States. United States. We have set out to be a strategic partner for
            companies both in our region and in the U.S. market.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
