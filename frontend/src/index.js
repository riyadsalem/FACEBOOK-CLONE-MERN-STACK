import React from "react";
import ReactDOM from "react-dom/";
import "./index.css";
import "./styles/icons/icons.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Action
const increment = () => {
  return {
    type: "INC",
    payload: 2,
  };
};

const Decrement = () => {
  return {
    type: "DEC",
    payload: 1,
  };
};

// Reducer
const counter = (statue = 0, action) => {
  switch (action.type) {
    case "INC":
      return statue + action.payload;
    case "DEC":
      return statue + action.payload;
    default:
      return statue;
  }
};

// Store
const store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

// Desbach
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(Decrement());

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
