import "./Home.css";

import React, { useState } from "react";
import { useSelector } from "react-redux";

import Container from "../../atoms/Container";
import QuestionGroup from "../../organisms/QuestionGroup/QuestionGroup";
import Chrome from "../../templates/Chrome";

const Home = () => {
  const baseclass = "home";

  const [unansweredQuestions] = useState(
    useSelector(state =>
      Object.values(state.questions).filter(
        question =>
          !question.optionOne.votes.length && !question.optionTwo.votes.length
      )
    )
  );

  const [answeredQuestions] = useState(
    useSelector(state =>
      Object.values(state.questions).filter(
        question =>
          question.optionOne.votes.length || question.optionTwo.votes.length
      )
    )
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
