import rangerAPI from "../apis/Ranger";
import { TOGGLE_NAVIGATION } from "./types";

export * from "./ClientActions";
export * from "./JobActions";
export * from "./OptionActions";

export const toggleNavigation = () => (dispatch, getState) => {
  const { expanded } = getState().ui.nav;

  dispatch({
    type: TOGGLE_NAVIGATION,
    payload: { expanded: !expanded }
  });
};
