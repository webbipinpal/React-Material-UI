import React from "react";
import { Grid, Box } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import { makeStyles } from "@material-ui/core/styles";
import RegistrationSucess from "../components/Messages/RegistrationSucess";
import ContainerStyle from "../components/GridContainer/GridContainer";
const useStylesCont = makeStyles(theme => ContainerStyle);

const ThankYou = () => {
  const classes = useStylesCont();
  return (
    <Layout noHeader={true}>
      <Grid container className={classes.container} spacing={3}>
        <Grid item xs={12}>
          <RegistrationSucess />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default ThankYou;
