import "./SignIn.css";

import React from "react";

import Container from "../../atoms/Container";
import Chrome from "../../templates/Chrome";
import SignInModal from "../../organisms/SignInModal/SignInModal";

const SignIn = () => {
  const baseclass = "sign-in";

  return (
    <Container className={baseclass}>
      <Chrome>
        <section className={`${baseclass}__contents`}>
          <SignInModal />
        </section>
      </Chrome>
    </Container>
  );
};

export default SignIn;
