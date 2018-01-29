import { GET_DETAIL} from '../actions/detail.action'

var INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return action.payload
    default:
      return state;
  }
};
