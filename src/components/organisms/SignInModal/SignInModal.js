import "./SignInModal.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import Logo from "../../../logo.svg";
import { setAuthedUser } from "../../../redux/actions/authedUser";
import { fakeAuth } from "../../../utils/api";
import Container from "../../atoms/Container";

const SignInModal = () => {
  const baseclass = "sign-in-modal";

  const dispatch = useDispatch();
  const history = useHistory();

  const [users] = useState(useSelector(store => store.users));
  const [authedUser] = useState(useSelector(store => store.authedUser));
  const [isAuthed, setIsAuthed] = useState(Boolean(authedUser));

  const handleSignIn = event => {
    const { value: id } = event.target;

    fakeAuth.authenticate(() => {
      setIsAuthed(!authedUser);
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
