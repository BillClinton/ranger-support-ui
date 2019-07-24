import mapKeys from "lodash/mapKeys";
import omit from "lodash/omit";
import {
  FETCH_JOBS,
  FETCH_JOB,
  CREATE_JOB,
  EDIT_JOB,
  DELETE_JOB
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_JOB:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_JOBS:
      return { ...state, ...mapKeys(action.payload, "id") };
    case FETCH_JOB:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_JOB:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_JOB:
      return omit(state, action.payload);
    default:
      return state;
  }
};
