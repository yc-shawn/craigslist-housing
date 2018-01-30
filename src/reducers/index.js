import { combineReducers } from 'redux';

// reducers
import ExampleReducer from './example.reducer';
import AreaReducer from './area.reducer';
import ListReducer from './list.reducer';
import DetailReducer from './detail.reducer';

const rootReducer = combineReducers({
  area: AreaReducer,
  list: ListReducer,
  detail: DetailReducer
});

export default rootReducer;
