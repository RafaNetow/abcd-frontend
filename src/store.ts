import { Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import RootState from "./state";

const initialState = {} as RootState;
/*
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);*/
//

export default createStore(rootReducer /*enhancer*/) as Store<RootState>;
