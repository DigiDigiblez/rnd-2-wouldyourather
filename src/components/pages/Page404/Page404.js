import "./Page404.css";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Container from "../../atoms/Container";
import Chrome from "../../templates/Chrome";
import { ROUTES } from "../Routes/route";
import { useSelector } from "react-redux";

const Page404 = () => {
  const baseclass = "page404";

  const [authedUser] = useState(useSelector(store => store.authedUser));

  return (
    <Container className={baseclass}>
      <Chrome>
        <section className={`${baseclass}__contents`}>
          404 page not found!
          <small className={`${baseclass}__help`}>
            {authedUser
              ? "This page doesn't seem to exist, let's return home."
              : "You may need to sign in to view this page."}
          </small>
          <NavLink to={authedUser ? ROUTES.HOME : ROUTES.SIGN_IN}>
            <button className={`${baseclass}__button`}>
              {authedUser ? "Go back home" : "Sign In"}
            </button>
          </NavLink>
        </section>
      </Chrome>
    </Container>
  );
};

export default Page404;
