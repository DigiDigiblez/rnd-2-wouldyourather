import "./Page404.css";

import React from "react";
import { NavLink } from "react-router-dom";

import Container from "../../atoms/Container";
import Chrome from "../../templates/Chrome";
import { ROUTES } from "../Routes/route";

const Page404 = () => {
  const baseclass = "page404";

  return (
    <Container className={baseclass}>
      <Chrome>
        <section className={`${baseclass}__contents`}>
          404 page not found!
          <NavLink to={ROUTES.HOME}>
            <button className={`${baseclass}__button`}>
              Let&apos;s go home
            </button>
          </NavLink>
        </section>
      </Chrome>
    </Container>
  );
};

export default Page404;
