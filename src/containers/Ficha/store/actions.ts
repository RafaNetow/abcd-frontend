import { createAction } from "redux-actions";
import { Type } from "./types";

export const addFichaRequest = createAction(Type.ADD_FICHA_REQUEST);
export const addFichaSueccess = createAction(Type.ADD_FICHA_SUCCESS);
export const addFichaFailure = createAction(Type.ADD_FICHA_FAILURE);
