import {
  FETCH_SALARY_ERROR,
  FETCH_SALARY_PENDING,
  FETCH_SALARY_SUCCESS,
} from "./contants/salary";

export const salary = (
  state = {
    pending: false,
    salary: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case FETCH_SALARY_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SALARY_SUCCESS:
      return {
        ...state,
        pending: false,
        salary: action.payload,
        error: null,
      };
    case FETCH_SALARY_ERROR:
      return {
        ...state,
        pending: false,
        salary: [],
        error: action.error,
      };

    default:
      return state;
  }
};
