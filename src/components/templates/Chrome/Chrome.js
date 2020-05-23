import "./Chrome.css";

import PropTypes from "prop-types";
import React from "react";

import Container from "../../atoms/Container";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";

const Chrome = ({ children }) => {
  Chrome.propTypes = {
    children: PropTypes.objectOf(PropTypes.any).isRequired
  };

  const baseclass = "chrome";

  return (
    <Container className={baseclass}>
      <Header />
      <section className={`${baseclass}__contents`}>{children}</section>
      <Footer />
    </Container>
  );
};

export default Chrome;
