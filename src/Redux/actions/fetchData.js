import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "../reducers/types";

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
})

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
})