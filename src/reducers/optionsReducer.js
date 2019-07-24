import {
  FETCH_STAFF_OPTIONS,
  FETCH_CLIENT_OPTIONS,
  FETCH_JOB_STATUS_OPTIONS,
  FETCH_HOURS_TYPE_OPTIONS
} from "../actions/types";

const initialState = {
  staff: {},
  clients: {},
  jobStatus: {},
  hoursType: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STAFF_OPTIONS:
      return Object.assign({}, state, {
        staff: action.payload
      });
    case FETCH_CLIENT_OPTIONS:
      return Object.assign({}, state, {
        clients: action.payload
      });
    case FETCH_JOB_STATUS_OPTIONS:
      return Object.assign({}, state, {
        jobStatus: action.payload
      });
    case FETCH_HOURS_TYPE_OPTIONS:
      return Object.assign({}, state, {
        hoursType: action.payload
      });
    default:
      return state;
  }
};
