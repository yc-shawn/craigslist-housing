import { combineReducers } from 'redux';

// reducers
import ExampleReducer from './example.reducer';
import ListReducer from './list.reducer';
import DetailReducer from './detail.reducer';

const rootReducer = combineReducers({
  list: ListReducer,
  detail: DetailReducer
});

export default rootReducer;
