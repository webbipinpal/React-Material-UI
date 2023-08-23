import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import { Typography, Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import UserPersonalSummaryForm from "./UserPersonalSummaryForm";
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
const UserPersonalSummary = () => {
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
          className="user-pd--title text-h-light-black font-weight-500"
          variant="h5"
        >
          Profile Summary
          <i className="edit-icon" onClick={handleClickOpen}>
            <FiEdit2 />
          </i>
        </Typography>
        <Box component="div" className="pt-30">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
          Profile Summary
        </DialogTitle>
        <DialogContent dividers>
          <UserPersonalSummaryForm />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
export default UserPersonalSummary;
