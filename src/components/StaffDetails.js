import React from "react";
import { Button } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import EditStaff from "./EditStaffComponent";
import { Loading } from "./LoadingComponent";
import DeleteStaff from "./DeleteComponent";
import "./css/staffDetail.css";
class StaffDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  renderStaffDetails() {
    const staffs = this.props.staffs;
    const departments = this.props.departments;
    if (this.props.departmentsPending || !staffs) {
      <Loading />;
    } else {
      let [department] = departments.filter((value) => {
        return value.id === staffs.departmentId;
      });
      return (
        <React.Fragment>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="card-container">
              <img className="round" src={staffs.image} alt={staffs.name} />
              <h3>{staffs.name}</h3>
              <div className="buttons">
                <Button className="primary" onClick={this.toggleModal}>
                  Edit
                </Button>
                <DeleteStaff
                  staffId={this.props.staffs}
                  DeleteStaff={this.props.DeleteStaff}
                />
              </div>
              <div className="skills"></div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <h4>{"Họ và tên: " + staffs.name}</h4>
            <p>{`Ngày sinh: ${dateFormat(staffs.doB, "dd/mm/yyyy")}`}</p>
            <p>{`Ngày vào công ty: ${dateFormat(
              staffs.startDate,
              "dd/mm/yyyy"
            )}`}</p>
            <p>{`Phòng ban: ${department.name}`}</p>
            <p>{`Số ngày nghỉ còn lại: ${staffs.annualLeave}`}</p>
            <p>{`Số ngày đã làm thêm: ${staffs.overTime}`}</p>
          </div>
        </React.Fragment>
      );
    }
  }
  render() {
    console.log();
    return (
      <div className="container main">
        <div className="row">
          <div className="col-12">
            <p>
              <Link to="/staff">Nhân viên </Link> /{" "}
              {this.props.staffs && this.props.staffs.name}
            </p>
          </div>
        </div>
        <div className="row">{this.renderStaffDetails()}</div>
        <EditStaff
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          staffsId={this.props.staffs}
          departments={this.props.departments}
          staffsPending={this.props.staffsPending}
          departmentsPending={this.props.departmentsPending}
          putStaffs={this.props.putStaffs}
          fetchStaffs={this.props.fetchStaffs}
        />
      </div>
    );
  }
}
export default StaffDetails;
