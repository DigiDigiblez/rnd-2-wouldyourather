import { combineReducers } from "redux";

import authedUser from "./authedUser";
import questions from "./questions";
import users from "./users";

const rootReducer = combineReducers({
  authedUser,
  questions,
  users
});

export default rootReducer;
