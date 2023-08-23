import React, { Fragment } from "react"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import SocialButton from "./MediaMasterBtn"
export const Facebook = () => {
  return (
    <Fragment>
      <SocialButton
        color="blue"
        BtnText="Login with facebook"
        BtnIcon="FaFacebookF"
      >
        <FaFacebookF />
      </SocialButton>
    </Fragment>
  )
}

export const Twitter = () => {
  return (
    <Fragment>
      <SocialButton
        color="blue"
        BtnText="Login with twitter"
        BtnIcon=" FaTwitter"
      >
        <FaTwitter />
      </SocialButton>
    </Fragment>
  )
}
