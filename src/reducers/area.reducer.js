import { SWITCH_AREA} from '../actions/area.action'

var INITIAL_STATE = {
  areas: [
    { abbr: 'sfc', name: 'San Francisco' },
    { abbr: 'sby', name: 'South Bay' },
    { abbr: 'eby', name: 'East Bay' },
    { abbr: 'nby', name: 'North Bay' },
    { abbr: 'scz', name: 'Santa Cruz' }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_AREA:
      return { ...state, currentArea: action.payload };
    default:
      return state;
  }
};
