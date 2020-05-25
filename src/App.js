import "./App.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Routes from "./components/pages/Routes/Routes";
import { handleInitialData } from "./redux/actions/shared";

const App = () => {
  const dispatch = useDispatch();

  const [authedUser] = useState(useSelector(store => store.authedUser));

  // Starting up the application (for the first time only).
  useEffect(() => {
    // Prevent user being mysteriously unauthenticated upon page reload...
    if (!authedUser) {
      dispatch(handleInitialData());
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
