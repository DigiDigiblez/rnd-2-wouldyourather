import "./Header.css";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { ReactComponent as Hamburger } from "../../../icons/hamburger.svg";
import { ReactComponent as Inbox } from "../../../icons/inbox.svg";
import { ReactComponent as Logo } from "../../../icons/logo_full.svg";
import { ROUTES } from "../../pages/Routes/route";

const Header = () => {
  const baseclass = "header";

  const history = useHistory();

  const currentRoute = history.location.pathname;

  const [authedUser] = useState(useSelector(store => store.authedUser));

  const [userFirstName] = useState(
    useSelector(
      store => authedUser && store.users[authedUser].name.split(" ")[0]
    )
  );

  const [userAvatars] = useState(
    useSelector(store => {
      return {
        johndoe: store.users.johndoe && store.users.johndoe.avatarURL,
        sarahedo: store.users.sarahedo && store.users.sarahedo.avatarURL,
        tylermcginnis:
          store.users.tylermcginnis && store.users.tylermcginnis.avatarURL
      };
    })
  );

  return (
    <header className={baseclass}>
      <div className={`${baseclass}__navlinks`}>
        <Logo className={`${baseclass}_logo`} />
        <NavLink
          to={ROUTES.HOME}
          className={`${baseclass}__navlinks-link ${currentRoute ===
            ROUTES.HOME && "active-link"}`}
        >
          Home
        </NavLink>
        {authedUser && (
          <NavLink
            to={ROUTES.NEW_QUESTION}
            className={`${baseclass}__navlinks-link 
            ${currentRoute === ROUTES.NEW_QUESTION && "active-link"}`}
          >
            New question
          </NavLink>
        )}
        {authedUser && (
          <NavLink
            to={ROUTES.LEADER_BOARD}
            className={`${baseclass}__navlinks-link ${currentRoute ===
              ROUTES.LEADER_BOARD && "active-link"}`}
          >
            Leaderboard
          </NavLink>
        )}
        {authedUser && userFirstName && (
          <span className={`${baseclass}__username`}>
            Hello,{" "}
            <img
              src={userAvatars[authedUser]}
              alt={authedUser}
              width={20}
              height={20}
            />
            {userFirstName}
          </span>
        )}
        <NavLink
          to={authedUser ? ROUTES.SIGN_OUT : ROUTES.SIGN_IN}
          className={`${baseclass}__navlinks-link ${currentRoute ===
            ROUTES.SIGN_IN && "active-link"}`}
        >
          {authedUser ? "Sign out" : "Sign in"}
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
