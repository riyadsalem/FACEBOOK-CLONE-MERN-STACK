import CounterReducer from "./counterReducer";
import LoggingReducer from "./loggedReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: CounterReducer,
  logged: LoggingReducer,
});

export default reducers;
