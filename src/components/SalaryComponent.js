import React from "react";
import {
  Card,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import "./css/staffcss.css";
import { Link } from "react-router-dom";

class Salary extends React.Component {
  render() {
    const salaryDetails = this.props.staffs.map((staff) => {
      const salaryCal = Math.floor(
        staff.salaryScale * 3000000 + staff.overTime * 200000
      );
      return (
        <div className="col-lg-4 col-md-6 col-12 list" key={staff.id}>
          <Card>
            <h5>{staff.name}</h5>
            <CardBody>
              <p>Mã nhân viên: {staff.id}</p>
              <p>Hệ số lương: {staff.salaryScale}</p>
              <p>Số ngày làm thêm: {staff.overTime}</p>
              <Breadcrumb>
                <BreadcrumbItem>Lương: {salaryCal}</BreadcrumbItem>
              </Breadcrumb>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container main">
        <div className="row">
          <Breadcrumb >
            <BreadcrumbItem className="breadcrumb"><Link to='/staff'>Nhân viên </Link> / Bảng lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">{salaryDetails}</div>
      </div>
    );
  }
}

export default Salary;
