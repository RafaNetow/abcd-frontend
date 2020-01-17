import { handleActions } from "redux-actions";
import { RegistrationInitalState, RegistrationState } from "./state";

import { Type } from "./types";

export default handleActions<RegistrationState>(
  {
    [Type.ADD_REGISTRATION_REQUEST]: (state, action) => {
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
