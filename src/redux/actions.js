import {
  FETCH_STAFFS_PENDING,
  FETCH_STAFFS_ERROR,
  FETCH_STAFFS_SUCCESS,
} from "./contants/staffs";
import {
  FETCH_DEPARTMENTS_PENDING,
  FETCH_DEPARTMENTS_ERROR,
  FETCH_DEPARTMENTS_SUCCESS,
} from "./contants/departments";
import {
  FETCH_SALARY_ERROR,
  FETCH_SALARY_PENDING,
  FETCH_SALARY_SUCCESS,
} from "./contants/salary";
import { baseUrl } from "./baseUrl";

//STAFFS
export const fetchStaffsPending = () => {
  return {
    type: FETCH_STAFFS_PENDING,
  };
};
export const fetchStaffsSuccess = (staffs) => {
  return {
    type: FETCH_STAFFS_SUCCESS,
    payload: staffs,
  };
};

export const fetchStaffsError = (error) => {
  return {
    type: FETCH_STAFFS_ERROR,
    payload: error,
  };
};

export const fetchStaffs = () => async (dispatch) => {
  dispatch(fetchStaffsPending());

  return fetch(baseUrl +"staffs")
    .then((res) => res.json())
    .then(
      (res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchStaffsSuccess(res));
        return res;
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .catch((error) => {
      dispatch(fetchStaffsError(error));
    });
};

export const postStaff =
  (
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime,
    salary,
    image,
  ) =>
  (dispatch) => {
    const newStaff = {
      name: name,
      doB: doB,
      salaryScale: salaryScale,
      startDate: startDate,
      departmentId: departmentId,
      annualLeave: annualLeave,
      overTime: overTime,
      salary: salary,
      image: image,
    };
    return fetch(baseUrl +"staffs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStaff),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res;
      })
      .catch((error) => {
        dispatch(fetchStaffsError(error));
      });
  };
export const putStaffs =
  (
    id,
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime,
    image,
    salary
  ) =>
  (dispatch) => {
    const editStaff = {
      name: name,
      doB: doB,
      salaryScale: salaryScale,
      startDate: startDate,
      departmentId: departmentId,
      annualLeave: annualLeave,
      overTime: overTime,
      salary: salary,
      image: image,
    };
    return fetch(baseUrl +"staffs/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editStaff),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res;
      })
      .catch((error) => {
        dispatch(fetchStaffsError(error));
      });
  };

export const DeleteStaff = (id) => (dispatch) => {
  return fetch(baseUrl +"staffs/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(fetchStaffs()))
    .catch((error) => {
      console.log("Delete Staff ", error.message);
      alert("Delete staff not be done\nError: " + error.message);
    });
};
export const fetchStaffsWithId = (id) => async (dispatch) => {
  dispatch(fetchStaffsPending());

  return fetch(baseUrl +"staffs/" + id)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      dispatch(fetchStaffsSuccess(res));
      return res;
    })
    .catch((error) => {
      dispatch(fetchStaffsError(error));
    });
};
//DEPARTMENTS
export const fetchDepartmentsSuccess = (departments) => {
  return {
    type: FETCH_DEPARTMENTS_SUCCESS,
    payload: departments,
  };
};

export const fetchDepartmentsError = (error) => {
  return {
    type: FETCH_DEPARTMENTS_ERROR,
    payload: error.message,
  };
};

export const fetchDepartmentsPending = () => {
  return {
    type: FETCH_DEPARTMENTS_PENDING,
  };
};

export const fetchDepartments = () => (dispatch) => {
  dispatch(fetchDepartmentsPending());

  return fetch(baseUrl + "departments")
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      dispatch(fetchDepartmentsSuccess(res));
      return res;
    })
    .catch((error) => {
      dispatch(fetchDepartmentsError(error));
    });
};
//SALARY
export const fetchSalaryError = (error) => {
  return {
    type: FETCH_SALARY_ERROR,
    payload: error,
  };
};

export const fetchSalarySuccess = (salary) => {
  return {
    type: FETCH_SALARY_SUCCESS,
    payload: salary,
  };
};

export const fetchSalaryPending = () => {
  return {
    type: FETCH_SALARY_PENDING,
  };
};

export const fetchSalary = () => (dispatch) => {
  dispatch(fetchSalaryPending());
  return fetch(baseUrl + "staffsSalary")
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      dispatch(fetchSalarySuccess(res));
      return res;
    })
    .catch((error) => {
      dispatch(fetchSalaryError(error));
    });
};
