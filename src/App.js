import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js";
import "bootstrap";
import App from "./layouts/Desktop";
import { BrowserRouter } from "react-router-dom";
import { compose, lifecycle } from "recompose";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./store/store";
import * as serviceWorker from "./serviceWorker";
import Loading from "./components/Loading";
import * as appOperations from "./modules/app/appOperations";

const Application = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
const enhance = compose(
  lifecycle({
    componentDidMount() {
      store.dispatch(appOperations.initUser());
    }
  })
);

const HOCApp = enhance(Application);
ReactDOM.render(<HOCApp />, document.getElementById("root"));

serviceWorker.unregister();
