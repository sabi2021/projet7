import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

const NoPage: React.FC = () => {
  return (
    <>
      <div className="NoPage">
        <Header />
        <main>
            <div className="errorContainer">
            <p className="errorContainer__Number">404</p>
            <p className="errorContainer__Text">
            Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="errorContainer__Link">
                Retourner sur la page d'accueil
            </Link>
        </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoPage;