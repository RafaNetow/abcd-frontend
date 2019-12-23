import { createAction } from "redux-actions";
import {Type} from "./types";

export const addRegistrationRequest = createAction(Type.ADD_REGISTRATION_REQUEST);
export const addRegistrationSueccess = createAction(Type.ADD_REGISTRATION_SUCCESS);
export const addRegistrationFailure = createAction(Type.ADD_REGISTRATION_FAILURE);
