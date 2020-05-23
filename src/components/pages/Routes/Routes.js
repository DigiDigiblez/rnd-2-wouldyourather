import React from "react";
import { Redirect } from "react-router";
import { Switch } from "react-router-dom";

import PublicRoute from "../../molecules/PublicRoute";
import List from "../../organisms/List";
import Search from "../../organisms/Search";
import Page404 from "../Page404";
import { ROUTES } from "./route";
import Home from "../Home";
import NewQuestion from "../NewQuestion";
import Leaderboard from "../Leaderboard";
import SignIn from "../SignIn";

const Routes = () => (
  <Switch>
    <PublicRoute exact path={ROUTES.HOME} component={Home} />
    <PublicRoute exact path={ROUTES.NEW_QUESTION} component={NewQuestion} />
    <PublicRoute exact path={ROUTES.LEADER_BOARD} component={Leaderboard} />
    <PublicRoute exact path={ROUTES.SIGN_IN} component={SignIn} />
    <PublicRoute exact path={ROUTES.LIST} component={List} />
    <PublicRoute exact path={ROUTES.LIST} component={List} />
    <PublicRoute exact path={ROUTES.SEARCH} component={Search} />
    <PublicRoute exact path="/404" component={Page404} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
