import React, { Fragment } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "../CustomButtons/Button";
import Paper from "@material-ui/core/Paper";
import { Typography, Box, List, ListItem, Link } from "@material-ui/core";
import { FiEdit2, FiX, FiTrash } from "react-icons/fi";
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
const UserPersonalEducation = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [Delopen, setDelopen] = React.useState(false);
  const handledelet = () => {
    setDelopen(true);
    console.log("Deleted this Course!");
  };
  const handleCloseDelete = () => {
    setDelopen(false);
  };
  const handleDelete = () => {
    alert("Your Degree have been deleted!");
    setDelopen(false);
  };
  const handleCancle = () => {
    setDelopen(false);
  };

  const styles = useStyles();
  return (
    <Fragment>
      <Paper className="hbku-sec-wrapper user-ed user-profile">
        <Typography
          className="user-pd--title text-h-light-black font-weight-500"
          variant="h5"
        >
          Education Details
        </Typography>
        <Box component="div" className="pt-30">
          <List className="ed-list-group">
            <ListItem className="ed-list-group-item">
              <Typography variant="h5" className="field-text-label">
                Master of Arts in Applied Islamic Ethics
                <i className="edit-icon" onClick={handleClickOpen}>
                  <FiEdit2 />
                </i>
                <i className="delete-icon" onClick={handledelet}>
                  <FiTrash />
                </i>
              </Typography>
              <Typography component="span" className="field-text">
                College of Islamic Studies
              </Typography>
              <Typography component="span" className="field-text">
                2015 to 2018
              </Typography>
              <Typography component="span" className="field-text">
                Qatar
              </Typography>
            </ListItem>
            <ListItem className="ed-list-group-item">
              <Typography variant="h5" className="field-text-label">
                Master of Arts in Applied Islamic Ethics
                <i className="edit-icon" onClick={handleClickOpen}>
                  <FiEdit2 />
                </i>
                <i className="delete-icon" onClick={handledelet}>
                  <FiTrash />
                </i>
              </Typography>
              <Typography component="span" className="field-text">
                College of Islamic Studies
              </Typography>
              <Typography component="span" className="field-text">
                2015 to 2018
              </Typography>
              <Typography component="span" className="field-text">
                Qatar
              </Typography>
            </ListItem>
          </List>
          <Link style={{ cursor: "pointer" }} onClick={handleClickOpen}>
            Add Degree
          </Link>
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
          Education Details
        </DialogTitle>
        <DialogContent dividers>
          <UserPersonalEducationForm />
        </DialogContent>
      </Dialog>

      <Dialog
        onClose={handleCloseDelete}
        aria-labelledby="customized-dialog-title"
        open={Delopen}
        fullScreen={fullScreen}
        classes={{ paper: styles.modelSM }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleCloseDelete}>
          Education Delete
        </DialogTitle>
        <DialogContent dividers>
          <h4 className="mb-30">Are Your Sure! </h4>
          <Button type="button" color="blue" onClick={handleDelete}>
            Yes
          </Button>
          <Button type="button" onClick={handleCancle}>
            Cancle
          </Button>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
export default UserPersonalEducation;
