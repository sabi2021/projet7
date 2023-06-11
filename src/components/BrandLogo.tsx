import React from "react";
import logo from "../assets/logo/logo_header.svg";

const BrandLogo: React.FC = () => {
  return (
    <img className="logo" src={logo} alt="logo" />
  );
};

export default BrandLogo;
