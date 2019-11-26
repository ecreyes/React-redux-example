import { combineReducers } from 'redux';
import { visibilityFilter, todos } from './todo';

const rootReducer = combineReducers({
    visibilityFilter,
    todos
});

export default rootReducer;