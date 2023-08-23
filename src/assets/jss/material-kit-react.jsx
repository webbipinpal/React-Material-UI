/*!

 =========================================================
 * Material Kit React - v1.7.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2018 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
const container = {
  ...conatinerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
};

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const primaryColor = "#066CC1";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";

// HBKU Colors
const darkBlueColor = "#011F3C";
const darkBlueColor1 = "#344c63";
const darkBlueColor2 = "#67798a";
const darkBlueColor3 = "#99a5b1";
const darkBlueColor4 = "#ccd2d8";

const vDarkBlueColor = "#001121";
const vDarkBlueColor1 = "#33414d";
const vDarkBlueColor2 = "#66707a";
const vDarkBlueColor3 = "#99a0a6";
const vDarkBlueColor4 = "#cccfd3";

const blueMassColor = "#093C7E";
const blueMassColor1 = "#3a6398";
const blueMassColor2 = "#6b8ab2";
const blueMassColor3 = "#9db1cb";
const blueMassColor4 = "#ced8e5";

const blueColor = "#066CC1";
const blueColor1 = "#3889cd";
const blueColor2 = "#6aa7da";
const blueColor3 = "#9bc4e6";
const blueColor4 = "#cde2f3";

const lightBlueColor = "#2394D6";
const lightBlueColor1 = "#4fa9de";
const lightBlueColor2 = "#7bbfe6";
const lightBlueColor3 = "#a7d4ef";
const lightBlueColor4 = "#d3eaf7";

const lightBlueMColor = "#27A6DE";
const lightBlueMColor1 = "#52b8e5";
const lightBlueMColor2 = "#7dcaeb";
const lightBlueMColor3 = "#a9dbf2";
const lightBlueMColor4 = "#d4edf8";

const graysColor = "#EFEFEF";
const graysColor1 = "#f2f2f2";
const graysColor2 = "#f5f5f5";
const graysColor3 = "#f9f9f9";
const graysColor4 = "#fcfcfc";

const lightGrayColor = "#F4F3F3";

const lightBlackColor = "#333333";
const lightBlackColor1 = "#5c5c5c";
const lightBlackColor2 = "#858585";
const lightBlackColor3 = "#adadad";
const lightBlackColor4 = "#d6d6d6";

const whiteColor = "#ffffff";

const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};
const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
const successBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
};
const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
const dangerBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
};
const roseBoxShadow = {
  boxShadow:
    "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
};

const warningCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)",
  ...warningBoxShadow
};
const successCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)",
  ...successBoxShadow
};
const dangerCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)",
  ...dangerBoxShadow
};
const infoCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)",
  ...infoBoxShadow
};
const primaryCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
  ...primaryBoxShadow
};
const roseCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)",
  ...roseBoxShadow
};
const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...defaultFont
};

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};

const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

const cardTitle = {
  ...title,
  marginTop: ".625rem"
};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};

export {
  //variables
  drawerWidth,
  transition,
  container,
  conatinerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardLink,
  cardSubtitle,
  darkBlueColor,
  vDarkBlueColor,
  blueMassColor,
  blueColor,
  lightBlueColor,
  lightBlueMColor,
  graysColor,
  lightGrayColor,
  lightBlackColor,
  whiteColor
};
