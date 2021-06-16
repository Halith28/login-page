/**
 * @author Kameshwaran Murugan
 * @email kamesh@qdmplatforms.com
 * @create date 2020-11-27
 * @modify date 2021-02-03
 * @desc Different routes and their corresponding component are defined here.
 */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import { Routes } from "./routes";

import { Home, NotFound } from "./../screens";
import Login from "../screens/login";
import Signup from "../screens/signup";

const RouterApp = (props) => {
  return (
    <Router>
      <Switch>
        {/* form component list */}
        <Route exact path={Routes.home} component={Home} />
        <Route exact path={Routes.login} component={Login} />
        <Route exact path={Routes.signup} component={Signup} />

        {/* For unknow/non-defined path */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
