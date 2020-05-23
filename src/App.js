import "./App.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./components/pages/Routes/Routes";
// import * as BooksAPI from './BooksAPI'

const BooksApp = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default BooksApp;
