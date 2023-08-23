import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Typography,
  Grid,
  FormControlLabel,
  Link
} from "@material-ui/core";
import React, { useEffect, useState, Fragment, Component } from "react";
import { Facebook, HbkuSlider, LoginBtn, Twitter } from "../components";
import Logo from "../components/Logo/Logo";
import Layout from "../components/Layout/Layout";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import PasswordField from "material-ui-password-field";
import PasswordField from "../components/Fields/Password/PasswordField";

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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  form: {
    width: "100%", // Fix IE 11 issue.
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

//const classes = useStyles();
class Login extends Component {
  state = {
    formData: {
      email: "",
      password: ""
    },
    loggedIn: false
  };

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = () => {
    this.setState({
      loggedIn: true
    });
    if (this.state.loggedIn) {
      this.props.history.push(`/dashboard`);
    }
  };

  render() {
    const { formData, submitted } = this.state;
    return (
      <Layout noHeader="true">
        <Grid container spacing={0}>
          <Grid item xs={12} lg={5}>
            {<HbkuSlider />}
          </Grid>
          <Grid item xs={12} lg={7}>
            <Container component="main" className="auth-form-wrap py-50">
              <Box
                component="div"
                className={
                  " auth-form auth_form w-xxl-55 w-xl-75 w-sm-90 w-xs-100"
                }
              >
                <Box component="div">
                  <Logo />
                  <ValidatorForm onSubmit={this.handleSubmit}>
                    <Typography className={"mb-10"} component="h1">
                      Welcome to HBKU Website!
                    </Typography>
                    <Box component="p" className="mb-10">
                      Sign Into your account and enjoy of HBKU Website
                    </Box>
                    <TextValidator
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      id="email"
                      label="Email Address"
                      onChange={this.handleChange}
                      name="email"
                      value={formData.email}
                      validators={["required", "isEmail"]}
                      errorMessages={[""]}
                    />
                    {/* <TextValidator
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      label="Password"
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                      name="password"
                      value={formData.password}
                      validators={["required"]}
                      errormessages={[""]}
                    /> */}
                    <PasswordField
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      label="Password"
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                      name="password"
                      value={formData.password}
                      validators={["required"]}
                      errormessages={[""]}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Keep me logged in"
                    />
                    {<LoginBtn />}
                    <Typography component="p" align="center">
                      Having trouble{" "}
                      <Link href="/reset-password" variant="body2">
                        logging in?
                      </Link>
                    </Typography>
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
                      Do have an account yet?{" "}
                      <Link href="/signup" variant="body2">
                        {"Sign Up"}
                      </Link>
                    </Typography>
                  </ValidatorForm>
                </Box>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles)(Login);
