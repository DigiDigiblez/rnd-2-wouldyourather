import "./QuestionGroup.css";

import React, { useState } from "react";
import Container from "../../atoms/Container";
import Question from "../../molecules/Question/Question";

const QuestionGroup = () => {
  const baseclass = "question-group";

  const [plansCategory, setPlansCategory] = useState("Unanswered Questions");

  return (
    <Container className={baseclass}>
      <span className={`${baseclass}__contents-btns`}>
        <button
          className={`secondary_cta ${plansCategory ===
            "Unanswered Questions" && "active-button"}`}
          value="Unanswered Questions"
          onClick={() => setPlansCategory("Unanswered Questions")}
        >
          Unanswered Questions
        </button>
        <button
          className={`secondary_cta ${plansCategory === "Answered Leader" &&
            "active-button"}`}
          value="Answered Leader"
          onClick={() => setPlansCategory("Answered Leader")}
        >
          Answered Leader
        </button>
      </span>
      {plansCategory === "Unanswered Questions" ? <Question /> : <Question />}
    </Container>
  );
};
export default QuestionGroup;
