import rangerAPI from "../apis/Ranger";
import history from "../history";

import {
  SEARCH_CLIENTS,
  FETCH_CLIENTS,
  FETCH_CLIENT,
  CREATE_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT
} from "./types";

export const searchClients = term => async dispatch => {
  const response = await rangerAPI.get(`/clients/search/${term}`);

  dispatch({
    type: SEARCH_CLIENTS,
    payload: response.data
  });
};

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
  history.push("/clients");
};

export const editClient = (id, formValues) => async dispatch => {
  const response = await rangerAPI.post("/clients/update/", { ...formValues });

  dispatch({
    type: EDIT_CLIENT,
    payload: response.data
  });

  history.push(`/clients/view/${id}`);
};

export const deleteClient = id => async dispatch => {
  await rangerAPI.post("/clients/delete", { id });

  dispatch({
    type: DELETE_CLIENT,
    payload: id
  });
  history.push("/clients");
};
