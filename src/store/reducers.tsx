import { combineReducers } from "redux";
import task from "./task";
import { State as TaskState } from "./task";

export interface ReduxState {
  task: TaskState;
}

export default combineReducers ({
  task
});
