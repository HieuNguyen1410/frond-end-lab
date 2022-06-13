import {
  FETCH_STAFFS_PENDING,
  FETCH_STAFFS_ERROR,
  FETCH_STAFFS_SUCCESS,
} from "./contants/staffs";

export const staffs = (
  state = {
    pending: false,
    staffs: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case FETCH_STAFFS_PENDING:
      return { ...state, pending: true };
    case FETCH_STAFFS_SUCCESS:
      return { ...state, pending: false, staffs: action.payload };
    case FETCH_STAFFS_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

