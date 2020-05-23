import "./QuestionBuilder.css";

import React from "react";
import Container from "../../atoms/Container";
import Separator from "../../atoms/Separator/Separator";

const QuestionBuilder = () => {
  const baseclass = "question-builder";

  return (
    <Container className={baseclass}>
      <section className={`${baseclass}__header`}>
        <h1>Create New Question</h1>
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
