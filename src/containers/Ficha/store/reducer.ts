import { handleActions } from "redux-actions";
import { FichaInitalState, FichaState } from "./state";

import { Type } from "./types";

export default handleActions<FichaState>(
  {
    [Type.ADD_FICHA_REQUEST]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [Type.ADD_FICHA_FAILURE]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [Type.ADD_FICHA_SUCCESS]: (state, action) => {
      return { ...state, ...action.payload };
    }
  },
  FichaInitalState
);
