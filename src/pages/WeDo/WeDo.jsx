import React from "react";
import style from "./WeDo.module.css";
import Nav from "../../components/Nav/Nav";
import arrow from "../../assets/arrow.svg";
import figma from "../../assets/figma.svg";
import react from "../../assets/react.svg";
import nodejs from "../../assets/nodejs.svg";
import flutter from "../../assets/flutter.svg";
import github from "../../assets/github.svg";
import postgres from "../../assets/postgresql.svg";
import Footer from "../../components/Footer/Footer";

export default function WeDo() {
  return (
    <div className={style.weDo}>
      <Nav />
      <section className={style.sectionText}>
        <div className={style.contentText}>
          <div className={style.contentTitleAndBorder}>
            <h2 className={style.title}>See what we can do</h2>
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
            Our combined methodology allows our clients to participate in the
            development process. This way, they can enjoy a unique experience in
            the approach to the creation of their product.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjB0ZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </section>
      <section className={style.sectionTechnologies}>
        <div className={style.contentTechnologies}>
          <p>User experience</p>
          <img src={arrow} alt="" />
          <img src={figma} alt="" />
        </div>
        <div className={style.contentTechnologies}>
          <p>Front End</p>
          <img src={arrow} alt="" />
          <img src={react} alt="" />
        </div>
        <div className={style.contentTechnologies}>
          <p>Back End</p>
          <img src={arrow} alt="" />
          <img src={nodejs} alt="" />
        </div>
        <div className={style.contentTechnologies}>
          <p>Data base</p>
          <img src={arrow} alt="" />
          <img src={postgres} alt="" />
        </div>
        <div className={style.contentTechnologies}>
          <p>Version control</p>
          <img src={arrow} alt="" />
          <img src={github} alt="" />
        </div>
        <div className={style.contentTechnologies}>
          <p>Mobile</p>
          <img src={arrow} alt="" />
          <img src={flutter} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
