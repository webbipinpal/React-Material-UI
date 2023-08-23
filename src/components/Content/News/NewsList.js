import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Box, List, ListItem, Typography, Link } from "@material-ui/core";
import Button from "../../CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import NewsImage from "./images/new-list-img.png";
import { FiArrowDown, FiList, FiGrid } from "react-icons/fi";
const useStyles = makeStyles(theme => ({
  ullist: {
    paddingTop: 0,
    paddingBottom: 0
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    width: "auto"
  }
}));

const NewsList = () => {
  const [newsView, setNewsView] = useState({
    gridView: "",
    listActive: "active",
    gridActive: ""
  });

  const gridView = () => {
    setNewsView({
      gridView: "news--grid",
      listActive: "",
      gridActive: "active"
    });
  };
  const listView = () => {
    setNewsView({
      gridView: "",
      listActive: "active",
      gridActive: ""
    });
  };

  const classes = useStyles();
  return (
    <Fragment>
      <Box
        component="div"
        className={
          "mez news-content news--list mez-pointer" + " " + newsView.gridView
        }
      >
        <Box component="div" className="mez calendar-head">
          <Box component="div" className="l-select-lg" />
          <Box component="div" className="l-view-wrap">
            <List className={classes.ullist}>
              <ListItem className={classes.listItem}>
                <Link
                  onClick={gridView}
                  className={"l-grid" + " " + newsView.gridActive}
                >
                  <i className="l-icon">
                    <FiGrid />
                  </i>
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link
                  onClick={listView}
                  className={"l-list" + " " + newsView.listActive}
                >
                  <i className="l-icon">
                    <FiList />
                  </i>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box component="div" className="mez sorter">
          <Box component="span">
            Title
            <i className="l-icon">
              <FiArrowDown />
            </i>
          </Box>
          <Box component="span" className="up">
            Date
            <i className="l-icon">
              <FiArrowDown />
            </i>
          </Box>
        </Box>
        <Box component="div" className="news__block">
          <Box component="p">Loading...</Box>
          <Box component="p" className="no-data">
            No data available
          </Box>
          <List className={classes.ullist}>
            <ListItem className={classes.listItem + " " + "items"}>
              <Box component="div" className="mez thumb-block">
                <figure>
                  <Link href="#">
                    <img
                      src={NewsImage}
                      alt=""
                      title=""
                      height="240"
                      width="320"
                      className="img-responsive full-width"
                    />
                  </Link>
                </figure>
                <Box component="div" className="thumb-block__detail">
                  <Box component="div" className="thumb-block__wrap">
                    <Typography variant="h2">
                      <Link href="#">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Link>
                    </Typography>
                    <Box component="span"> Oct 24, 2018</Box>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris ut ull...
                    </Typography>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="blue"
                    className={classes.submit}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </ListItem>
            <ListItem className={classes.listItem + " " + "items"}>
              <Box component="div" className="mez thumb-block">
                <figure>
                  <Link href="#">
                    <img
                      src={NewsImage}
                      alt=""
                      title=""
                      height="240"
                      width="320"
                      className="img-responsive full-width"
                    />
                  </Link>
                </figure>
                <Box component="div" className="thumb-block__detail">
                  <Box component="div" className="thumb-block__wrap">
                    <Typography variant="h2">
                      <Link href="#">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Link>
                    </Typography>
                    <Box component="span"> Oct 24, 2018</Box>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris ut ull...
                    </Typography>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="blue"
                    className={classes.submit}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </ListItem>
            <ListItem className={classes.listItem + " " + "items"}>
              <Box component="div" className="mez thumb-block">
                <figure>
                  <Link href="#">
                    <img
                      src={NewsImage}
                      alt=""
                      title=""
                      height="240"
                      width="320"
                      className="img-responsive full-width"
                    />
                  </Link>
                </figure>
                <Box component="div" className="thumb-block__detail">
                  <Box component="div" className="thumb-block__wrap">
                    <Typography variant="h2">
                      <Link href="#">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Link>
                    </Typography>
                    <Box component="span"> Oct 24, 2018</Box>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris ut ull...
                    </Typography>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="blue"
                    className={classes.submit}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </ListItem>
            <ListItem className={classes.listItem + " " + "items"}>
              <Box component="div" className="mez thumb-block">
                <figure>
                  <Link href="#">
                    <img
                      src={NewsImage}
                      alt=""
                      title=""
                      height="240"
                      width="320"
                      className="img-responsive full-width"
                    />
                  </Link>
                </figure>
                <Box component="div" className="thumb-block__detail">
                  <Box component="div" className="thumb-block__wrap">
                    <Typography variant="h2">
                      <Link href="#">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Link>
                    </Typography>
                    <Box component="span"> Oct 24, 2018</Box>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris ut ull...
                    </Typography>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="blue"
                    className={classes.submit}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </ListItem>
            <ListItem className={classes.listItem + " " + "items"}>
              <Box component="div" className="mez thumb-block">
                <figure>
                  <Link href="#">
                    <img
                      src={NewsImage}
                      alt=""
                      title=""
                      height="240"
                      width="320"
                      className="img-responsive full-width"
                    />
                  </Link>
                </figure>
                <Box component="div" className="thumb-block__detail">
                  <Box component="div" className="thumb-block__wrap">
                    <Typography variant="h2">
                      <Link href="#">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Link>
                    </Typography>
                    <Box component="span"> Oct 24, 2018</Box>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris ut ull...
                    </Typography>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="blue"
                    className={classes.submit}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </ListItem>
            <ListItem className={classes.listItem + " " + "items"}>
              <Box component="div" className="mez thumb-block">
                <figure>
                  <Link href="#">
                    <img
                      src={NewsImage}
                      alt=""
                      title=""
                      height="240"
                      width="320"
                      className="img-responsive full-width"
                    />
                  </Link>
                </figure>
                <Box component="div" className="thumb-block__detail">
                  <Box component="div" className="thumb-block__wrap">
                    <Typography variant="h2">
                      <Link href="#">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Link>
                    </Typography>
                    <Box component="span"> Oct 24, 2018</Box>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris ut ull...
                    </Typography>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="blue"
                    className={classes.submit}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </ListItem>
            <ListItem className={classes.listItem + " " + "items"}>
              <Box component="div" className="mez thumb-block">
                <figure>
                  <Link href="#">
                    <img
                      src={NewsImage}
                      alt=""
                      title=""
                      height="240"
                      width="320"
                      className="img-responsive full-width"
                    />
                  </Link>
                </figure>
                <Box component="div" className="thumb-block__detail">
                  <Box component="div" className="thumb-block__wrap">
                    <Typography variant="h2">
                      <Link href="#">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Link>
                    </Typography>
                    <Box component="span"> Oct 24, 2018</Box>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris ut ull...
                    </Typography>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="blue"
                    className={classes.submit}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </ListItem>
            <ListItem className={classes.listItem + " " + "items"}>
              <Box component="div" className="mez thumb-block">
                <figure>
                  <Link href="#">
                    <img
                      src={NewsImage}
                      alt=""
                      title=""
                      height="240"
                      width="320"
                      className="img-responsive full-width"
                    />
                  </Link>
                </figure>
                <Box component="div" className="thumb-block__detail">
                  <Box component="div" className="thumb-block__wrap">
                    <Typography variant="h2">
                      <Link href="#">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Link>
                    </Typography>
                    <Box component="span"> Oct 24, 2018</Box>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris ut ull...
                    </Typography>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="blue"
                    className={classes.submit}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Fragment>
  );
};

export default NewsList;
