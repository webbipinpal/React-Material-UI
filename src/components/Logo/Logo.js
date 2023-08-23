import React from "react";
import { Link } from "@material-ui/core";
import logo from "./images/logo-light.png";

const Logo = props => {
  const link_class = props.logoAlign + " auth-brand";
  return (
    <Link to={"/login/"} className={link_class} style={props.style}>
      <img alt="..." src={logo} />
    </Link>
  );
};

export default Logo;
