import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../components/CustomButtons/Button";
import { Box, Grid, Typography, TextField } from "@material-ui/core";
import { Link } from "@material-ui/core";
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import Layout from "../components/Layout/Layout";
import { ForgotPassBtn, LogoCenter } from "../components";
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

const RecoverAccount = () => {
  const [formEl, setsFormEl] = useState({
    email: ""
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setsFormEl({ ...formEl, [name]: value });
  };
  const handleSubmit = e => {
    alert(
      "Your Password has been reset, Please check email and create new password"
    );
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
                <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
                  <Typography
                    className={classes.display5 + " " + "mb-10 text-center "}
                    component="h4"
                    variant="h4"
                  >
                    Need help with your Password?
                  </Typography>
                  <Typography className="text-center mb-10" component="p">
                    We will send new code to your recovery email to{" "}
                    <Link href={"/forgot-password"}>reset your </Link> password.{" "}
                  </Typography>
                  <Box component="div" className="form-group">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextValidator
                          id="userEmail"
                          label="Email Address"
                          type="email"
                          margin="dense"
                          variant="outlined"
                          className={classes.textField}
                          fullWidth
                          autoFocus
                          name="email"
                          onChange={handleChange}
                          value={formEl.email}
                          validators={["required", "isEmail"]}
                          errorMessages={[""]}
                        />
                        <ForgotPassBtn />
                        <Typography className="text-center" component="p">
                          <Link href={"/"}> Back to login </Link>
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
export default withStyles(styles)(RecoverAccount);
