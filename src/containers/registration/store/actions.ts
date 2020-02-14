import { createAction } from "redux-actions";
import { Type } from "./types";
import thunk from "redux-thunk";
import { Dispatch } from "redux";
import RegisrationModel from "../store/model";

  export const addRegistrationRequest = createAction(
    Type.ADD_REGISTRATION_REQUEST
  );
  export const addRegistrationSueccess = createAction(
    Type.ADD_REGISTRATION_SUCCESS
  );
  export const addRegistrationFailure = createAction(
    Type.ADD_REGISTRATION_FAILURE
  );

  export function addRegistration(
    newRegister: RegisrationModel
  ): (dispatch: Dispatch) => Promise<void> {
    return async (dispatch: Dispatch) => {
      console.log(dispatch);
      console.log(newRegister);

      try {
        dispatch(addRegistrationRequest());
        console.log(dispatch);
        console.log("thunk is working");
      } catch (error) {
        console.log(error);
      }
    };


