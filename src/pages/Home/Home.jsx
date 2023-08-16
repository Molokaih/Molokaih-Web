import Nav from "../../components/Nav/Nav";
import style from "./Home.module.css";
import bgHome from "../../assets/backgroundHome.avif";
import { PenNib, Browser, DeviceMobile } from "@phosphor-icons/react";
import serviceMobile from "../../assets/serviceMobile.jpg";
import serviceWeb from "../../assets/serviceWeb.jpg";
import logoSCA from "../../assets/logoSCA.png";
import logoZDA from "../../assets/logoZDA.png";
import DanelProfile from "../../assets/DanelProfile.jpeg";
import SamulProfile from "../../assets/SamulProfile.jpeg";
import servicesUXUI from "../../assets/servicesUXUI.jpg";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import CardReview from "../../components/CardReview/CardReview";

export default function Home() {
  return (
    <main className={style.home}>
      <Nav />
      <main className={style.hero}>
        <section className={style.contentPresentation}>
          <h1>Software development</h1>
          <h6 className={style.subtitle}>
            Connect with our innovative solutions
          </h6>
          <div className={style.contentSolutions}>
            <NavLink className={style.solutionCard} to="/detail/1">
              <p>
                UX/UI <br /> design
              </p>
              <PenNib color="#24B0FF" className={style.logoCardSoluiton} />
            </NavLink>
            <NavLink className={style.solutionCard} to="/detail/0">
              <p>Web development</p>
              <Browser color="#3EF3B2" className={style.logoCardSoluiton} />
            </NavLink>
            <NavLink className={style.solutionCard} to="/detail/2">
              <p>Mobile development</p>
              <DeviceMobile
                color="#8F00FF"
                className={style.logoCardSoluiton}
              />
            </NavLink>
          </div>
          <div className={style.buttons}>
            <NavLink to="/contact" className={style.buttonContact}>
              Contact us
            </NavLink>
            <a href="#servicios" className={style.buttonSolutions}>
              Services
            </a>
          </div>
        </section>
        <div className={style.background}>
          <div className={style.backgroundLinear}></div>
          <img src={bgHome} alt="" />
        </div>
      </main>
      <section id="servicios" className={style.sectionServices}>
        <div className={style.contentTitleAndBorder}>
          <h2 className={style.title}>See what we can do</h2>
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
          <div className={style.contentTextService}>
            <NavLink to="/detail/1" className={style.titleService}>
              UX/UI design
            </NavLink>
            <p className={style.textService}>
              We guide every design detail for an exceptional experience: fusing
              impeccable functionality with captivating aesthetics, for a user
              journey that transcends the ordinary.
            </p>
          </div>
        </div>
        <div className={style.contentService}>
          <div className={style.contentTextService}>
            <NavLink to="/detail/0" className={style.titleService}>
              Web development
            </NavLink>
            <p className={style.textService}>
              We forge perfection into every line of code, fusing innovation and
              functionality to create websites that not only captivate visually,
              but also drive performance, scalability and ease of maintenance.
            </p>
          </div>
          <NavLink to="/detail/0">
            <img src={serviceWeb} alt="" />
          </NavLink>
        </div>
        <div className={style.contentService}>
          <NavLink to="/detail/2">
            <img src={serviceMobile} alt="" />
          </NavLink>
          <div className={style.contentTextService}>
            <NavLink to="/detail/2" className={style.titleService}>
              Mobile development
            </NavLink>
            <p className={style.textService}>
              We build exceptional mobile experiences, where every pulse of code
              translates into applications that dazzle aesthetically, operate
              effortlessly and expand with agility, providing an unparalleled
              journey in the digital world.
            </p>
          </div>
        </div>
      </section>
      <section className={style.sectionReviews}>
        <div className={style.contentTitleAndBorder}>
          <h2 className={style.title}>With the confidence of our customers</h2>
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
            textReview=" Molokaih has been a true partner for Smart Cap, collaborating in
          the materialization of a truly differentiated digital platform
          that has completely revolutionized our student experience."
            imageProfile={DanelProfile}
            nameUser="Danel Manzanares"
            position="Founder of Smart Cap Academy"
            logo={logoSCA}
          />
          <CardReview
            textReview=" We chose Molokaih because of their unmatched passion in our team.
            Their focus goes beyond software development, they seek to truly
            revolutionize our industry."
            imageProfile={SamulProfile}
            nameUser="Samuel Zdanovich"
            position="Founder of ZDA motors"
            logo={logoZDA}
          />
        </div>
      </section>
      <section className={style.sectionText}>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className={style.contentText}>
          <h2>
            Is your business maximizing all the opportunities that technology
            has to offer?
          </h2>

          <p className={style.contentText}>
            Driven by the success of our clients, our agility derives from more
            than 5 years of practical experience in projects. Based on the
            principles of Design Thinking and Lean Startup, we generate
            solutions that address current challenges with a vision of the
            future, anticipating possible weaknesses to come.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
