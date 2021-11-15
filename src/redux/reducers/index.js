import { combineReducers } from "redux";
import { listReducer, SelectedUserReducer } from "./reducer";

const reducers = combineReducers({
  users: listReducer,
  selectedUser: SelectedUserReducer,
});
export default reducers;
