import { handleActions } from "redux-actions";
import { HealthInitalState, HealthState } from "./state";

import { Type } from "./types";

export const HealthReducer = handleActions<HealthState>(
  {
    [Type.CHANGED_PASTDISEASE_INPUT]: (state, action) => {
      console.log("action", action);
      return { ...state, manager: action.payload };
    },
    [Type.CHANGED_SICKNESS_INPUT]: (state, action) => {
      console.log("action", action);
      return { ...state, ownhouse: action.payload };
    },
    [Type.CHANGED_TREATMENTS_INPUT]: (state, action) => {
      console.log("action", action);
      return { ...state, phone: action.payload };
    },
    [Type.CHANGED_VACCINE_INPUT]: (state, action) => {
      console.log("action", action);
      return { ...state, workplace: action.payload };
    }
  },
  HealthInitalState
);
