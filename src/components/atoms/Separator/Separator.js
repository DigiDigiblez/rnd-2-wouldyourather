import "./Separator.css";

import cls from "classnames";
import PropTypes from "prop-types";
import React from "react";

import Container from "../Container";

const Separator = ({ direction, text }) => {
  const baseclass = "separator";

  Separator.propTypes = {
    direction: PropTypes.string,
    text: PropTypes.string
  };

  Separator.defaultProps = {
    direction: "horizontal",
    text: null
  };

  const classes = cls(baseclass, {
    [`${baseclass}--${direction}`]: direction
  });

  return text ? (
    <Container className={classes}>
      <h3>
        <span>OR</span>
      </h3>
    </Container>
  ) : (
    <Container className={classes}>
      <hr />
    </Container>
  );
};

export default Separator;
