import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { FiX } from "react-icons/fi";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    minWidth: "240px",
    maxWidth: "450px",
    width: "70%",
    margin: "0 auto",
    boxShadow: "none"
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#fff",
    border: "2px solid #2394D6",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4)
  },
  closeBtn: {
    top: "0",
    right: "0",
    position: "absolute",
    fontSize: "22px",
    color: "#27a6de",
    zIndex: "9999",
    lineHeight: "0",
    cursor: "pointer"
  }
}));

const ServerModal = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <i onClick={handleClose} className={classes.closeBtn}>
            <FiX />
          </i>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </Fragment>
  );
};
export default ServerModal;
