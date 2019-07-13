import rangerAPI from "../apis/Ranger";
import history from "../history";

import {
  FETCH_CLIENTS,
  FETCH_CLIENT,
  CREATE_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT
} from "./types";

export const fetchClients = () => async dispatch => {
  const response = await rangerAPI.get("/clients");

  dispatch({
    type: FETCH_CLIENTS,
    payload: response.data
  });
};

export const fetchClient = id => async dispatch => {
  const response = await rangerAPI.get(`/clients/view/${id}`);

  console.log(response.data);
  dispatch({
    type: FETCH_CLIENT,
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

export const editClient = (id, formValues) => async dispatch => {
  const response = await rangerAPI.post("/clients/update/", { ...formValues });

  dispatch({
    type: EDIT_CLIENT,
    payload: response.data
  });

  history.push(`/clients/view/${id}`);
};
