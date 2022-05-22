import { STAFFS } from "../shared/staffs";
import React, { Component } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { useState } from "react";
import dateFormat from "dateformat";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectUser: null,
    };
  }
  handleClick(value) {
    this.setState({
      selectUser: value,
    });
  }
  renderUser(staffs) {
    if (staffs != null) {
      return (
      <div className="col-lg-6 col-md-6 col-12">
        <Card>
          <CardBody className="cinfor">
            <h4>{"Họ và tên: " + staffs.name}</h4>
            <p>{`Ngày sinh: ${dateFormat(staffs.doB, "dd/mm/yyyy")}`}</p>
            <p>{`Ngày vào công ty: ${dateFormat(
              staffs.startDate,
              "dd/mm/yyyy"
            )}`}</p>
            <p>{`Phòng ban: ${staffs.department.name}`}</p>
            <p>{`Số ngày nghỉ còn lại: ${staffs.annualLeave}`}</p>
            <p>{`Số ngày đã làm thêm: ${staffs.overTime}`}</p>
          </CardBody>
        </Card>
      </div>
      )
    }
    else{
      return <div></div>
    }
  }

  render() {
    let menu = this.props.staffs.map((value) => (
      <div className="col-lg-4 col-md-6 col-12 list" key={value.id}>
        <Card onClick={() => this.handleClick(value)}>
          <CardBody className="cbody">
            <CardTitle>{value.name}</CardTitle>
          </CardBody>
        </Card>
      </div>
    ));
    return (
      <div className="container contain">
        <div className="row">{menu}</div>
        <div className="row">
          {this.renderUser(this.state.selectUser)}
        </div>
      </div>
    );
  }
}

export default ListUser;
