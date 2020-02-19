import todosReducer from "./containers/reducers";
import { combineReducers } from "redux";
import RootState from './state';
import { RegistrationReducer } from './containers/registration/store/reducer';


export const rootReducer = combineReducers<RootState>({
  todos: todosReducer as any,
  ficha: RegistrationReducer as any,
});
