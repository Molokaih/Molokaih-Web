import React from "react";
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

import { motion } from "framer-motion";

export default function WeDo() {
  return (
    <div className={style.weDo}>
      <Nav />
      <section className={style.sectionText}>
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
            Our combined methodology allows our clients to participate in the
            development process. This way, they can enjoy a unique experience in
            the approach to the creation of their product.
          </motion.p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjB0ZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </section>
      <section className={style.sectionMethodology}>
        {window.innerWidth <= 600 ? (
          <img src={imageWeDoPhone} alt="image methodology" />
        ) : (
          <img src={imageWeDo} alt="image methodology" />
        )}
      </section>
      <section className={style.sectionTechnologies}>
        <div className={style.contentTechnologies}>
          <p>User experience</p>
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
          <p>Data base</p>
          <img src={arrow} alt="" />
          <div className={style.contentLogos}>
            <div></div>
            <img src={postgres} alt="" className={style.logos} />
          </div>
        </div>
        <div className={style.contentTechnologies}>
          <p>Version control</p>
          <img src={arrow} alt="" />
          <div className={style.contentLogos}>
            <img src={github} alt="" className={style.logos} />
            <div></div>
          </div>
        </div>
        <div className={style.contentTechnologies}>
          <p>Mobile</p>
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
