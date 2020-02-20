import { handleActions } from "redux-actions";
import Refere from "./model";
import { ReferenceInitalState, ReferencedState } from "./state";

import { Type } from "./types";

export const RecordReducer = handleActions<ReferencedState>(
  {
    [Type.CHANGED_MANAGER_INPUT]: (state, action) => {
      console.log("action", action);
      return { ...state, manager: action.payload };
    },
    [Type.CHANGED_OWNHOUSE_INPUT]: (state, action) => {
      console.log("action", action);
      return { ...state, ownhouse: action.payload };
    },
    [Type.CHANGED_PHONE_INPUT]: (state, action) => {
      console.log("action", action);
      return { ...state, phone: action.payload };
    },
    [Type.CHANGED_WORKPLACE_INPUT]: (state, action) => {
      console.log("action", action);
      return { ...state, workplace: action.payload };
    }
  },
  ReferenceInitalState
);
