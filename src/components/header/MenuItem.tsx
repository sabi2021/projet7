import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  to: string;
  name: string;
  classname: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, name, classname}) => {
  return (
    <Link to={to} className={classname}>
      {name}
    </Link>
  );
};

export default MenuItem;