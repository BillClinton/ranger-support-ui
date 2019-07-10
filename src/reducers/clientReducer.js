import mapKeys from "lodash/mapKeys";
import { FETCH_CLIENTS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return { ...state, ...mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
