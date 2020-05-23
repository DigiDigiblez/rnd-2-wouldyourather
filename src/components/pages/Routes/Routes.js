import React from "react";
import { Redirect } from "react-router";
import { Switch } from "react-router-dom";

import PublicRoute from "../../molecules/PublicRoute";
import List from "../../organisms/List";
import Search from "../../organisms/Search";
import Page404 from "../Page404";
import { ROUTES } from "./route";

const Routes = () => (
  <Switch>
    <PublicRoute exact path={ROUTES.LIST} component={List} />
    <PublicRoute exact path={ROUTES.SEARCH} component={Search} />
    <PublicRoute exact path="/404" component={Page404} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
