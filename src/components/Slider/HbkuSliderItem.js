import React from 'react';
import ReactDOM from 'react-dom';
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
    
  })
  const useStyles = makeStyles(theme => ({

    display3:{
      fontWeight:'bold',
    },
  }))

const HbkuSliderItem = (props) =>  {
    const classes = useStyles();
    return(
        <Box component="div">
          <Box component="div" className="auth-cover-img overlay-wrap" style={{ backgroundImage: "url(" + props.ImageURL + ")" }}>
            <Box component="div" className="auth-cover-info ">
                <Box component="div" className="auth-cover-content text-center w-xxl-75 w-sm-90 w-xs-100 pa-40">
                    <Typography  className={classes.display3 + " " + "display3 text-white mb-20"} variant="h3" component="h3"> {props.SlideTitle} </Typography>
                    <Typography component="p" className="text-white"> {props.SlideInfo} </Typography>
                </Box>
            </Box>
            <Box component="div" className="bg-overlay bg-trans-dark-50"></Box>
          </Box>
        </Box>
    )
}
export default withStyles(styles)(HbkuSliderItem)