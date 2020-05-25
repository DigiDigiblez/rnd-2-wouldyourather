import "./QuestionPoll.css";

import React, { useState } from "react";

import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../atoms/Container";
import Separator from "../../atoms/Separator/Separator";
import PercentageBar from "../../atoms/PercentageBar/PercentageBar";
import { handleSaveQuestionAnswer } from "../../../redux/actions/questions";

const QuestionPoll = () => {
  const baseclass = "question-poll";

  const history = useHistory();
  const dispatch = useDispatch();

  const [authedUser] = useState(useSelector(store => store.authedUser));

  const [pollId] = useState(
    history.location.pathname.replace("/questions/", "")
  );

  const [pollData] = useState(
    useSelector(store => {
      return {
        author: store.questions[pollId].author,
        optionOneText: store.questions[pollId].optionOne.text,
        optionTwoText: store.questions[pollId].optionTwo.text,
        optionOneVotes: store.questions[pollId].optionOne.votes.length,
        optionTwoVotes: store.questions[pollId].optionTwo.votes.length,
        totalVotes:
          store.questions[pollId].optionOne.votes.length +
          store.questions[pollId].optionTwo.votes.length
      };
    })
  );

  const [userAvatars] = useState(
    useSelector(state => {
      return {
        johndoe: state.users.johndoe.avatarURL,
        sarahedo: state.users.sarahedo.avatarURL,
        tylermcginnis: state.users.tylermcginnis.avatarURL
      };
    })
  );

  const [pollAnswer, setPollAnswer] = useState(null);

  const handlePollSubmission = poll => {
    setPollAnswer(poll.answer);

    dispatch(handleSaveQuestionAnswer(poll));
  };

  return !pollAnswer ? (
    <Container className={baseclass}>
      <section className={`${baseclass}__header`}>
        <h1>{pollData.author} asks:</h1>
      </section>
      <section className={`${baseclass}__content`}>
        <div className={`${baseclass}__content-image`}>
          <img
            src={userAvatars[pollData.author]}
            alt={pollData.author}
            width={80}
            height={80}
          />
        </div>
        <div className={`${baseclass}__content-separator`}>
          <Separator direction="vertical" />
        </div>
        <div className={`${baseclass}__content-details`}>
          <h2>Would you rather ...</h2>
          <button
            onClick={() =>
              handlePollSubmission({
                answer: "optionOne",
                authedUser,
                qid: pollId
              })
            }
            value="optionOne"
            className="secondary_cta"
          >
            {pollData.optionOneText}
          </button>
          <button
            onClick={() =>
              handlePollSubmission({
                answer: "optionTwo",
                authedUser,
                qid: pollId
              })
            }
            value="optionTwo"
            className="secondary_cta"
          >
            {pollData.optionTwoText}
          </button>
        </div>
      </section>
    </Container>
  ) : (
    <Container className={baseclass}>
      <section className={`${baseclass}__header`}>
        <h1>{pollData.author} answered:</h1>
      </section>
      <section className={`${baseclass}__content`}>
        <div className={`${baseclass}__content-image`}>
          <img
            src={userAvatars[pollData.author]}
            alt={pollData.author}
            width={80}
            height={80}
          />
        </div>
        <div className={`${baseclass}__content-separator`}>
          <Separator direction="vertical" />
        </div>
        <div className={`${baseclass}__content-details`}>
          <h2>Results:</h2>
          <div className={`${baseclass}__content-details-poll-option`}>
            <h4>{pollData.optionOneText}</h4>
            <PercentageBar
              percentage={parseInt(
                String((pollData.optionOneVotes / pollData.totalVotes) * 100),
                10
              )}
            />
            <span>
              {pollData.optionOneVotes} out of {pollData.totalVotes} votes
            </span>
            {pollAnswer === "optionOne" && (
              <img
                src={userAvatars[pollData.author]}
                alt={pollData.author}
                width={80}
                height={80}
              />
            )}
          </div>
          <div className={`${baseclass}__content-details-poll-option`}>
            <h4>{pollData.optionTwoText}</h4>
            <PercentageBar
              percentage={parseInt(
                String((pollData.optionTwoVotes / pollData.totalVotes) * 100),
                10
              )}
            />
            <span>
              {pollData.optionTwoVotes} out of {pollData.totalVotes} votes
            </span>
            {pollAnswer === "optionTwo" && (
              <img
                src={userAvatars[pollData.author]}
                alt={pollData.author}
                width={80}
                height={80}
              />
            )}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default QuestionPoll;
