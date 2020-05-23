import "./Question.css";

import React, { useState } from "react";

import Container from "../../atoms/Container";
import Separator from "../../atoms/Separator/Separator";

const Question = () => {
  const baseclass = "question";

  const [plansCategory, setPlansCategory] = useState("Unanswered Questions");

  return (
    <Container className={baseclass}>
      <section className={`${baseclass}__header`}>
        <h1>Lionel Lion asks:</h1>
      </section>
      <section className={`${baseclass}__content`}>
        <div className={`${baseclass}__content-image`}>
          <img
            src="https://image.flaticon.com/icons/svg/616/616412.svg"
            alt="Lionel Lion"
            width={80}
            height={80}
          />
        </div>
        <div className={`${baseclass}__content-separator`}>
          <Separator direction="vertical" />
        </div>
        <div className={`${baseclass}__content-details`}>
          <h2>Would you rather ...</h2>
          <p>
            This is my story, this is my song! This is my story, this is my
            song!
          </p>
          <button className="primary_cta">View poll</button>
        </div>
      </section>
    </Container>
  );
};
export default Question;
