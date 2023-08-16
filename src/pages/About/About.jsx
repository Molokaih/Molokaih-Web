import React from "react";
import style from "./About.module.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import AndreaProfile from "../../assets/AndreaProfile.jpg";
import MarioProfile from "../../assets/MarioProfile.jpg";
import BrianProfile from "../../assets/BrianProfile.jpg";
import { InstagramLogo, LinkedinLogo } from "phosphor-react";
import { ArrowRight } from "phosphor-react";
import CardProfile from "../../components/CardProfile/CardProfile";

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
            position="Chief Executive Officer"
            description="EO & Fundador en Molokaih. Experto en software a medida y
          metodologías ágiles. Formador en Silicon Missions. Amplia
          experiencia en Account Management y Market Management. Master en
          Gestión de Proyectos Tecnológicos."
          />
          <CardProfile
            name="
            Mario Niwoyda
            "
            imageProfile={MarioProfile}
            position="Chief Financial Officer"
            description="EO & Fundador en Molokaih. Experto en software a medida y
          metodologías ágiles. Formador en Silicon Missions. Amplia
          experiencia en Account Management y Market Management. Master en
          Gestión de Proyectos Tecnológicos."
          />
          <CardProfile
            name="Andrea Otero Bay"
            imageProfile={AndreaProfile}
            position="IT Recruitment Manager"
            description="EO & Fundador en Molokaih. Experto en software a medida y
          metodologías ágiles. Formador en Silicon Missions. Amplia
          experiencia en Account Management y Market Management. Master en
          Gestión de Proyectos Tecnológicos."
          />
          <CardProfile
            name="Brian Niwoyda"
            imageProfile={BrianProfile}
            position="Chief Executive Officer"
            description="EO & Fundador en Molokaih. Experto en software a medida y
          metodologías ágiles. Formador en Silicon Missions. Amplia
          experiencia en Account Management y Market Management. Master en
          Gestión de Proyectos Tecnológicos."
          />
          <CardProfile
            name="Brian Niwoyda"
            imageProfile={BrianProfile}
            position="Chief Executive Officer"
            description="EO & Fundador en Molokaih. Experto en software a medida y
          metodologías ágiles. Formador en Silicon Missions. Amplia
          experiencia en Account Management y Market Management. Master en
          Gestión de Proyectos Tecnológicos."
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
