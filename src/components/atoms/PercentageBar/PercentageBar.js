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
      <Progress animated value={percentage}>
        {percentage}%
      </Progress>
    </Container>
  );
};

export default PercentageBar;
