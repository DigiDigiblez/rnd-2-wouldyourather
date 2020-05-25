import "./Poll.css";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";

import Container from "../../atoms/Container";
import QuestionPoll from "../../molecules/QuestionPoll/QuestionPoll";
import Chrome from "../../templates/Chrome";

const Poll = () => {
  const baseclass = "poll";

  const history = useHistory();

  const [pollId] = useState(
    history.location.pathname.replace("/questions/", "")
  );

  const [isPollIdValid] = useState(
    useSelector(store => Boolean(store.questions[pollId]))
  );

  return isPollIdValid ? (
    <Container className={baseclass}>
      <Chrome>
        <section className={`${baseclass}__contents`}>
          <QuestionPoll />
        </section>
      </Chrome>
    </Container>
  ) : (
    <Redirect to="/404" />
  );
};

export default Poll;
