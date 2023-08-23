import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Box } from "@material-ui/core";
import ContainerStyle from "../GridContainer/GridContainer";
import { makeStyles, withStyles } from "@material-ui/core/styles";
const useStylesCont = makeStyles(theme => ContainerStyle);

export const AlertAll = () => {
  const classes = useStylesCont();
  return (
    <Fragment>
      <Box className={classes.container}>
        <br /> <br /> <br /> <br />
        <h2>HBKU alerts</h2>
        <div className="alert bg-h-dark-blue-2 text-white" role="alert">
          This is a alert—check it out!
        </div>
        <div className="alert bg-h-very-dark-blue-3" role="alert">
          This is a alert—check it out!
        </div>
        <div className="alert bg-h-blue-mass-2" role="alert">
          This is a alert—check it out!
        </div>
        <div className="alert bg-h-blue-4" role="alert">
          This is a alert—check it out!
        </div>
        <div className="alert bg-h-light-blue-4" role="alert">
          This is a alert—check it out!
        </div>
        <div className="alert bg-h-light-blue-m-4" role="alert">
          This is alert—check it out!
        </div>
        <div className="alert bg-h-gray-1" role="alert">
          This is a alert—check it out!
        </div>
        <div className="alert bg-h-light-black-3" role="alert">
          This is a alert—check it out!
        </div>
        <br /> <br /> <br />
        <br />
        <h2>Normal alerts</h2>
        <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
        <div className="alert alert-secondary" role="alert">
          This is a secondary alert—check it out!
        </div>
        <div className="alert alert-success" role="alert">
          This is a success alert—check it out!
        </div>
        <div className="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
        <div className="alert alert-warning" role="alert">
          This is a warning alert—check it out!
        </div>
        <div className="alert alert-info" role="alert">
          This is a info alert—check it out!
        </div>
        <div className="alert alert-light" role="alert">
          This is a light alert—check it out!
        </div>
        <div className="alert alert-dark" role="alert">
          This is a dark alert—check it out!
        </div>
      </Box>
    </Fragment>
  );
};
