import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Box, List, ListItem } from "@material-ui/core";
import LogoMain from "../Logo/LogoMain";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import {
  MenuIcon,
  SearchIcon,
  SettingIcon,
  NotificationIcon
} from "../ButtonStyle/SimpleBtn";
import NotificationPopup from "./NotificationPopup";
import ProfileMedia from "./ProfileMedia";
import ProfileMediaMenu from "./ProfileMediaMenu";
import SearchField from "./SearchField";
import MainMenu from "../MainMenu/MainMenu";
export const MyContext = React.createContext();
const styles = theme => ({
  listItem: {
    padding: 0,
    width: "auto"
  }
});
class Header extends Component {
  constructor() {
    super();
    this.state = {
      userSetting: false,
      userNotification: false,
      mainMenu: false
    };
  }

  settingBlock = e => {
    this.setState({ userSetting: !this.state.userSetting });
    e.preventDefault();
  };
  notificationBlock = e => {
    this.setState({ userNotification: !this.state.userNotification });
    e.preventDefault();
  };

  openSearch = e => {
    this.props.openSearch();
    e.preventDefault();
  };

  closeSearch = e => {
    this.props.closeSearch();
    e.preventDefault();
  };
  mainMenuShow = e => {
    this.props.mainMenuShow();
  };
  mainMenuHide = e => {
    this.props.mainMenuHide();
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        {/* <Box
          component="div"
          className={
            "hbku-wrapper hbku-horizontal-nav" +
            " " +
            this.state.showSearchClass +
            " " +
            this.state.showHideClass
          }
        > */}
        <Box
          component="nav"
          className="navbar navbar-expand-xl navbar-light fixed-top hbku-navbar"
        >
          <MenuIcon MainMenuClickShow={this.mainMenuShow} />
          <LogoMain />
          <List className="navbar-nav hk-navbar-content">
            <ListItem className={classes.listItem + " " + "nav-item"}>
              <SearchIcon searchClickFun={this.openSearch} />
            </ListItem>
            <ListItem className={classes.listItem + " " + "nav-item"}>
              <SettingIcon />
            </ListItem>
            <ListItem
              className={
                classes.listItem +
                " " +
                "nav-item dropdown dropdown-notifications"
              }
            >
              <NotificationIcon NotificationClickFun={this.notificationBlock} />

              {this.state.userNotification ? <NotificationPopup /> : null}
            </ListItem>
            <ListItem
              className={
                classes.listItem +
                " " +
                "nav-item dropdown dropdown-authentication"
              }
            >
              <ProfileMedia ProfileMediaClickFun={this.settingBlock} />
              {this.state.userSetting ? <ProfileMediaMenu /> : null}
            </ListItem>
          </List>
        </Box>
        {this.props.showSearch ? (
          <SearchField openSearchField={this.props.closeSearch} />
        ) : null}
        <MainMenu MainMenuClickHide={this.props.mainMenuHide} />
        {/* </Box> */}
      </Fragment>
    );
  }
}
export default withStyles(styles)(Header);
