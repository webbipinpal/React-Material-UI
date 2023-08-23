import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Box, List, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  ullist: {
    paddingTop: 0,
    paddingBottom: 0
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));
const EventList = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box component="div" className="mez sorter" />
      <Box component="div" className="mez calendar-list">
        <Box component="div" className="calendar-list__block">
          <List className={classes.ullist}>
            <ListItem className="cal-items">
              <List className={classes.ullist + " " + "table"}>
                <ListItem>
                  <Typography variant="h3" className="event-not-clickable">
                    <Box component="span">Conference time (3days)</Box>
                  </Typography>
                </ListItem>
                <ListItem>
                  <Box component="div" className="l-period">
                    <Box component="span" className="date">
                      02
                    </Box>
                    <Box component="div" className="l-period__date">
                      <Box component="span" className="month">
                        Feb
                      </Box>
                      <Box component="span" className="year">
                        2019
                      </Box>
                    </Box>
                    <Box component="span" className="hypen">
                      -
                    </Box>
                    <Box component="span" className="date">
                      04
                    </Box>
                    <Box component="div" className="l-period__date">
                      <Box component="span" className="month">
                        Feb
                      </Box>
                      <Box component="span" className="year">
                        2019
                      </Box>
                    </Box>
                  </Box>
                </ListItem>
              </List>
            </ListItem>
            <ListItem className="cal-items">
              <List className={classes.ullist + " " + "table"}>
                <ListItem>
                  <Typography variant="h3" className="event-not-clickable">
                    <Box component="span">Final grades available online</Box>
                  </Typography>
                </ListItem>
                <ListItem>
                  <Box component="div" className="l-period">
                    <Box component="span" className="date">
                      02
                    </Box>
                    <Box component="div" className="l-period__date">
                      <Box component="span" className="month">
                        Feb
                      </Box>
                      <Box component="span" className="year">
                        2019
                      </Box>
                    </Box>
                  </Box>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Fragment>
  );
};

export default EventList;
