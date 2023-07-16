import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Gallery from "../components/home/Gallery";
import Banner from "../components/home/Banner";
import imgBanner from "../assets/home/body/img_body_banner_main.png";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner text="Chez vous, partout et ailleurs" img={imgBanner}  />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
