import { makeStyles, withStyles } from "@material-ui/core/styles"

import React, { Fragment } from "react"
import Button from "../../components/CustomButtons/Button"

const styles = theme => ({
  section: {
    marginTop: theme.spacing(3),
  },
})

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const SimpleButton = props => {
  const classes = useStyles()
  return (
    <Fragment>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color={props.color}
        className={classes.submit}
      >
        {props.BtnText}
      </Button>
    </Fragment>
  )
}
export default withStyles(styles)(SimpleButton)
