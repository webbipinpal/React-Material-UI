import React, { Component, Fragment } from "react";
import Box from "@material-ui/core/Box";
import UserImage from "./images/user.jpg";
import { Link } from "@material-ui/core";
import { FiChevronDown } from "react-icons/fi";

export default class ProfileMedia extends Component {
  render(props) {
    return (
      <Fragment>
        <Link
          className="nav-link dropdown-toggle no-caret"
          to="#"
          role="button"
          onClick={this.props.ProfileMediaClickFun}
        >
          <Box component="div" className="media">
            <Box component="div" className="media-img-wrap">
              <Box component="div" className="avatar">
                <img
                  src={UserImage}
                  alt="user"
                  className="avatar-img rounded-circle"
                />
              </Box>
              <Box
                component="span"
                className="badge badge-success badge-indicator"
              />
            </Box>
            <Box component="div" className="media-body">
              <Box component="span">
                Khalid Al Kuwari{" "}
                <i className="">
                  <FiChevronDown />
                </i>
              </Box>
            </Box>
          </Box>
        </Link>
      </Fragment>
    );
  }
}
