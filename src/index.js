import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import { Provider } from "react-redux";
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

// const store = createStore(Reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
