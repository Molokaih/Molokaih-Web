import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import WeDo from "./pages/WeDo/WeDo";
import DetailService from "./pages/DetailService/DetailService";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import { createContext, useState } from "react";

const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/wedo" element={<WeDo />} />
        <Route path="/detail/:position" element={<DetailService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </LanguageContext.Provider>
  );
}

export { App, LanguageContext };
