import "./App.css";

import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./components/pages/Routes/Routes";
import { handleInitialData } from "./redux/actions/shared";
import { persistor, store } from "./redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
