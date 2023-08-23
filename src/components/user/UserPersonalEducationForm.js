import React, { Fragment } from "react"
import Paper from "@material-ui/core/Paper"
import { TextField, Grid, Box, Typography } from "@material-ui/core"
import Button from "../CustomButtons/Button"
import { makeStyles, withStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  textField: {
    backgroundColor: "#ffffff",
    [`& fieldset`]: {
      borderRadius: 0,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#27A6DE",
        },
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#27A6DE",
          borderWidth: "1px",
        },
      },
    },
  },
}))
const UserPersonalEducationForm = () => {
  const classes = useStyles()
  return (
    <Fragment>
      <Box className="user-ed">
        <form>
          <Box component="div" className="formGroup">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="Degree"
                  label="Degree Name"
                  name="Degree"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  required
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </Box>
          <Box component="div" className="formGroup">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="collegeName"
                  label="College Name"
                  name="College Name"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  required
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </Box>
          <Box component="div" className="formGroup">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="StartYear"
                  label="Start Year"
                  name="Start Year"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  required
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="endYear"
                  label="End Year (or expected)"
                  name="End Year"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  required
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </Box>
          <Box component="div" className="formGroup">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="Country"
                  label="Country in which you did this course"
                  name="Country"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  required
                  className={classes.textField}
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
  )
}

export default UserPersonalEducationForm
