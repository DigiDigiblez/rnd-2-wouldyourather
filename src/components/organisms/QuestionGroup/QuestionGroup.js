import "./QuestionGroup.css";

import PropTypes from "prop-types";
import React, { useState } from "react";

import Container from "../../atoms/Container";
import Question from "../../molecules/Question/Question";
import { useSelector } from "react-redux";

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
          value="Answered Questions"
          onClick={() => setPlansCategory("Answered Leader")}
        >
          Answered Questions
        </button>
      </span>
      {plansCategory === "Unanswered Questions"
        ? Object.values(unansweredQuestions).map(question => (
            <Question data={question} avatar={userAvatars[question.author]} />
          ))
        : Object.values(answeredQuestions).map(question => (
            <Question data={question} avatar={userAvatars[question.author]} />
          ))}
    </Container>
  );
};
export default QuestionGroup;
