import todosReducer from './containers/reducers'
import { combineReducers } from 'redux'
import RootState from './state'
import { RegistrationReducer } from './containers/registration/store/reducer'
import { RecordReducer } from './containers/record/store/reducer'
import { ReferenceReducer } from './containers/references/store/reducer'

export const rootReducer = combineReducers<RootState>({
  todos: todosReducer as any,
  registration: RegistrationReducer as any,
  record: RecordReducer,
  reference: ReferenceReducer
})
