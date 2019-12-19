import { createAction } from "redux-actions";
import Types from "./actionTypes";

export const loadTodos = createAction(Types.LOAD_TODOS);
export const addTodo = createAction(Types.ADD_TODO);
