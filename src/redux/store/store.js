import { applyMiddleware, compose, createStore } from "redux";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunkMiddleware, logger))
);

export const persistor = persistStore(store);
