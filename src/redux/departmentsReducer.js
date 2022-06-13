import {
  FETCH_DEPARTMENTS_PENDING,
  FETCH_DEPARTMENTS_ERROR,
  FETCH_DEPARTMENTS_SUCCESS,
} from "./contants/departments";

export const departments = (
  state = {
    pending: false,
    departments: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case FETCH_DEPARTMENTS_PENDING:
      return { ...state, pending: true };

    case FETCH_DEPARTMENTS_ERROR:
      return { ...state, pending: false, departments: [], error: action.error };
    case FETCH_DEPARTMENTS_SUCCESS:
        return { ...state, pending: false, departments: action.payload, error:null}
    default:
      return state;
  }
};
