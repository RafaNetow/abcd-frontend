import TodoModel from "./models";
import { RegistrationState } from "./containers/registration/store/state";
import { RecordState } from "./containers/record/store/state";
import { ReferenceState } from "./containers/references/store/state";
import { HealthState } from "./containers/healthData/store/state";

export default interface RootState {
  todos: TodoModel[];
  registration: RegistrationState;
  record: RecordState;
  reference: ReferenceState;
  health: HealthState;
}
