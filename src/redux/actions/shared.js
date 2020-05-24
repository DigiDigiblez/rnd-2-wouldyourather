import { hideLoading, showLoading } from "react-redux-loading";

import { getInitialData } from "../../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export function handleInitialData(userId) {
  return dispatch => {
    dispatch(showLoading());

    return getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser(userId || null));
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  };
}
