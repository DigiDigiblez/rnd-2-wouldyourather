export const ROUTES = {
  // Publicly accessible
  HOME: "/",
  SIGN_IN: "/sign-in",

  // Authenticated users only
  NEW_QUESTION: "/add",
  POLL: "/questions/:question_id",
  LEADER_BOARD: "/leaderboard",
  SIGN_OUT: "/sign-out"
};
