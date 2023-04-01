import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./types";

const initialState = {
  data: null,
  error: null,
}

export const dataReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return{
        ...state,
        data: action.payload,
        error: null,
      }
    case FETCH_DATA_FAILURE:
      return{
        ...state,
        data: null,
        error: action.payload,
      }
    default:
      return state;
  }
}

