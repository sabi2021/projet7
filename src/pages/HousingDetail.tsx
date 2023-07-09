import React from "react";
import HousingDetailComponent from "../components/housingDetail/HousingDetailComponent";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

const HousingDetail: React.FC = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <HousingDetailComponent />
      </main>

      <Footer />
    </div>
  );
};

export default HousingDetail;
