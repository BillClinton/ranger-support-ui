import rangerAPI from "../apis/Ranger";
import history from "../history";

import { FETCH_CLIENTS, CREATE_CLIENT } from "./types";

export const fetchClients = () => async dispatch => {
  const response = await rangerAPI.get("/clients");

  dispatch({
    type: FETCH_CLIENTS,
    payload: response.data
  });
};

export const createClient = formValues => async (dispatch, getState) => {
  const response = await rangerAPI.post("/clients/create", { ...formValues });

  dispatch({
    type: CREATE_CLIENT,
    payload: response.data
  });
  history.push("/");
};
