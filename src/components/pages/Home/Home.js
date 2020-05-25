import "./Home.css";

import React, { useState } from "react";
import { useSelector } from "react-redux";

import Container from "../../atoms/Container";
import QuestionGroup from "../../organisms/QuestionGroup/QuestionGroup";
import Chrome from "../../templates/Chrome";

const Home = () => {
  const baseclass = "home";

  const [authedUser] = useState(useSelector(store => store.authedUser));

  const [unansweredQuestions] = useState(
    useSelector(state => {
      if (authedUser) {
        return Object.values(state.questions)
          .filter(
            question =>
              !question.optionOne.votes.includes(authedUser) &&
              !question.optionTwo.votes.includes(authedUser)
          )
          .reverse();
      }

      return state.questions;
    })
  );

  const [answeredQuestions] = useState(
    useSelector(state => {
      if (authedUser) {
        return Object.values(state.questions)
          .filter(
            question =>
              question.optionOne.votes.includes(authedUser) ||
              question.optionTwo.votes.includes(authedUser)
          )
          .reverse();
      }

      return state.questions;
    })
  );

  return (
    <Container className={baseclass}>
      <Chrome>
        <section className={`${baseclass}__contents`}>
          <QuestionGroup
            setOne={unansweredQuestions}
            setTwo={answeredQuestions}
          />
        </section>
      </Chrome>
    </Container>
  );
};

export default Home;
