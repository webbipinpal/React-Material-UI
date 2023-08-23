import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Box, List, ListItem } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ContainerStyle from "../GridContainer/GridContainer";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { ProfileTab, ProfileTabLink } from "../Links/NavLinks";
const useStyles = makeStyles(theme => ({
  ullist: {
    padding: 0
  },
  listItem: {
    padding: 0,
    width: "auto"
  },
  tabLinkClass: {
    paddingLeft: "2rem",
    paddingRight: "2rem"
  }
}));
const useStylesCont = makeStyles(theme => ContainerStyle);

const UserProfileTabs = () => {
  const [activeTabLink, setActiveTabLink] = useState(3);
  const [activeTabCont, setActiveTabCont] = useState(3);

  const TabToggle = id => {
    setActiveTabLink(id);
    setActiveTabCont(id);
  };
  const classes = useStylesCont();
  const styles = useStyles();
  return (
    <Fragment>
      <Box component="div" className="bg-white shadow-bottom">
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <List className={styles.ullist + " " + "nav nav-tabs"}>
              {ProfileTab.map(tabMenu => (
                <ListItem
                  className={styles.listItem + " " + "nav-item"}
                  key={tabMenu.id}
                >
                  <Link
                    to={tabMenu.path}
                    className={
                      styles.tabLinkClass +
                      " " +
                      tabMenu.class +
                      (tabMenu.id === activeTabLink ? " active" : "")
                    }
                    onClick={() => TabToggle(tabMenu.id)}
                  >
                    {tabMenu.label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
      <Box component="div" className="tab-content mt-sm-60 mt-30">
        {ProfileTabLink.map(tabCont => (
          <Box
            component="div"
            key={tabCont.id}
            className={
              tabCont.class +
              " " +
              (tabCont.id === activeTabCont ? " active" : "")
            }
          >
            <Grid container className={classes.container}>
              <Grid item xs={12}>
                <h1>{tabCont.label}</h1>
                {tabCont.content}
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Fragment>
  );
};
export default UserProfileTabs;
