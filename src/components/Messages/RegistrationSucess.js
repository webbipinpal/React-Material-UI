import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import { FiCheckCircle } from "react-icons/fi"
import Typography from "@material-ui/core/Typography"
import Button from "../CustomButtons/Button"
const useStyles = makeStyles(theme => ({
  display4: {
    fontSize: "2.5rem",
    fontWeight: 500,
    color: "#4eae49",
  },
  icon: {
    color: "#4eae49",
  },
  ThanksText: {
    fontSize: "18px",
    fontWeight: "500",
  },
}))
const RegistrationSucess = () => {
  const styles = useStyles()
  return (
    <Fragment>
      <Paper className="hbku-sec-wrapper mt-30 pa-50 text-center">
        <Typography
          variant="h2"
          component="h2"
          className={styles.icon + " " + "h1"}
        >
          <FiCheckCircle />
        </Typography>
        <Typography
          className={styles.display4 + " " + "mb-30 ThanksHeading"}
          component="h1"
        >
          Thank You!
        </Typography>
        <p className={styles.ThanksText}>
          Your Submission is received and please click on login button and
          SignIn
        </p>
        <Button color="blue">Login</Button>
      </Paper>
    </Fragment>
  )
}
export default RegistrationSucess
