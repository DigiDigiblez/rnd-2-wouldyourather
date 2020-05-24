import "./QuestionGroup.css";

import PropTypes from "prop-types";
import React, { useState } from "react";

import Container from "../../atoms/Container";
import Question from "../../molecules/Question/Question";

const QuestionGroup = ({
  setOne: unansweredQuestions,
  setTwo: answeredQuestions
}) => {
  const baseclass = "question-group";

  QuestionGroup.propTypes = {
    setOne: PropTypes.arrayOf(PropTypes.object).isRequired,
    setTwo: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  const [plansCategory, setPlansCategory] = useState("Unanswered Questions");

  return (
    <Container className={baseclass}>
      <span className={`${baseclass}__contents-btns`}>
        <button
          className={`secondary_cta group-left ${plansCategory ===
            "Unanswered Questions" && "active-button"}`}
          value="Unanswered Questions"
          onClick={() => setPlansCategory("Unanswered Questions")}
        >
          Unanswered Questions
        </button>
        <button
          className={`secondary_cta group-right ${plansCategory ===
            "Answered Leader" && "active-button"}`}
          value="Answered Leader"
          onClick={() => setPlansCategory("Answered Leader")}
        >
          Answered Leader
        </button>
      </span>
      {plansCategory === "Unanswered Questions"
        ? Object.values(unansweredQuestions).map(question => (
            <Question data={question} />
          ))
        : Object.values(answeredQuestions).map(question => (
            <Question data={question} />
          ))}
    </Container>
  );
};
export default QuestionGroup;
