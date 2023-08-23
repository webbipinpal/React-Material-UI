import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Paper from "@material-ui/core/Paper";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Typography, Link } from "@material-ui/core";
import { Box, TextField, Grid } from "@material-ui/core";
import { UserPersonalInfoForm } from "./UserPersonalInfoForm";
import { FiEdit2, FiX } from "react-icons/fi";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import UserPersonalEducationForm from "./UserPersonalEducationForm";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  modelSM: {}
}));
/*dialogs Start*/
const styles = theme => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#066CC1",
    fontSize: "24px",
    cursor: "pointer"
  }
});
const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <i aria-label="close" className={classes.closeButton} onClick={onClose}>
          <FiX />
        </i>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles(theme => ({}))(MuiDialogContent);
/*dialogs end*/
const UserPersonalInfo = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const styles = useStyles();
  return (
    <Fragment>
      <Paper className="hbku-sec-wrapper user-pd user-profile">
        <Typography
          className="user-pd--title text-h-light-black bold font-weight-500"
          variant="h5"
        >
          Personal Details
          <i className="edit-icon" onClick={handleClickOpen}>
            <FiEdit2 />
          </i>
        </Typography>
        <Box component="div" className="pt-30">
          <List className="pd-list-group">
            <ListItem className="pd-list-group-item">
              <Typography component="span" className="field-text-label">
                Name :
              </Typography>
              <Typography component="span" className="field-text">
                Dr. Khalid Al Kuwari
              </Typography>
            </ListItem>
            <ListItem className="pd-list-group-item">
              <Typography component="span" className="field-text-label">
                Designation :
              </Typography>
              <Typography component="span" className="field-text">
                Assistant Professor
              </Typography>
            </ListItem>
            <ListItem className="pd-list-group-item">
              <Typography component="span" className="field-text-label">
                Gender :
              </Typography>
              <Typography component="span" className="field-text">
                Male
              </Typography>
            </ListItem>
            <ListItem className="pd-list-group-item">
              <Typography component="span" className="field-text-label">
                Date of Birth :
              </Typography>
              <Typography component="span" className="field-text">
                2 April 1993
              </Typography>
            </ListItem>
            <ListItem className="pd-list-group-item">
              <Typography component="span" className="field-text-label">
                Nationality :
              </Typography>
              <Typography component="span" className="field-text">
                Qatari
              </Typography>
            </ListItem>
            <ListItem className="pd-list-group-item">
              <Typography component="span" className="field-text-label">
                Religion :
              </Typography>
              <Typography component="span" className="field-text">
                Muslim
              </Typography>
            </ListItem>
            <ListItem className="pd-list-group-item">
              <Typography component="span" className="field-text-label">
                Language Known :
              </Typography>
              <Typography component="span" className="field-text">
                Arabic, English
              </Typography>
            </ListItem>
            <ListItem className="pd-list-group-item">
              <Typography component="span" className="field-text-label">
                Email Address :
              </Typography>
              <Typography component="span" className="field-text">
                demo@gmail.com
              </Typography>
            </ListItem>
            <ListItem className="pd-list-group-item">
              <Typography component="span" className="field-text-label">
                Alternate Email Address :
              </Typography>
              <Typography component="span" className="field-text">
                demo@gmail.com
              </Typography>
            </ListItem>
            <ListItem className="pd-list-group-item">
              <Typography component="span" className="field-text-label">
                Mobile No :
              </Typography>
              <Typography component="span" className="field-text">
                +974-55223311
              </Typography>
            </ListItem>
            <ListItem className="pd-list-group-item">
              <Typography component="span" className="field-text-label">
                Alternate Mobile No :
              </Typography>
              <Typography component="span" className="field-text">
                +974-55223311
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Paper>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={fullScreen}
        classes={{ paper: styles.modelSM }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Personal Details
        </DialogTitle>
        <DialogContent dividers>
          <UserPersonalInfoForm />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default UserPersonalInfo;
