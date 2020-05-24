import "./SignOutModal.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import Logo from "../../../logo.svg";
import { setAuthedUser } from "../../../redux/actions/authedUser";
import { fakeAuth } from "../../../utils/api";
import Container from "../../atoms/Container";

const SignOutModal = () => {
  const baseclass = "sign-out-modal";

  const dispatch = useDispatch();
  const history = useHistory();

  const [authedUser] = useState(useSelector(store => store.authedUser));
  const [, setIsAuthed] = useState(Boolean(authedUser));

  const handleSignOut = event => {
    const { value: id } = event.target;

    fakeAuth.unauthenticate(() => {
      setIsAuthed(false);
      dispatch(setAuthedUser(id));
      history.push("/");
    });
  };

  return (
    <Container className={baseclass}>
      <section className={`${baseclass}__header`}>
        <h1>
          Finished playing{" "}
          <b>
            <u>Would You Rather</u>
          </b>{" "}
          for today?
        </h1>
        <p>Please sign out to protect your account when done</p>
      </section>
      <section className={`${baseclass}__content`}>
        <div className={`${baseclass}__content-image`}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={`${baseclass}__content-details`}>
          <h2>Sign Out</h2>
          <button onClick={handleSignOut} className="primary_cta">
            Continue
          </button>
        </div>
      </section>
    </Container>
  );
};
export default SignOutModal;
