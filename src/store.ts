import { Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import RootState from "./state";

const initialState = {} as RootState;

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
) as Store<RootState>;
