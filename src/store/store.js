import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import rootModule from "../modules/rootModule";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootModule);

export const store =
  process.env.NODE_ENV === "development"
    ? createStore(
        persistedReducer, //rootModule
        composeWithDevTools(applyMiddleware(reduxThunk, logger))
      )
    : createStore(persistedReducer);

export const persistor = persistStore(store);
