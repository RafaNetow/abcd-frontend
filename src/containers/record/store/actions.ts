import { createAction } from "redux-actions";
import { Type } from "./types";
// import thunk from "redux-thunk";
import { Dispatch } from "redux";
import RecordModel from "./model";

export const addRecordRequest = createAction(Type.ADD_RECORD_REQUEST);
export const addRecordSuccess = createAction(Type.ADD_RECORD_SUCCESS);
export const addRecordFailure = createAction(Type.ADD_RECORD_FAILURE);

export function addRecord(
  newRegister: RecordModel
): (dispatch: Dispatch) => Promise<void> {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(addRecordRequest(newRegister));
    } catch (error) {
      console.log(error);
    }
  };
}
