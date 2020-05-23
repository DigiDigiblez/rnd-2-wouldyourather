import "./Header.css";

import React from "react";

import { NavLink, useHistory } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../../icons/hamburger.svg";
import { ReactComponent as Inbox } from "../../../icons/inbox.svg";
import { ReactComponent as Logo } from "../../../icons/logo.svg";
import { ROUTES } from "../../pages/Routes/route";

const Header = () => {
  const baseclass = "header";

  const history = useHistory();

  const currentRoute = history.location.pathname;

  console.log(currentRoute);

  return (
    <header className={baseclass}>
      <Logo className={`${baseclass}_logo`} />
      <div className={`${baseclass}__navlinks`}>
        <NavLink
          to={ROUTES.HOME}
          className={`${baseclass}__navlinks-link ${currentRoute ===
            ROUTES.HOME && "active-link"}`}
        >
          Home
        </NavLink>
        <NavLink
          to={ROUTES.NEW_QUESTION}
          className={`${baseclass}__navlinks-link 
            ${currentRoute === ROUTES.NEW_QUESTION && "active-link"}`}
        >
          New question
        </NavLink>
        <NavLink
          to={ROUTES.LEADER_BOARD}
          className={`${baseclass}__navlinks-link ${currentRoute ===
            ROUTES.LEADER_BOARD && "active-link"}`}
        >
          Leaderboard
        </NavLink>
        <span className={`${baseclass}__username`}>Carl Bowen</span>
        <NavLink
          to={ROUTES.LOGOUT}
          className={`${baseclass}__navlinks-link ${currentRoute ===
            ROUTES.LOGOUT && "active-link"}`}
        >
          Logout
        </NavLink>
      </div>

      <div className={`${baseclass}__extras`}>
        <Inbox
          onClick={() => alert("That's a nice bit of wishful thinking ;D")}
          className={`${baseclass}__extras_inbox`}
        />
        <Hamburger className={`${baseclass}__extras_hamburger`} />
      </div>
    </header>
  );
};

export default Header;
