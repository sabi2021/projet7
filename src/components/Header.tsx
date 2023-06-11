import React from "react";
import BrandLogo from "./BrandLogo";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <header className="header">
      <figure className="header__fig">
        <BrandLogo />
      </figure>
      <Menu />
    </header>
  );
};

export default Header;
