import "./PercentageBar.css";

import PropTypes from "prop-types";
import React from "react";
import { Progress } from "reactstrap";

import Container from "../Container";

const PercentageBar = ({ percentage }) => {
  const baseclass = "percentage-bar";

  PercentageBar.propTypes = {
    percentage: PropTypes.number.isRequired
  };

  return (
    <Container className={baseclass}>
      {/* eslint-disable-next-line no-restricted-globals */}
      <Progress animated value={isNaN(percentage) ? 0 : percentage}>
        {/* eslint-disable-next-line no-restricted-globals */}
        {isNaN(percentage) ? 0 : percentage}%
      </Progress>
    </Container>
  );
};

export default PercentageBar;
