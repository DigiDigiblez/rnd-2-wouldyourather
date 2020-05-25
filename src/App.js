import "./App.css";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Routes from "./components/pages/Routes/Routes";
import { handleInitialData } from "./redux/actions/shared";

const App = () => {
  const dispatch = useDispatch();

  // Starting up the application (for the first time only).
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
