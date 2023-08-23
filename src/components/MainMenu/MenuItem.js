import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Box, List, ListItem } from "@material-ui/core";
import { FiZap, FiX, FiFileText, FiLayout, FiType } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
// import { MenuItemLink } from "./MenuItemLink";
import { MenuItemLink } from "../Links/NavLinks";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  listItem: {
    padding: 0
  }
}));

export const MainManuList = menuprops => {
  const classes = useStyles();
  return (
    <Fragment>
      {MenuItemLink().map((menuLinkItem, i) => (
        <ListItem className={classes.listItem + " " + "nav-item"} key={i}>
          <NavLink
            {...menuLinkItem.dropDownClass}
            className="nav-link"
            to={menuLinkItem.path}
            exact
            activeClassName={"active"}
          >
            <Typography component="span" className="feather-icon">
              {menuLinkItem.icons}
            </Typography>
            <Typography component="span" className="nav-link-text">
              {menuLinkItem.label}
            </Typography>
          </NavLink>
          {menuLinkItem.isChildren ? (
            <SubMainMenu subMenuItem={menuLinkItem.childItem} />
          ) : (
            ""
          )}
        </ListItem>
      ))}
    </Fragment>
  );
};

const SubMainMenu = ({ subMenuItem }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <List
        id="pages_drp"
        className={
          classes.ullist + " " + "nav flex-column collapse collapse-level-1"
        }
      >
        {subMenuItem.map((subMenuProps, i) => (
          <ListItem className={classes.listItem + " " + "nav-item"} key={i}>
            <NavLink
              className="nav-link"
              to={subMenuProps.path}
              exact
              activeClassName={"active"}
            >
              {subMenuProps.label}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};
