import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { Facebook, LogoCenter, RegisterBtn, Twitter } from "../components";
import Header from "../components/Header/Header";
import UserProfileBanner from "../components/user/UserProfileBanner";
import UserDetails from "../components/user/UserDetails";
import Layout from "../components/Layout/Layout";
import { Box } from "@material-ui/core";
const styles = theme => ({});

class UserProfile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <UserProfileBanner />
        <Box component="div" className="pt-50">
          <UserDetails />
        </Box>
      </Layout>
    );
  }
}
export default withStyles(styles)(UserProfile);
