import "./Poll.css";

import React from "react";

import Container from "../../atoms/Container";
import QuestionPoll from "../../molecules/QuestionPoll/QuestionPoll";
import Chrome from "../../templates/Chrome";

const Poll = () => {
  const baseclass = "poll";

  return (
    <Container className={baseclass}>
      <Chrome>
        <section className={`${baseclass}__contents`}>
          <QuestionPoll />
        </section>
      </Chrome>
    </Container>
  );
};

export default Poll;
