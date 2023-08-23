import React from "react";
import { Link } from "@material-ui/core";
import logo from "./images/logo-light.png";

const LogoMain = () => {
  return (
    <Link to={"/login/"} className="navbar-brand">
      <img className="brand-img d-inline-block" alt="HBKU Logo" src={logo} />
    </Link>
  );
};

export default LogoMain;
