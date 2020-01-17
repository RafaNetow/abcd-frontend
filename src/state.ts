import TodoModel from "./models";
import { RegistrationState } from "./containers/registration/store/state";
import { fichaSate, FichaState } from "./containers/ficha/store/state";

export default interface RootState {
  todos: TodoModel[];
  registration: RegistrationState;
  ficha: FichaState;
}
