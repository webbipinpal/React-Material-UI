import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import { TextField, Grid, Box, Typography } from "@material-ui/core";
import Button from "../CustomButtons/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
const UserPersonalSummaryForm = () => {
  const styles = useStyles();
  return (
    <Fragment>
      <Box className="user-pd-form">
        <form>
          <Box component="div" className="formGroup">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline={true}
                  rows="5"
                  rowsMax="10"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  className={styles.textField}
                />
              </Grid>
            </Grid>
          </Box>
          <Box component="div" className="formGroup">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button color="blue"> Save </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
    </Fragment>
  );
};
export default UserPersonalSummaryForm;
