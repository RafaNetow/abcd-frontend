import TodoModel from "./models";
import RegisterModel from "./containers/registration/store/model";

export default interface RootState {
  todos: TodoModel[];
  ficha: RegisterModel;
}
