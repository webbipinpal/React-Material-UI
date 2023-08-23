import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import UserImage from "./images/user.jpg";
import UserBanner from "./images/bg-profile.jpg";
import { Box } from "@material-ui/core/";
import { Link, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ContainerStyle from "../GridContainer/GridContainer";
import Avatar from "@material-ui/core/Avatar";
import { MdEmail, MdModeEdit } from "react-icons/md";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { FiX } from "react-icons/fi";
import Button from "../CustomButtons/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import UserPersonalEducationForm from "./UserPersonalEducationForm";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  profileMailBtn: {
    padding: ".275rem 1rem"
  },
  profileMailBtnIcon: {
    lineHeight: "0"
  }
}));
const useStylesCont = makeStyles(theme => ContainerStyle);
/*dialogs end*/
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
    <MuiDialogTitle disableTypography>
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
const UserProfileBanner = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStylesCont();
  const styles = useStyles();

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} className="pa-0">
          <Box component="div" className="profile-cover-wrap overlay-wrap">
            <Box
              component="div"
              className="profile-cover-img uploadedImg"
              style={{ backgroundImage: "url(" + UserBanner + ")" }}
            />
            <Box component="div" className="bg-overlay bg-trans-dark-60" />
            <Box component="div" className=" profile-cover-content py-50">
              <Grid container className={classes.container}>
                <Grid item xs={12} className="uploadedImg">
                  <Typography
                    variant="caption"
                    className="edit-icon rounded-circle"
                    onClick={handleClickOpen}
                    style={{ opacity: "1" }}
                  >
                    <MdModeEdit />
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box component="div" className="media align-items-center">
                    <Box component="div" className="media-img-wrap  d-flex">
                      <Box
                        component="div"
                        className="avatar uploadedImg rounded-circle"
                      >
                        <Avatar
                          alt="User"
                          src={UserImage}
                          className="avatar-img rounded-circle"
                        />
                        <Typography
                          variant="caption"
                          className="edit-icon rounded-circle"
                          onClick={handleClickOpen}
                        >
                          <MdModeEdit />
                        </Typography>
                      </Box>
                    </Box>
                    <Box component="div" className="media-body">
                      <Box
                        component="div"
                        className="text-white text-capitalize display-6 mb-5 font-weight-400"
                      >
                        Dr. Khalid Al Kuwari
                      </Box>
                      <Box component="div" className="font-14 text-white">
                        <Box component="span" className="mr-5">
                          Assistant Professor
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box component="div" className="button-list">
                    <Link
                      to="/"
                      className={
                        styles.profileMailBtn +
                        " " +
                        "btn bg-h-light-blue-1 btn-wth-icon icon-wthot-bg btn-rounded text-white"
                      }
                    >
                      <Box component="span" className="btn-text">
                        Edit Profile
                      </Box>
                      <Box
                        component="span"
                        className={
                          styles.profileMailBtnIcon + " " + "icon-label"
                        }
                      >
                        <i className="icon">
                          <MdModeEdit />
                        </i>
                      </Box>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            minWidth: "300px"
          }
        }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Upload Image
        </DialogTitle>
        <DialogContent dividers>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button
            color="blue"
            type="submit"
            variant="contained"
            className={classes.button}
          >
            Upload &nbsp;
            <CloudUploadIcon className={classes.rightIcon} />
          </Button>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default UserProfileBanner;
