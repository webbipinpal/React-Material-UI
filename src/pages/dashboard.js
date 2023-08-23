import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { Facebook, LogoCenter, RegisterBtn, Twitter } from "../components";
import UserProfileBanner from "../components/user/UserProfileBanner";
import UserProfileTabs from "../components/user/UserProfileTabs";
import Layout from "../components/Layout/Layout";
const styles = theme => ({});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <UserProfileBanner />
        <UserProfileTabs />
      </Layout>
    );
  }
}
export default withStyles(styles)(Dashboard);
