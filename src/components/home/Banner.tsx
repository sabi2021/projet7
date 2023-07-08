import React from "react";

interface BannerProps {
  img: string;
  text: string;
}

const Banner: React.FC<BannerProps> = ({ img, text }) => {
  return (
    <div className="banner">
      <img className="banner__img" src={img} alt="banner page home" />
      <div className="banner__sombre"></div>
      <span className="banner__txt">{text}</span>
    </div>
  );
}


export default Banner;
