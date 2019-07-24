import rangerAPI from "../apis/Ranger";
import history from "../history";

import {
  FETCH_CLIENT_OPTIONS,
  FETCH_STAFF_OPTIONS,
  FETCH_JOB_STATUS_OPTIONS,
  FETCH_HOURS_TYPE_OPTIONS
} from "./types";

export const fetchClientOptions = () => async dispatch => {
  const response = await rangerAPI.get("/options/clients");

  dispatch({
    type: FETCH_CLIENT_OPTIONS,
    payload: response.data
  });
};

export const fetchStaffOptions = () => async dispatch => {
  const response = await rangerAPI.get("/options/staff");

  dispatch({
    type: FETCH_STAFF_OPTIONS,
    payload: response.data
  });
};

export const fetchJobStatusOptions = () => async dispatch => {
  const response = await rangerAPI.get("options/job_status");

  dispatch({
    type: FETCH_JOB_STATUS_OPTIONS,
    payload: response.data
  });
};

export const fetchHoursTypeOptions = () => async dispatch => {
  const response = await rangerAPI.get("options/hours_type");

  dispatch({
    type: FETCH_HOURS_TYPE_OPTIONS,
    payload: response.data
  });
};
