import { createAction } from "redux-actions";
import { Type } from "./types";
// import thunk from "redux-thunk";
import { Dispatch } from "redux";

export const changePastDiseaseInput = createAction(
  Type.CHANGED_PASTDISEASE_INPUT
);
export const changeSicknesseInput = createAction(Type.CHANGED_SICKNESS_INPUT);
export const changeTreatmentsInput = createAction(
  Type.CHANGED_TREATMENTS_INPUT
);
export const changeVaccineInput = createAction(Type.CHANGED_VACCINE_INPUT);

export function changePastDisease(
  payload: String
): (dispatch: Dispatch) => Promise<void> {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(changePastDiseaseInput(payload));
    } catch (error) {
      console.log(error);
    }
  };
}

export function changeSicknesse(
  payload: String
): (dispatch: Dispatch) => Promise<void> {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(changeSicknesseInput(payload));
    } catch (error) {
      console.log(error);
    }
  };
}

export function changeTreatments(
  payload: String
): (dispatch: Dispatch) => Promise<void> {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(changeTreatmentsInput(payload));
    } catch (error) {
      console.log(error);
    }
  };
}

export function changeVaccine(
  payload: String
): (dispatch: Dispatch) => Promise<void> {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(changeVaccineInput(payload));
    } catch (error) {
      console.log(error);
    }
  };
}
