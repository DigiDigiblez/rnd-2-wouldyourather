import "./QuestionGroup.css";

import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import Container from "../../atoms/Container";
import Question from "../../molecules/Question/Question";

const QuestionGroup = ({
  setOne: unansweredQuestions,
  setTwo: answeredQuestions
}) => {
  const baseclass = "question-group";

  QuestionGroup.propTypes = {
    setOne: PropTypes.objectOf(PropTypes.any).isRequired,
    setTwo: PropTypes.objectOf(PropTypes.any).isRequired
  };

  const [plansCategory, setPlansCategory] = useState("Unanswered Questions");

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

      {Object.values(answeredQuestions).length === 0 ? (
        <>
          <span>
            Showing{" "}
            <span className="emphasis">
              {Object.values(unansweredQuestions).length}
            </span>{" "}
            of{" "}
            <span className="emphasis">
              {Object.values(unansweredQuestions).length}
            </span>{" "}
            questions
          </span>
          <button
            className="primary_cta refresh"
            onClick={
              // eslint-disable-next-line no-restricted-globals
              () => location.reload()
            }
          >
            Refresh questions
          </button>
        </>
      ) : plansCategory === "Unanswered Questions" ? (
        <span>
          Showing{" "}
          <span className="emphasis">
            {Object.values(unansweredQuestions).length}
          </span>{" "}
          of{" "}
          <span className="emphasis">
            {Object.values(unansweredQuestions).length}
          </span>{" "}
          unanswered questions
        </span>
      ) : (
        <span>
          Showing{" "}
          <span className="emphasis">
            {Object.values(answeredQuestions).length}
          </span>{" "}
          of{" "}
          <span className="emphasis">
            {Object.values(answeredQuestions).length}
          </span>{" "}
          answered questions
        </span>
      )}

      {plansCategory === "Answered Questions"
        ? Object.values(unansweredQuestions).map(question => (
            <Question
              key={question.id}
              data={question}
              avatar={userAvatars[question.author]}
            />
          ))
        : Object.values(answeredQuestions).map(question => (
            <Question
              key={question.id}
              data={question}
              avatar={userAvatars[question.author]}
            />
          ))}
    </Container>
  );
};
export default QuestionGroup;
