import TodoModel from "./models";
import {RegistrationState} from "./containers/registration/store/state";

export default interface RootState {
  todos: TodoModel[];
  ficha: RegistrationState;
}
