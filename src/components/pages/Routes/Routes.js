import React from "react";
import { Redirect } from "react-router";
import { Switch } from "react-router-dom";

import PrivateRoute from "../../molecules/PrivateRoute";
import PublicRoute from "../../molecules/PublicRoute";
import Home from "../Home";
import Leaderboard from "../Leaderboard";
import NewQuestion from "../NewQuestion";
import Page404 from "../Page404";
import Poll from "../Poll";
import SignIn from "../SignIn";
import SignOut from "../SignOut";
import { ROUTES } from "./route";

const Routes = () => (
  <Switch>
    <PublicRoute exact path={ROUTES.HOME} component={Home} />
    <PublicRoute exact path={ROUTES.SIGN_IN} component={SignIn} />
    <PrivateRoute exact path={ROUTES.NEW_QUESTION} component={NewQuestion} />
    <PrivateRoute exact path={ROUTES.POLL} component={Poll} />
    <PrivateRoute exact path={ROUTES.LEADER_BOARD} component={Leaderboard} />
    <PublicRoute exact path={ROUTES.SIGN_OUT} component={SignOut} />
    <PublicRoute exact path="/404" component={Page404} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
