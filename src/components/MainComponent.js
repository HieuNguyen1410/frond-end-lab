import React, { Component } from "react";
import Header from "./HeaderComponent";
import ListUser from "./StaffListComponent";
import Footer from "./FooterComponent";
import { Switch, Route, withRouter } from "react-router-dom";
import StaffDetails from "./StaffDetails";
import { connect } from "react-redux";
import DepartmentDetails from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import "./css/staffcss.css";
import {
  fetchStaffs,
  fetchDepartments,
  fetchSalary,
  postStaff,
  putStaffs,
  DeleteStaff,
} from "../redux/actions";
import { AnimatePresence, motion } from "framer-motion";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchSalary();
  }
  onDishSelect(dishId) {
    this.setState({ selectDish: dishId });
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{duration:0.5}}
        >
          <StaffDetails
            staffs={
              this.props.staffs.staffs.filter(
                (staff) => staff.id === parseInt(match.params.staffId, 10)
              )[0]
            }
            departments={this.props.departments.departments}
            departmentsPending={this.props.departments.pending}
            staffsPending={this.props.staffs.pending}
            putStaffs={this.props.putStaffs}
            DeleteStaff={this.props.DeleteStaff}
            fetchStaffs={this.props.fetchStaffs}
          />
        </motion.div>
      );
    };
    const ListUserBase = () => {
      return (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{duration:0.5}}
        >
          <ListUser
            staffs={this.props.staffs.staffs}
            staffsPending={this.props.staffs.pending}
            staffsError={this.props.staffs.error}
            postStaff={this.props.postStaff}
            departments={this.props.departments.departments}
            departmentsPending={this.props.departments.pending}
            fetchStaffs={this.props.fetchStaffs}
          />
        </motion.div>
      );
    };
    const DepartmentsBase = () => {
      return (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{duration:0.5}}
        >
          <DepartmentDetails
            departments={this.props.departments.departments}
            departmentsPending={this.props.departments.pending}
            departmentsError={this.props.departments.error}
          />
        </motion.div>
      );
    };
    const SalaryBase = () => {
      return (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{duration:0.5}}
        >
          <Salary
            staffs={this.props.salary.salary}
            salaryPending={this.props.salary.pending}
            salaryError={this.props.salary.error}
            transition={{duration:0.5}}
          />
        </motion.div>
      );
    };
    return (
      <div>
        <Header />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={this.props.location} key={this.props.location.key}>
            <Route exact path="/" component={ListUserBase} />
            <Route exact path="/staff" component={ListUserBase} />
            <Route path="/staff/:staffId" component={StaffWithId} />
            <Route exact path="/department" component={DepartmentsBase} />
            <Route exact path="/salary" component={SalaryBase} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    salary: state.salary,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchSalary: () => {
    dispatch(fetchSalary());
  },
  postStaff: (
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime,
    salary,
    image
  ) => {
    dispatch(
      postStaff(
        name,
        doB,
        salaryScale,
        startDate,
        departmentId,
        annualLeave,
        overTime,
        salary,
        image
      )
    );
  },
  putStaffs: (
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
  ) => {
    dispatch(
      putStaffs(
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
      )
    );
  },
  DeleteStaff: (id) => {
    dispatch(DeleteStaff(id));
  },
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
