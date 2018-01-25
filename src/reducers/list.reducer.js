import { GET_LIST } from '../actions/list.action'

var INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST:
      return action.payload
    default:
      return state;
  }
};
