import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import { Box, Grid, Typography, TextField } from "@material-ui/core";
import { Link } from "@material-ui/core";
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import Layout from "../components/Layout/Layout";
import { ResetPassBtn, LogoCenter } from "../components";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = theme => ({
  section: {
    marginTop: theme.spacing(3)
  }
});

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "#f5f5f6"
    }
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  auth_form: {
    margin: "0 auto"
  },
  formGroup: {
    marginBottom: 0
  },
  display5: {
    fontSize: "2rem",
    fontWeight: "500"
  },
  textField: {
    backgroundColor: "#ffffff",
    [`& fieldset`]: {
      borderRadius: 0
    },
    "& .MuiOutlinedInput-root": {
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#27A6DE"
        }
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#27A6DE",
          borderWidth: "1px"
        }
      }
    }
  }
}));

const ForgotPassword = () => {
  const [formEl, setformEl] = useState({
    password: "",
    confPassword: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setformEl({ ...formEl, [name]: value });
  };
  const handleSubmit = e => {
    alert("Your Password has been update. Please login again");
  };
  const classes = useStyles();

  return (
    <Layout noHeader="true">
      <Box component="section" className="hbku-pg-wrapper hbku-auth-wrapper">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box component="div" className="auth-form-wrap pt-70">
              <Box
                component="div"
                className="auth-form w-xl-35 w-lg-55 w-sm-75 w-100"
              >
                <LogoCenter />
                <ValidatorForm onSubmit={handleSubmit}>
                  <Typography
                    className={classes.display5 + " " + "mb-10 text-center "}
                    component="h4"
                    variant="h4"
                  >
                    Please reset your password
                  </Typography>
                  <Box component="div" className="formGroup">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextValidator
                          id="password-input"
                          label="Password"
                          type="password"
                          name="password"
                          autoComplete="password"
                          margin="dense"
                          variant="outlined"
                          fullWidth
                          onChange={handleChange}
                          value={formEl.password}
                          validators={["required"]}
                          errorMessages={[""]}
                          className={classes.textField}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box component="div" className="formGroup">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextValidator
                          id="cpassword-input"
                          label="Confirm Password"
                          type="password"
                          name="confPassword"
                          autoComplete="password"
                          margin="dense"
                          variant="outlined"
                          fullWidth
                          onChange={handleChange}
                          value={formEl.confPassword}
                          validators={["required"]}
                          errorMessages={[""]}
                          className={classes.textField}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box component="div" className="formGroup">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <ResetPassBtn />
                        <Typography className="text-center" component="p">
                          <Link href={"/"}> Back to login </Link>{" "}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </ValidatorForm>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};
export default withStyles(styles)(ForgotPassword);
