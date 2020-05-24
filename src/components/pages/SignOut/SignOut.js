import "./SignOut.css";

import React from "react";

import Container from "../../atoms/Container";
import SignOutModal from "../../organisms/SignOutModal/SignOutModal";
import Chrome from "../../templates/Chrome";

const SignOut = () => {
  const baseclass = "sign-out";

  return (
    <Container className={baseclass}>
      <Chrome>
        <section className={`${baseclass}__contents`}>
          <SignOutModal />
        </section>
      </Chrome>
    </Container>
  );
};

export default SignOut;
