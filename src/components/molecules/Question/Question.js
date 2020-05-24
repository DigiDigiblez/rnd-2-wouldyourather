import "./Question.css";

import React, { useState } from "react";

import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Container from "../../atoms/Container";
import Separator from "../../atoms/Separator/Separator";
import truncateAnswer from "../../../helpers/truncateAnswer";
import { useSelector } from "react-redux";

const Question = ({
  data: { id, author, optionOne, optionTwo, timestamp },
  avatar
}) => {
  const baseclass = "question";

  Question.propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    avatar: PropTypes.string.isRequired
  };

  const [authedUser] = useState(useSelector(store => store.authedUser));

  return (
    <Container className={baseclass}>
      <section className={`${baseclass}__header`}>
        <h1>{author} asks:</h1>
      </section>
      <section className={`${baseclass}__content`}>
        <div className={`${baseclass}__content-image`}>
          <img src={avatar} alt={author} width={80} height={80} />
        </div>
        <div className={`${baseclass}__content-separator`}>
          <Separator direction="vertical" />
        </div>
        <div className={`${baseclass}__content-details`}>
          <h2>Would you rather</h2>
          <p>...{truncateAnswer(optionOne.text, 3)}...</p>
          <NavLink to={authedUser ? `questions/${id}` : "/sign-in"}>
            <button className="primary_cta">View poll</button>
          </NavLink>
        </div>
      </section>
    </Container>
  );
};

export default Question;
