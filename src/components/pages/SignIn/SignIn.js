import "./SignIn.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setAuthedUser } from "../../../redux/actions/authedUser";
import Container from "../../atoms/Container";
import SignInModal from "../../organisms/SignInModal/SignInModal";
import Chrome from "../../templates/Chrome";

const SignIn = () => {
  const baseclass = "sign-in";

  const dispatch = useDispatch();

  // User is by default unauthenticated.
  useEffect(() => {
    dispatch(setAuthedUser(false));
  });

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
