import { handleActions } from "redux-actions";
import TodoModel from "../models";
import Types from "./actionTypes";
import RootState from "../state";

const initialState: TodoModel[] = [
  {
    name: "Do homework",
    completed: true
  },
  {
    name: "Do something 1",
    completed: true
  },
  {
    name: "Do something 2",
    completed: true
  },
  {
    name: "Do something 3",
    completed: true
  },
  {
    name: "Do something 4",
    completed: true
  },
  {
    name: "Do something 5",
    completed: true
  }
];

export default handleActions<TodoModel[], TodoModel>(
  {
    [Types.ADD_TODO]: (state, acion) => {
      return [...state, acion.payload];
    }
    // [Types.ADD_TODO]: (state, action) => {}
  },
  initialState
);
