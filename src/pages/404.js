import React from "react";
import { Grid } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import ContainerStyle from "../components/GridContainer/GridContainer";
import { makeStyles } from "@material-ui/core/styles";
import ServerModal from "../components/Messages/Model";
const useStylesCont = makeStyles(theme => ContainerStyle);

const NotFoundPage = () => {
  const classes = useStylesCont();
  return (
    <Layout>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <ServerModal />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default NotFoundPage;
