import React from "react";
import {
  Card,
  CardBody,
} from "reactstrap";

class DepartmentDetails extends React.Component {
  RenderDepartment(department) {
    const h = department.map((department) => (
      <div className="col-lg-4 col-md-6 col-12 list" key={department.id}>
        <Card>
          <h3>{department.name}</h3>
          <CardBody>Số lượng nhân viên: {department.numberOfStaff}</CardBody>
        </Card>
      </div>
    ));
    return h;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.RenderDepartment(this.props.departments)}
        </div>
      </div>
    );
  }
}

export default DepartmentDetails;
