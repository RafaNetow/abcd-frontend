import { handleActions } from "redux-actions";
import RegisterModel from "./model";
import { RecordInitalState, RecordState } from "./state";

import { Type } from "./types";

export const RecordnReducer = handleActions<RecordState>(
  {
    [Type.ADD_RECORD_REQUEST]: (state, action) => {
      console.log("redux is working ");
      console.log("action", action);
      return { ...state, ...action.payload };
    },
    [Type.ADD_RECORD_FAILURE]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [Type.ADD_RECORD_SUCCESS]: (state, action) => {
      return { ...state, ...action.payload };
    }
  },
  RecordInitalState
);
