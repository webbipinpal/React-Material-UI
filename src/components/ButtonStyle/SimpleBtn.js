import React, { Fragment } from "react";
import SimpleMasterBtn from "./SimpleMasterBtn";
import Button from "../../components/CustomButtons/Button.jsx";
import { Link, Box } from "@material-ui/core";
import { FiMenu, FiSearch, FiSettings, FiBell } from "react-icons/fi";

export const LoginBtn = () => {
  return (
    <Fragment>
      <SimpleMasterBtn color="blue" BtnText="Login " />
    </Fragment>
  );
};
export const RegisterBtn = () => {
  return (
    <Fragment>
      <SimpleMasterBtn color="blue" BtnText="Register " />
    </Fragment>
  );
};
export const ForgotPassBtn = () => {
  return (
    <Fragment>
      <SimpleMasterBtn color="blue" BtnText="Send " />
    </Fragment>
  );
};
export const ResetPassBtn = () => {
  return (
    <Fragment>
      <SimpleMasterBtn color="blue" BtnText="Reset Password " />
    </Fragment>
  );
};

export const MenuIcon = props => {
  return (
    <Fragment>
      <Link
        id="navbar_toggle_btn"
        className="navbar-toggle-btn nav-link-hover"
        onClick={props.MainMenuClickShow}
        href="#"
      >
        <Box component="span" className="feather-icon">
          <FiMenu />
        </Box>
      </Link>
    </Fragment>
  );
};

export const SearchIcon = props => {
  return (
    <Fragment>
      <Link
        id="navbar_search_btn"
        className="nav-link nav-link-hover"
        to="/"
        onClick={props.searchClickFun}
      >
        <Box component="span" className="feather-icon">
          <FiSearch />
        </Box>
      </Link>
    </Fragment>
  );
};

export const SettingIcon = props => {
  return (
    <Fragment>
      <Link id="settings_toggle_btn" className="nav-link nav-link-hover" to="/">
        <Box component="span" className="feather-icon">
          <FiSettings />
        </Box>
      </Link>
    </Fragment>
  );
};

export const NotificationIcon = props => {
  return (
    <Fragment>
      <Link
        className="nav-link dropdown-toggle no-caret"
        to="#"
        role="button"
        onClick={props.NotificationClickFun}
      >
        <Box component="span" className="feather-icon">
          <FiBell />
        </Box>
        <Box component="span" className="badge-wrap">
          <Box
            component="span"
            className="badge badge-primary badge-indicator badge-indicator-sm badge-pill pulse"
          />
        </Box>
      </Link>
    </Fragment>
  );
};
