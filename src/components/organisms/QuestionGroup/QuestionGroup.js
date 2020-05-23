import "./QuestionGroup.css";

import React, { useState } from "react";
import Container from "../../atoms/Container";
import Separator from "../../atoms/Separator/Separator";
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
          className={`secondary_cta ${plansCategory === "Answered Question" &&
            "active-button"}`}
          value="Answered Question"
          onClick={() => setPlansCategory("Answered Question")}
        >
          Answered Question
        </button>
      </span>
      {plansCategory === "Unanswered Questions" ? (
        <section>
          <Question />
        </section>
      ) : (
        <span>Set B</span>
      )}
    </Container>
  );
};
export default QuestionGroup;
