import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Accordion from "../components/accordion/Accordion";
import Banner from "../components/home/Banner";
import imgBanner from "../assets/about/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";

const About: React.FC = () => {
  return (
    <div className="about">
      <Header />
      <div className="accordion">
          <div className="accordion__dropdown">
            <Banner text="" img={imgBanner}  />
            <Accordion title="Fiabilité" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." /> 
            <Accordion title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." /> 
            <Accordion title="Service" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." /> 
            <Accordion title="Sécurité" content="" />
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
