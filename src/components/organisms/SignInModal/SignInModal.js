import "./SignInModal.css";

import React, { useEffect, useState } from "react";

import Container from "../../atoms/Container";
import Logo from "../../../logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fakeAuth } from "../../../utils/api";
import { setAuthedUser } from "../../../redux/actions/authedUser";
import { useHistory } from "react-router";

const SignInModal = () => {
  const baseclass = "sign-in-modal";

  const dispatch = useDispatch();
  const [users] = useState(useSelector(state => state.users));

  const handleSignIn = event => {
    const { value: id } = event.target;

    fakeAuth.authenticate(() => {
      dispatch(setAuthedUser(id));
    });
  };

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
          <select name="user-select" id="user-select" onChange={handleSignIn}>
            {Object.values(users).map(user => (
              <option value={user.id}>{user.name}</option>
            ))}
          </select>
        </div>
      </section>
    </Container>
  );
};
export default SignInModal;
