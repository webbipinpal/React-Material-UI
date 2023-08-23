import Box from "@material-ui/core/Box"
import React, { Fragment } from "react"
import Button from "../../components/CustomButtons/Button"

const SocialButton = ({ color, BtnText, children }) => {
  return (
    <Fragment>
      <Button
        fullWidth
        color={color}
        className="btn btn-primary btn-block btn-wth-icon"
      >
        <Box className="icon-label">
          {/* <i className={props.BtnIcon} /> */}
          {children}
        </Box>
        <Box component="span" className="btn-text">
          {BtnText}
        </Box>
      </Button>
    </Fragment>
  )
}
export default SocialButton
