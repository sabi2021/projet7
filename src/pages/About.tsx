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
            <Accordion title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." /> 
            <Accordion title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." /> 
            <Accordion title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." /> 
            <Accordion title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
