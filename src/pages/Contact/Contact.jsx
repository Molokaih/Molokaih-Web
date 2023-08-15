import React from "react";
import style from "./Contact.module.css";
import {
  MapPin,
  EnvelopeSimple,
  Phone,
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

export default function Contact() {
  return (
    <main className={style.contact}>
      <Nav />
      <div className={style.sectionContact}>
        <div className={style.contentInfo}>
          <h1>¡Contact us!</h1>
          <p className={style.subtitle}>
            Tell us about your next challenge. Let's find out how we can tackle
            it together.
          </p>

          <div className={style.contentText}>
            <MapPin color="#25D9D9" className={style.logoText} />
            <p>8 The Green STE B Dover, DE 19901</p>
          </div>
          <div className={style.contentText}>
            <Phone color="#25D9D9" className={style.logoText} />
            <p>+1 (647) 865-9825 </p>
          </div>
          <div className={style.contentText}>
            <EnvelopeSimple color="#25D9D9" className={style.logoText} />
            <p>hello@molokaih.com</p>
          </div>

          <div className={style.networks}>
            <a href="https://www.instagram.com/molokaih/" target="_blank">
              <InstagramLogo className={style.logoNetwork} />
            </a>
            <a
              href="https://www.linkedin.com/company/molokaih/"
              target="_blank"
            >
              <LinkedinLogo className={style.logoNetwork} />
            </a>
          </div>
        </div>
        <form action="" className={style.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Mesage"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
