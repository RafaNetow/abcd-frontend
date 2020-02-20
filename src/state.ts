import TodoModel from "./models";
import { RegistrationState } from "./containers/registration/store/state";
import { RecordState } from "./containers/record/store/state";

export default interface RootState {
  todos: TodoModel[];
  registration: RegistrationState;
  record: RecordState;
}
