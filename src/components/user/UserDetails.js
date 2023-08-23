import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Box, List, ListItem, Typography, Link } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ContainerStyle from "../GridContainer/GridContainer";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { UserInfoList } from "./UserInfoList";
import UserPersonalInfo from "./UserPersonalInfo";
import UserPersonalSummary from "./UserPersonalSummary";
import UserPersonalEducation from "./UserPersonalEducation";
const useStyles = makeStyles(theme => ({
  ullist: {},
  listItem: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));
const useStylesCont = makeStyles(theme => ContainerStyle);

const UserDetails = () => {
  const [userInfo, setuserInfo] = useState({
    userDetails: true,
    userSummary: false,
    userEducatiion: false,
    updateSection: ""
  });

  const handelswitch = LinkName => {
    switch (LinkName) {
      case "Personal":
        return <UserPersonalInfo />;
        break;
      case "Summary":
        return <UserPersonalSummary />;
        break;
      case "Education":
        return <UserPersonalEducation />;
        break;

      default:
        return "";
        break;
    }
  };
  const [uStatus, setuStatus] = useState({
    updateSection: handelswitch("Personal")
  });

  const handleClick = e => {
    e.preventDefault();
    const LinkName = e.currentTarget.innerText;
    setuStatus({
      updateSection: handelswitch(LinkName)
    });
    // if (LinkName == "Summary") {
    //   setuserInfo({
    //     userDetails: false,
    //     userSummary: true,
    //     userEducatiion: false
    //   });
    // } else if (LinkName == "Education") {
    //   setuserInfo({
    //     userDetails: false,
    //     userSummary: false,
    //     userEducatiion: true
    //   });
    // } else if (LinkName == "Personal") {
    //   setuserInfo({
    //     userDetails: true,
    //     userSummary: false,
    //     userEducatiion: false
    //   });
    // }
  };

  const classes = useStylesCont();
  const styles = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.container} spacing={3}>
        <Grid item xs={12} md={4}>
          <UserInfoList showDetails={handleClick} />
        </Grid>
        <Grid item xs={12} md={8}>
          {uStatus.updateSection}
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default UserDetails;
