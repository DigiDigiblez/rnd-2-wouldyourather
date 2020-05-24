import "./QuestionBuilder.css";

import React, { useState } from "react";
import { useSelector } from "react-redux";

import Container from "../../atoms/Container";
import Separator from "../../atoms/Separator/Separator";

const QuestionBuilder = () => {
  const baseclass = "question-builder";

  const [authedUser] = useState(useSelector(store => store.authedUser));

  const [userAvatars] = useState(
    useSelector(state => {
      return {
        johndoe: state.users.johndoe.avatarURL,
        sarahedo: state.users.sarahedo.avatarURL,
        tylermcginnis: state.users.tylermcginnis.avatarURL
      };
    })
  );

  return (
    <Container className={baseclass}>
      <section className={`${baseclass}__header`}>
        <h1>Create New Question</h1>
        <img
          src={userAvatars[authedUser]}
          alt={authedUser}
          width={80}
          height={80}
        />
      </section>
      <section className={`${baseclass}__content`}>
        <p>Complete the question:</p>
        <h2>Would you rather ...</h2>
        <input type="text" placeholder="Enter option one text here" />
        <Separator direction="horizontal" text="OR" />
        <input type="text" placeholder="Enter option two text here" />
        <button className="primary_cta">Submit</button>
      </section>
    </Container>
  );
};
export default QuestionBuilder;
