import "./NewQuestion.css";

import React from "react";

import Container from "../../atoms/Container";
import Chrome from "../../templates/Chrome";
import QuestionBuilder from "../../organisms/QuestionBuilder/QuestionBuilder";

const NewQuestion = () => {
  const baseclass = "new-question";

  return (
    <Container className={baseclass}>
      <Chrome>
        <section className={`${baseclass}__contents`}>
          <QuestionBuilder />
        </section>
      </Chrome>
    </Container>
  );
};

export default NewQuestion;
