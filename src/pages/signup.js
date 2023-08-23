import React, { Fragment, useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import {
  withRoot,
  Facebook,
  LogoCenter,
  RegisterBtn,
  Twitter
} from "../components";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from "react-material-ui-form-validator";
import { UserProfileRole } from "../components/Links/NavLinks";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import CheckboxValidatorElement from "../components/FormValidation/CheckboxValidation";
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
  display4: {
    fontSize: "2.5rem",
    fontWeight: 500
  },
  display3: {
    fontWeight: "bold"
  },
  auth_form: {
    margin: "0 auto"
  },
  formGroup: {
    marginBottom: 0
  },
  center: {
    display: "block",
    "& a": {
      display: "block"
    }
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

const SignUp = () => {
  const [sformEl, setsformEl] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
    tccheckbox: false
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== sformEl.password) {
        return false;
      }
      return true;
    });
  });

  ValidatorForm.addValidationRule("isTruthy", value => value);

  const handleChange = e => {
    const { name, value } = e.target;
    setsformEl({ ...sformEl, [name]: value });
  };

  const handelCheckbox = e => {
    console.log(e.target);
    const { name, checked } = e.target;
    setsformEl({ ...sformEl, [name]: checked });
    console.log(e.checked);
  };
  const handleSubmit = e => {
    alert("Please check your email - we have sent a confirmation message");
    window.location.href = "/login";
  };

  const [selectvalues, setSelectvalues] = useState({
    selectValue: "st"
  });
  const selectChange = name => event => {
    setSelectvalues({ ...selectvalues, [name]: event.target.value });
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
                    className={classes.display4 + " " + "mb-10 text-center"}
                    component="h1"
                  >
                    Sign up in HBKU Website!
                  </Typography>
                  <Box component="div" className="formGroup">
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextValidator
                          id="firstName"
                          label="First Name"
                          type="text"
                          name="firstName"
                          autoComplete="fName"
                          margin="dense"
                          variant="outlined"
                          className={classes.textField}
                          fullWidth
                          onChange={handleChange}
                          value={sformEl.firstName}
                          validators={["required"]}
                          errorMessages={[""]}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextValidator
                          id="last-name-input"
                          label="Last Name"
                          type="text"
                          name="lastName"
                          autoComplete="lName"
                          margin="dense"
                          variant="outlined"
                          className={classes.textField}
                          fullWidth
                          onChange={handleChange}
                          value={sformEl.lastName}
                          validators={["required"]}
                          errorMessages={[""]}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box component="div" className="formGroup">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextValidator
                          id="email-input"
                          label="Email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          margin="dense"
                          variant="outlined"
                          className={classes.textField}
                          fullWidth
                          onChange={handleChange}
                          value={sformEl.email}
                          validators={["required", "isEmail"]}
                          errorMessages={[""]}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box component="div" className="formGroup">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextValidator
                          id="password-input"
                          label="Password"
                          type="password"
                          name="password"
                          autoComplete="password"
                          margin="dense"
                          variant="outlined"
                          className={classes.textField}
                          fullWidth
                          onChange={handleChange}
                          value={sformEl.password}
                          validators={["required"]}
                          errorMessages={[""]}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box component="div" className="formGroup">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextValidator
                          id="confPassword"
                          label="Confirm Password"
                          type="password"
                          name="confPassword"
                          autoComplete="password"
                          margin="dense"
                          variant="outlined"
                          className={classes.textField}
                          fullWidth
                          onChange={handleChange}
                          value={sformEl.confPassword || ""}
                          validators={["required", "isPasswordMatch"]}
                          errorMessages={["", "password mismatch"]}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box component="div" className="formGroup">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <SelectValidator
                          id="user-cat"
                          label="Select Category"
                          select
                          fullWidth
                          variant="outlined"
                          className={classes.textField}
                          margin="dense"
                          SelectProps={{
                            native: true
                          }}
                          validators={["required"]}
                          errorMessages={[" "]}
                          value={selectvalues.selectValue}
                          onChange={selectChange("selectValue")}
                        >
                          {UserProfileRole.map(option => (
                            <option
                              name={option.value}
                              value={option.value}
                              key={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </SelectValidator>
                      </Grid>
                    </Grid>
                  </Box>
                  <FormControlLabel
                    className="font-14"
                    control={
                      <CheckboxValidatorElement
                        name="tccheckbox"
                        validators={["isTruthy"]}
                        errorMessages={"Please check, this field is required"}
                        checked={sformEl.tccheckbox}
                        value={sformEl.tccheckbox}
                        color="primary"
                        onChange={handelCheckbox}
                      />
                    }
                    label={
                      <Fragment>
                        <Box component="span">
                          I have read and agree to the{" "}
                        </Box>
                        <Link href={"#"}>term and conditions</Link>
                      </Fragment>
                    }
                  />
                  <RegisterBtn />
                  <Box component="div" className="option-sep">
                    OR
                  </Box>
                  <Grid container spacing={3} className="mb-20">
                    <Grid item xs={12} sm={6}>
                      {<Facebook />}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {<Twitter />}
                    </Grid>
                  </Grid>
                  <Typography component="div" align="center">
                    Already have an account?
                    <Link href="/"> {"Sign In"} </Link>
                  </Typography>
                </ValidatorForm>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};
export default withStyles(styles)(SignUp);
