import "./SignInModal.css";

import React, { useState } from "react";

import Container from "../../atoms/Container";
import Logo from "../../../logo.svg";

const SignInModal = () => {
  const baseclass = "sign-in-modal";

  return (
    <Container className={baseclass}>
      <section className={`${baseclass}__header`}>
        <h1>
          Welcome to the{" "}
          <b>
            <u>Would You Rather</u>
          </b>{" "}
          app!
        </h1>
        <p>Please sign in to play</p>
      </section>
      <section className={`${baseclass}__content`}>
        <div className={`${baseclass}__content-image`}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={`${baseclass}__content-details`}>
          <h2>Sign In</h2>
          <select name="user-select" id="user-select">
            <option value="Red">👩 Jane Doe</option>
            <option value="Blue">👨 Delvin Doors</option>
            <option value="Green">👩 Julia Robertson</option>
          </select>
        </div>
      </section>
    </Container>
  );
};
export default SignInModal;
