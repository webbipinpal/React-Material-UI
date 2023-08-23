import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Box, Link, List, ListItem } from "@material-ui/core";
import { FiZap, FiX, FiFileText, FiLayout, FiType } from "react-icons/fi";
import { makeStyles } from "@material-ui/styles";
import { MainManuList } from "./MenuItem";
const useStyles = makeStyles(theme => ({
  ullist: {
    padding: 0
  },
  listItem: {
    padding: 0
  }
}));

const MainMenu = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box component="nav" className="hbku-nav hbku-nav-blue">
        <Link
          href="javascript:void(0);"
          id="hbku_nav_close"
          className="hbku-nav-close"
          onClick={props.MainMenuClickHide}
        >
          <Box component="span" className="feather-icon">
            <FiX />
          </Box>
        </Link>
        <Box component="div" className="nicescroll-bar">
          <Box component="div" className="navbar-nav-wrap">
            <List className={classes.ullist + " " + "navbar-nav flex-row"}>
              <MainManuList />
            </List>
          </Box>
        </Box>
      </Box>
      <Box id="hbku_nav_backdrop" className="hbku-nav-backdrop" />
    </Fragment>
  );
};

export default MainMenu;
