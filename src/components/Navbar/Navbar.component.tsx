import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.styles.scss";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <Link to="/">
      <div className="navbar">Clover</div>
    </Link>
  );
};

export default Navbar;
