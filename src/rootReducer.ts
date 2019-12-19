import todosReducer from "./containers/reducers";
import { combineReducers } from "redux";
import RootState from "./state";

export default combineReducers<RootState>({
  todos: todosReducer
});
