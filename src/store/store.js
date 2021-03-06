import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/es/storage";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import rootModule from "../modules/rootModule";

const persistConfig = {
  key: "shop",
  storage,
  whitelist: ["cart"]
};

const persistedReducer = persistReducer(persistConfig, rootModule);

export const store =
  process.env.NODE_ENV === "development"
    ? createStore(
        persistedReducer, //rootModule
        composeWithDevTools(applyMiddleware(reduxThunk, logger))
      )
    : createStore(persistedReducer, applyMiddleware(reduxThunk));

export const persistor = persistStore(store);
