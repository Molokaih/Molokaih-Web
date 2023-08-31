import React, { useState } from "react";
import style from "./Contact.module.css";
import {
  MapPin,
  EnvelopeSimple,
  Phone,
  LinkedinLogo,
  InstagramLogo,
} from "phosphor-react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import useValidateForm from "../../hooks/useValidateForm";

export default function Contact() {
  const [dataEmail, setDataEamil] = useState({
    name: "",
    email: "",
    phone: "",
    _subject: "",
    mesage: "",
  });

  const { validate, errors } = useValidateForm();

  function changueData(e) {
    e.preventDefault();
    setDataEamil({ ...dataEmail, [e.target.name]: e.target.value });
    validate({ ...dataEmail, [e.target.name]: e.target.value });
  }

  return (
    <main className={style.contact}>
      <Nav />
      <div className={style.sectionContact}>
        <div className={style.contentInfo}>
          <h1>Contact us!</h1>
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
        <form
          className={style.form}
          action="https://formsubmit.co/hello@molokaih.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={dataEmail.name}
            onChange={(e) => changueData(e)}
            style={{
              border: errors.name ? "1px solid red" : "none",
              outline: errors.name ? "none" : "",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={dataEmail.email}
            onChange={(e) => changueData(e)}
            style={{
              border: errors.email ? "1px solid red" : "none",
              outline: errors.email ? "none" : "",
            }}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={dataEmail.phone}
            onChange={(e) => changueData(e)}
            style={{
              border: errors.phone ? "1px solid red" : "none",
              outline: errors.phone ? "none" : "",
            }}
          />
          <input
            type="text"
            name="_subject"
            placeholder="Subject"
            value={dataEmail._subject}
            onChange={(e) => changueData(e)}
            style={{
              border: errors._subject ? "1px solid red" : "none",
              outline: errors._subject ? "none" : "",
            }}
          />
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="Mesage"
            name="mesage"
            value={dataEmail.mesage}
            onChange={(e) => changueData(e)}
            style={{
              border: errors.mesage ? "1px solid red" : "none",
              outline: errors.mesage ? "none" : "",
            }}
          ></textarea>
          <input
            type="hidden"
            name="_next"
            value="http://127.0.0.1:5173/contact"
          />
          <input type="hidden" name="_captcha" value="false" />
          <button disabled={errors.exist} type="submit">
            Send
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
