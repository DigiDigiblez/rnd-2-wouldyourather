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
  const [, setIsAuthed] = useState(Boolean(authedUser));
  const [hasSelectedOption, setHasSelectedOption] = useState(false);

  const handleSignIn = event => {
    const { value: id } = event.target;

    setHasSelectedOption(true);

    fakeAuth.authenticate(() => {
      setIsAuthed(true);
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
        <p>Please sign in to play and view content</p>
      </section>
      <section className={`${baseclass}__content`}>
        <div className={`${baseclass}__content-image`}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={`${baseclass}__content-details`}>
          <h2>Sign In</h2>
          <select
            name="user-select"
            id="user-select"
            defaultValue=""
            onChange={handleSignIn}
          >
            <option value="" disabled>
              Select a user
            </option>
            {Object.values(users).map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button
            disabled={!hasSelectedOption}
            onClick={() => history.push("/")}
            className="primary_cta"
          >
            {!hasSelectedOption ? "Select a user to continue" : "Continue"}
          </button>
        </div>
      </section>
    </Container>
  );
};
export default SignInModal;
