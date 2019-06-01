import { todos } from './todos';
import { visibilityFilter } from './visibilityFilter';
import { combineReducers } from '../native-js-redux/combineReducers';

export const rootReducer = combineReducers({
  todos,
  visibilityFilter
});
