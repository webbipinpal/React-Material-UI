import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./sass/style.scss";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import ForgotPassword from "./pages/forgot-password";
import RecoverAccount from "./pages/reset-password";
import Dashboard from "./pages/dashboard";
import UserProfile from "./pages/user-profile";
import Article from "./pages/article";
import NotFoundPage from "./pages/404";
import Home from "./pages/Home";
import Services from "./pages/services";
import Resources from "./pages/resources";
import ThankYou from "./pages/thank-you";
import Error from "./pages/error";
const MainIndex = () => {
  return (
    <Fragment>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="/reset-password" exact component={RecoverAccount} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/user" exact component={UserProfile} />
        <Route path="/article" exact component={Article} />
        <Route path="/404" exact component={NotFoundPage} />
        <Route path="/services" exact component={Services} />
        <Route path="/resources" exact component={Resources} />
        <Route path="/thank-you" exact component={ThankYou} />
        <Route path="/error" exact component={Error} />
      </Router>
    </Fragment>
  );
};

ReactDOM.render(<MainIndex />, document.getElementById("root"));
