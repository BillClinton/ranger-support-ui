import rangerAPI from "../apis/Ranger";
import history from "../history";

import { FETCH_CLIENTS } from "./types";

export const fetchClients = () => async dispatch => {
  const response = await rangerAPI.get("/clients");

  dispatch({
    type: FETCH_CLIENTS,
    payload: response.data
  });
};
