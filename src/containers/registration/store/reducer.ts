import { handleActions } from "redux-actions";
import RegisterModel from "./model";
import { RegistrationInitalState, RegistrationState } from "./state";

import { Type } from "./types";

export const RegistrationReducer = handleActions<RegistrationState>(
  {
    [Type.ADD_REGISTRATION_REQUEST]: (state, action) => {
      console.log("redux is working ");
      return { ...state, ...action.payload };
    },
    [Type.ADD_REGISTRATION_FAILURE]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [Type.ADD_REGISTRATION_SUCCESS]: (state, action) => {
      return { ...state, ...action.payload };
    }
  },
  RegistrationInitalState
);
