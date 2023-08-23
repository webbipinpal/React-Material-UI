import React, { Component, Fragment } from "react"
import Box from "@material-ui/core/Box"
import UserImage from "./images/user.jpg"
import { Link } from "gatsby"
import { FiChevronDown } from "react-icons/fi"
import { getUser } from "../../utils"
import { useDispatch, useSelector } from "react-redux"
import onClickOutside from "react-onclickoutside"
import * as actionCommon from "../../store/actions/commonActions"
import Avatar from "@material-ui/core/Avatar"
const Avator = props => {
  const dispatch = useDispatch()
  Avator.handleClickOutside = () => {
    dispatch(actionCommon.userSettingPop(false))
    //dispatch(actionCommon.userNotificationsPop(true))
    console.log("Im outside clieck")
  }
  const { firstName, lastName } = getUser()
  return (
    <Fragment>
      <Link
        className="nav-link dropdown-toggle no-caret"
        to="#"
        role="button"
        onClick={props.ProfileMediaClickFun}
      >
        <Box component="div" className="media">
          <Box component="div" className="media-img-wrap">
            <Box component="div" className="avatar">
              <Avatar
                alt="User"
                src={UserImage}
                className="avatar-img rounded-circle"
              />
            </Box>
            <Box
              component="span"
              className="badge badge-success badge-indicator"
            ></Box>
          </Box>
          <Box component="div" className="media-body">
            <Box component="span">
              {firstName} {" " + lastName}
              <i className="">
                <FiChevronDown />
              </i>
            </Box>
          </Box>
        </Box>
      </Link>
    </Fragment>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Avator.handleClickOutside,
}
export default onClickOutside(Avator, clickOutsideConfig)
