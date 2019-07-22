import mapKeys from "lodash/mapKeys";
import omit from "lodash/omit";
import {
  FETCH_CLIENTS,
  FETCH_CLIENT,
  CREATE_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_CLIENT:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_CLIENTS:
      return { ...state, ...mapKeys(action.payload, "id") };
    case FETCH_CLIENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_CLIENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CLIENT:
      return omit(state, action.payload);
    default:
      return state;
  }
};
