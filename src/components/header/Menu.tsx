import React from "react";
import MenuItem from "./MenuItem";

const Nav: React.FC = () => {
  return (
    <nav className="nav-header">
      <MenuItem to="/" classname="nav-header__nav-link-home" name="Accueil" />
      <MenuItem to="/about" classname="nav-header__nav-link-about" name="A Propos" />
    </nav>
  );
};

export default Nav;
