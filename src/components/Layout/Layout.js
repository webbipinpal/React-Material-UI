import React, { Component, Fragment } from "react";
import Header from "../Header/Header";
import { Box } from "@material-ui/core";
export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      showSearchClass: "",
      mainMenu: false
    };
  }
  openSearch = e => {
    if (this.state.showSearch === false) {
      this.setState({
        showSearch: true,
        showSearchClass: " navbar-search-toggle"
      });
    }
  };
  closeSearch = e => {
    this.setState({
      showSearch: false,
      showSearchClass: ""
    });
  };
  mainMenuShow = e => {
    if (this.state.mainMenu === false) {
      this.setState({
        mainMenu: true,
        showHideClass: "hbku-nav-toggle"
      });
    }
  };
  mainMenuHide = e => {
    if (this.state.mainMenu === true) {
      this.setState({
        mainMenu: false,
        showHideClass: ""
      });
    }
  };
  render() {
    return (
      <Fragment>
        {this.props.noHeader ? (
          <Box
            component="section"
            className="hbku-pg-wrapper hbku-auth-wrapper"
          >
            {this.props.children}
          </Box>
        ) : (
          <Box
            component="div"
            className={
              "hbku-wrapper hbku-horizontal-nav" +
              " " +
              this.state.showSearchClass +
              " " +
              this.state.showHideClass
            }
          >
            <Header
              openSearch={this.openSearch}
              closeSearch={this.closeSearch}
              showSearch={this.state.showSearch}
              mainMenuShow={this.mainMenuShow}
              mainMenuHide={this.mainMenuHide}
            />
            <Box component="div" className="hbku-pg-wrapper">
              {this.props.children}
            </Box>
          </Box>
        )}
      </Fragment>
    );
  }
}
