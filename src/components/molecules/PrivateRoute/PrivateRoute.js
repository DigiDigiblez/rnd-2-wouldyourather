import PropTypes from "prop-types";
import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ exact, path, component }) => {
  PrivateRoute.propTypes = {
    exact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    component: PropTypes.any.isRequired
  };

  const [authedUser] = useState(useSelector(store => store.authedUser));

  return authedUser ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to="/404" />
  );
};

export default PrivateRoute;
