import { hideLoading, showLoading } from "react-redux-loading";

import { _saveQuestion, _saveQuestionAnswer } from "../../utils/_DATA";
import { handleInitialData } from "./shared";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function handleSaveQuestionAnswer(answerObj) {
  return dispatch => {
    dispatch(showLoading());

    return _saveQuestionAnswer({
      ...answerObj
    })
      .then(() => dispatch(handleInitialData(answerObj.authedUser)))
      .then(() => dispatch(hideLoading()));
  };
}

export function handleSaveQuestion(data) {
  return dispatch => {
    dispatch(showLoading());

    return _saveQuestion({
      ...data,
      author: data.authedUser
    })
      .then(res => dispatch(handleInitialData(res.author)))
      .then(() => console.log("yay data!"))
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}
