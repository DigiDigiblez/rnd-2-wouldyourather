import "./QuestionBuilder.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../../atoms/Container";
import Separator from "../../atoms/Separator/Separator";
import { handleSaveQuestion } from "../../../redux/actions/questions";
import { useHistory } from "react-router";

const QuestionBuilder = () => {
  const baseclass = "question-builder";

  const dispatch = useDispatch();
  const history = useHistory();

  const [authedUser] = useState(useSelector(store => store.authedUser));
  const [optionOne, setOptionOne] = useState({ name: "optionOne", value: "" });
  const [optionTwo, setOptionTwo] = useState({ name: "optionTwo", value: "" });

  const [userAvatars] = useState(
    useSelector(state => {
      return {
        johndoe: state.users.johndoe.avatarURL,
        sarahedo: state.users.sarahedo.avatarURL,
        tylermcginnis: state.users.tylermcginnis.avatarURL
      };
    })
  );

  const handleOptionInput = event => {
    const { name, value } = event.target;

    if (name === "optionOne") setOptionOne({ name, value });
    if (name === "optionTwo") setOptionTwo({ name, value });
  };

  const handleQuestionSubmission = () => {
    const well = document.querySelector(".save-successful-well");
    well.classList.toggle("hidden");

    dispatch(
      handleSaveQuestion({
        optionOneText: optionOne.value,
        optionTwoText: optionTwo.value,
        authedUser
      })
    ).then(() => history.push("/"));
  };

  return (
    <Container className={baseclass}>
      <section className={`${baseclass}__header`}>
        <h1>Create New Question</h1>
        <img
          src={userAvatars[authedUser]}
          alt={authedUser}
          width={80}
          height={80}
        />
      </section>
      <section className={`${baseclass}__content`}>
        <p>Complete the question:</p>
        <h2>Would you rather ...</h2>
        <input
          onChange={handleOptionInput}
          type="text"
          placeholder="Enter option one text here"
          name={optionOne.name}
          defaultValue={optionOne.value}
        />
        <Separator direction="horizontal" text="OR" />
        <input
          onChange={handleOptionInput}
          type="text"
          placeholder="Enter option two text here"
          name={optionTwo.name}
          defaultValue={optionTwo.value}
        />
        <button
          onClick={handleQuestionSubmission}
          disabled={optionOne.value === "" || optionTwo.value === ""}
          className="primary_cta"
        >
          {optionOne.value === "" || optionTwo.value === ""
            ? "Finish to submit"
            : "Submit"}
        </button>
        <div className="well save-successful-well hidden">
          Question submitted successfully!
        </div>
      </section>
    </Container>
  );
};
export default QuestionBuilder;
