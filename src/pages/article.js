import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import ContainerStyle from "../components/GridContainer/GridContainer";
import { makeStyles } from "@material-ui/core/styles";
import Article from "../components/Content/Article/Article";
const useStylesCont = makeStyles(theme => ContainerStyle);

const ArticlePage = () => {
  const classes = useStylesCont();
  return (
    <Layout>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Article />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default ArticlePage;
