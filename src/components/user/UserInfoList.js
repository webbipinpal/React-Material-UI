import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Paper from "@material-ui/core/Paper";
import { List, ListItem, Typography, Link } from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { UserProfileTabs } from "../Links/NavLinks";
const useStyles = makeStyles(theme => ({
  ullist: {},
  listItem: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));

export const UserInfoList = props => {
  const styles = useStyles();
  return (
    <Fragment>
      <Paper className="hbku-sec-wrapper ql-cont">
        <Typography variant="h5" className="ql--title">
          Quick Links
        </Typography>
        <List className={styles.ullist + " " + "ql-list-group"}>
          {UserProfileTabs.map(linkProps => (
            <ListItem
              className={styles.listItem + " " + "ql-list-group-item"}
              key={linkProps.label}
              value={linkProps.label}
              onClick={props.showDetails}
            >
              <i className="mr-10">{linkProps.icon}</i>
              <Link href={linkProps.path}>{linkProps.label}</Link>
              {/* <Typography className="updated-status" component="span">
                {linkProps.status}
              </Typography> */}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Fragment>
  );
};
