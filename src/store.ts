import { Store, createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import RootState from "./state";

const initialState = {} as RootState;

export default createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as Store<RootState>;
