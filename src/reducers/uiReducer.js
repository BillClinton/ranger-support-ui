import { TOGGLE_NAVIGATION } from "../actions/types";

const initialState = {
  nav: {
    expanded: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return Object.assign({}, state, {
        nav: action.payload
      });
    default:
      return state;
  }
};
