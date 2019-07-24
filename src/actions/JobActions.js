import rangerAPI from "../apis/Ranger";
import history from "../history";

import {
  SEARCH_JOBS,
  FETCH_JOBS,
  FETCH_JOB,
  CREATE_JOB,
  EDIT_JOB,
  DELETE_JOB
} from "./types";

export const searchJobs = term => async dispatch => {
  const response = await rangerAPI.get(`/jobs/search/${term}`);

  dispatch({
    type: SEARCH_JOBS,
    payload: response.data
  });
};

export const fetchJobs = () => async dispatch => {
  const response = await rangerAPI.get("/jobs");

  dispatch({
    type: FETCH_JOBS,
    payload: response.data
  });
};

export const fetchJob = id => async dispatch => {
  const response = await rangerAPI.get(`/jobs/view/${id}`);

  console.log(response.data);
  dispatch({
    type: FETCH_JOB,
    payload: response.data
  });
};

export const createJob = formValues => async (dispatch, getState) => {
  const response = await rangerAPI.post("/jobs/create", { ...formValues });

  dispatch({
    type: CREATE_JOB,
    payload: response.data
  });
  history.push("/jobs");
};

export const editJob = (id, formValues) => async dispatch => {
  const response = await rangerAPI.post("/jobs/update/", { ...formValues });

  dispatch({
    type: EDIT_JOB,
    payload: response.data
  });

  history.push(`/jobs/view/${id}`);
};

export const deleteJob = id => async dispatch => {
  await rangerAPI.post("/jobs/delete", { id });

  dispatch({
    type: DELETE_JOB,
    payload: id
  });
  history.push("/jobs");
};
