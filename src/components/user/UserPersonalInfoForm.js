import React, { Fragment, useState } from "react";
import { Box, TextField, Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "../CustomButtons/Button";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from "react-material-ui-form-validator";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#066CC1" }
  }
});
const useStyles = makeStyles(theme => ({
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
export const UserPersonalInfoForm = () => {
  const [piformEl, setPiformEl] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    gender: "",
    dob: "",
    nationality: "",
    religion: "",
    language: "",
    email: "",
    alternatemail: "",
    mobile: "",
    alternatemobile: ""
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setPiformEl({ ...piformEl, [name]: value });
  };
  const handleSubmit = e => {
    alert("Your Information has been Saved!. ");
    window.location.href = "/user";
  };

  const [value, setValue] = React.useState("");
  function handleGender(event) {
    setValue(event.target.value);
  }

  const classes = useStyles();
  return (
    <Fragment>
      <Box className="user-pd-form">
        <ValidatorForm onSubmit={handleSubmit}>
          <Box component="div" className="formGroup">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  id="firstName"
                  label="First and Middle Name"
                  name="firstName"
                  autoComplete="fname"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  onChange={handleChange}
                  value={piformEl.firstName}
                  validators={["required"]}
                  errorMessages={[""]}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  onChange={handleChange}
                  value={piformEl.lastName}
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
                  id="designation"
                  label="Designation"
                  type="text"
                  name="designation"
                  autoComplete="text"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  onChange={handleChange}
                  value={piformEl.designation}
                  validators={["required"]}
                  errorMessages={[""]}
                />
              </Grid>
            </Grid>
          </Box>

          <Box component="div" className="formGroup">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <MuiThemeProvider theme={theme}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleGender}
                      row
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="Male"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="Female"
                        labelPlacement="end"
                      />
                    </RadioGroup>
                  </FormControl>
                </MuiThemeProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel component="legend">Date of Birth</FormLabel>
                <TextValidator
                  id="date"
                  type="date"
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box component="div" className="formGroup">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextValidator
                  id="nationality"
                  label="Nationality"
                  type="text"
                  name="nationality"
                  autoComplete="text"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  onChange={handleChange}
                  value={piformEl.nationality}
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
                  id="religion"
                  label="Religion"
                  type="text"
                  name="religion"
                  autoComplete="text"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  onChange={handleChange}
                  value={piformEl.religion}
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
                  id="language"
                  label="Language Known"
                  type="text"
                  name="language"
                  autoComplete="text"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  onChange={handleChange}
                  value={piformEl.language}
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
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="text"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  onChange={handleChange}
                  value={piformEl.email}
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
                  id="alternate-email"
                  label="Alternate Email"
                  type="email"
                  name="email"
                  autoComplete="text"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </Box>
          <Box component="div" className="formGroup">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextValidator
                  id="mobile"
                  label="Mobile NO"
                  type="text"
                  name="mobile"
                  autoComplete="text"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  onChange={handleChange}
                  value={piformEl.mobile}
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
                  id="alternate-mobile-no"
                  label="Alternate Mobile NO"
                  type="text"
                  name="mobile-no"
                  autoComplete="text"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </Box>
          <Box component="div" className="formGroup">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button type="submit" color="blue">
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </ValidatorForm>
      </Box>
    </Fragment>
  );
};
