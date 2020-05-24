import "./Question.css";

import React, { useState } from "react";

import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Container from "../../atoms/Container";
import Separator from "../../atoms/Separator/Separator";
import truncateAnswer from "../../../helpers/truncateAnswer";

const Question = ({
  data: { id, author, optionOne, optionTwo, timestamp }
}) => {
  const baseclass = "question";

  Question.propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired
  };

  return (
    <Container className={baseclass}>
      <section className={`${baseclass}__header`}>
        <h1>{author} asks:</h1>
      </section>
      <section className={`${baseclass}__content`}>
        <div className={`${baseclass}__content-image`}>
          <img
            src="https://image.flaticon.com/icons/svg/616/616412.svg"
            alt="Lionel Lion"
            width={80}
            height={80}
          />
        </div>
        <div className={`${baseclass}__content-separator`}>
          <Separator direction="vertical" />
        </div>
        <div className={`${baseclass}__content-details`}>
          <h2>Would you rather</h2>
          <p>...{truncateAnswer(optionOne.text, 3)}...</p>
          <NavLink to={`questions/${id}`}>
            <button className="primary_cta">View poll</button>
          </NavLink>
        </div>
      </section>
    </Container>
  );
};

export default Question;
