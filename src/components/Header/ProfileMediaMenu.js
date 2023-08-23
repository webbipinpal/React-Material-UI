import React, { Component, Fragment } from "react";
import Box from "@material-ui/core/Box";
import UserImage from "./images/user.jpg";
import { Link } from "@material-ui/core";
import { FiUser, FiMail, FiSettings, FiCheck, FiPower } from "react-icons/fi";

export default class ProfileMediaMenu extends Component {
  render() {
    return (
      <Fragment>
        <Box component="div" className="dropdown-menu dropdown-menu-right">
          <Link className="dropdown-item" to="profile.html">
            <i className="dropdown-icon">
              <FiUser />
            </i>
            <Box component="span">Profile</Box>
          </Link>
          <Link className="dropdown-item" to="inbox.html">
            <i className="dropdown-icon">
              <FiMail />
            </i>
            <Box component="span">Inbox</Box>
          </Link>
          <Link className="dropdown-item" to="#">
            <i className="dropdown-icon">
              <FiSettings />
            </i>
            <Box component="span">Settings</Box>
          </Link>
          <Box component="div" className="dropdown-divider" />
          <Box component="div" className="sub-dropdown-menu show-on-hover">
            <Link to="#" className="dropdown-toggle dropdown-item no-caret">
              <i className="text-success">
                <FiCheck />
              </i>
              Online
            </Link>
          </Box>
          <Box component="div" className="dropdown-divider" />
          <Link className="dropdown-item" to="#">
            <i className="dropdown-icon ">
              <FiPower />
            </i>
            <Box component="span">Log out</Box>
          </Link>
        </Box>
      </Fragment>
    );
  }
}
