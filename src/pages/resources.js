import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import ContainerStyle from "../components/GridContainer/GridContainer";
import { makeStyles } from "@material-ui/core/styles";
const useStylesCont = makeStyles(theme => ContainerStyle);

const Resources = () => {
  const classes = useStylesCont();
  return (
    <Layout>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <h3> Resources </h3>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Resources;
