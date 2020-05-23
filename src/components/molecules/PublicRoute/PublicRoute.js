import PropTypes from "prop-types";
import * as React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({ exact, path, component }) => {
  PublicRoute.propTypes = {
    exact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    component: PropTypes.any.isRequired
  };

  return <Route exact={exact} path={path} component={component} />;
};

export default PublicRoute;
