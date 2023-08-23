import React, { Component, Fragment } from "react";
import Box from "@material-ui/core/Box";
import { Link } from "@material-ui/core";
import UserImage from "./images/user.jpg";
export default class NotificationPopup extends Component {
  render() {
    return (
      <Fragment>
        <Box component="div" className="dropdown-menu dropdown-menu-right">
          <h6 className="dropdown-header">
            Notifications{" "}
            <Link to="javascript:void(0);" className="">
              View all
            </Link>
          </h6>
          <Box component="div" className="notifications-nicescroll-bar">
            <Link to="javascript:void(0);" className="dropdown-item">
              <Box component="div" className="media">
                <Box component="div" className="media-img-wrap">
                  <Box component="div" className="avatar avatar-sm">
                    <img
                      src={UserImage}
                      alt="user"
                      className="avatar-img rounded-circle"
                    />
                  </Box>
                </Box>
                <Box component="div" className="media-body">
                  <Box component="div">
                    <Box component="div" className="notifications-text">
                      <Box
                        component="span"
                        className="text-dark text-capitalize"
                      >
                        Evie Ono
                      </Box>{" "}
                      accepted your invitation to join the team
                    </Box>
                    <Box component="div" className="notifications-time">
                      12m
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
            <Box component="div" className="dropdown-divider" />
            <Link to="javascript:void(0);" className="dropdown-item">
              <Box component="div" className="media">
                <Box component="div" className="media-img-wrap">
                  <Box component="div" className="avatar avatar-sm">
                    <img
                      src={UserImage}
                      alt="user"
                      className="avatar-img rounded-circle"
                    />
                  </Box>
                </Box>
                <Box component="div" className="media-body">
                  <Box component="div">
                    <Box component="div" className="notifications-text">
                      New message received from{" "}
                      <Box
                        component="span"
                        className="text-dark text-capitalize"
                      >
                        Misuko Heid
                      </Box>
                    </Box>
                    <Box component="div" className="notifications-time">
                      1h
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
            <Box component="div" className="dropdown-divider" />
            <Link to="javascript:void(0);" className="dropdown-item">
              <Box component="div" className="media">
                <Box component="div" className="media-img-wrap">
                  <Box component="div" className="avatar avatar-sm">
                    <Box
                      component="span"
                      className="avatar-text avatar-text-primary rounded-circle"
                    >
                      <Box component="span" className="initial-wrap">
                        <Box component="span">
                          <i className="zmdi zmdi-account font-18" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="media-body">
                  <Box component="div">
                    <Box component="div" className="notifications-text">
                      You have a follow up with
                      <Box
                        component="span"
                        className="text-dark text-capitalize"
                      >
                        HBKU head
                      </Box>
                      on{" "}
                      <Box
                        component="span"
                        className="text-dark text-capitalize"
                      >
                        friday, dec 19
                      </Box>{" "}
                      at{" "}
                      <Box component="span" className="text-dark">
                        10.00 am
                      </Box>
                    </Box>
                    <Box component="div" className="notifications-time">
                      2d
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
            <Box component="div" className="dropdown-divider" />
            <Link to="javascript:void(0);" className="dropdown-item">
              <Box component="div" className="media">
                <Box component="div" className="media-img-wrap">
                  <Box component="div" className="avatar avatar-sm">
                    <Box
                      component="span"
                      className="avatar-text avatar-text-success rounded-circle"
                    >
                      <Box component="span" className="initial-wrap">
                        <Box component="span">A</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="media-body">
                  <Box component="div">
                    <Box component="div" className="notifications-text">
                      Application of{" "}
                      <Box
                        component="span"
                        className="text-dark text-capitalize"
                      >
                        Sarah Williams
                      </Box>{" "}
                      is waiting for your approval
                    </Box>
                    <Box component="div" className="notifications-time">
                      1w
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
            <Box component="div" className="dropdown-divider" />
            <Link to="javascript:void(0);" className="dropdown-item">
              <Box component="div" className="media">
                <Box component="div" className="media-img-wrap">
                  <Box component="div" className="avatar avatar-sm">
                    <Box
                      component="span"
                      className="avatar-text avatar-text-warning rounded-circle"
                    >
                      <Box component="span" className="initial-wrap">
                        <Box component="span">
                          <i className="zmdi zmdi-notifications font-18" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="media-body">
                  <Box component="div">
                    <Box component="div" className="notifications-text">
                      Last 2 days left for the project
                    </Box>
                    <Box component="div" className="notifications-time">
                      15d
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Fragment>
    );
  }
}
