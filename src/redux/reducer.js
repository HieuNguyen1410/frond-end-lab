import {combineReducers} from "redux"
import { staffs } from "./staffsReducer";
import {departments} from "./departmentsReducer"
import {salary} from"./salaryReducer"


const rootReducer = combineReducers({
    staffs:staffs,
    departments:departments,
    salary:salary,
})

export default rootReducer;