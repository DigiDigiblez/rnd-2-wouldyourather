import { _getQuestions, _getUsers } from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export const fakeAuth = {
  isAuthenticated: false,

  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },

  unauthenticate(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
