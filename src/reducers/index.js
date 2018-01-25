import { combineReducers } from 'redux';

// reducers
import ExampleReducer from './example.reducer';
import ListReducer from './list.reducer';

const rootReducer = combineReducers({
  list: ListReducer
});

export default rootReducer;
