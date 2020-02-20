import { createAction } from "redux-actions";
import { Type } from "./types";
// import thunk from "redux-thunk";
import { Dispatch } from "redux";

export const changeMangerInput = createAction(Type.CHANGED_MANAGER_INPUT);
export const changeOwnhouseInput = createAction(Type.CHANGED_OWNHOUSE_INPUT);
export const changePhoneInput = createAction(Type.CHANGED_PHONE_INPUT);
export const changeWorkPlaceInput = createAction(Type.CHANGED_WORKPLACE_INPUT);

export function changeManger(
  payload: String
): (dispatch: Dispatch) => Promise<void> {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(changeMangerInput(payload));
    } catch (error) {
      console.log(error);
    }
  };
}

export function changeOwnhouse(
  payload: String
): (dispatch: Dispatch) => Promise<void> {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(changeOwnhouseInput(payload));
    } catch (error) {
      console.log(error);
    }
  };
}

export function changePhone(
  payload: String
): (dispatch: Dispatch) => Promise<void> {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(changePhoneInput(payload));
    } catch (error) {
      console.log(error);
    }
  };
}

export function changeWorkPlace(
  payload: String
): (dispatch: Dispatch) => Promise<void> {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(changeWorkPlaceInput(payload));
    } catch (error) {
      console.log(error);
    }
  };
}
