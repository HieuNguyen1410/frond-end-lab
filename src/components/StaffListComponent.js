import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Button,
} from "reactstrap";
import { STAFFS, DEPARTMENTS, STAFFSLOCAL } from "../shared/staffs";
import AddStaff from "./AddStaffComponent"
import Search from "./searchStaff";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

import "./css/staffcss.css";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      doB: "",
      salaryScale: 1,
      startDate: "",
      department: DEPARTMENTS[0].name,
      annualLeave: 0,
      overTime: 0,
      salary: "",
      image: "/assets/images/alberto.png",
      departments: DEPARTMENTS,
      staffs: STAFFSLOCAL,
      selectUser: null,
      resultSearch: "",
      isModalOpen: false,
      touched: {
        startDate: false,
        doB: false,
        name: false,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  handleInputChange(event) {
    console.log(event.target.value)
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
   const [obDepartment] = this.state.departments.filter(value=>{
       if(value.name.toLowerCase().includes(this.state.department.toLowerCase())){
         return value
       }
    }).map(value=> value)
    const newStaff = {
      id: STAFFSLOCAL.length,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: obDepartment,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      image: this.state.image,
    };
    if (
      this.state.name === "" ||
      this.state.doB === "" ||
      this.state.startDate === "" ||
      this.state.annualLeave === "" ||
      this.state.salaryScale === "" ||
      this.state.overTime === ""
    ) {
      alert("Không được để trống");
      event.preventDefault();
    } else {
      const value = [...STAFFSLOCAL, newStaff];
      localStorage.setItem('Staffs',JSON.stringify(value));
    }
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleClick(value) {
    this.setState({
      selectUser: value,
    });
  }

  searchStaff() {
    const inputNameValue = this.name.value;
    this.setState({
      resultSearch: inputNameValue,
    });
  }

  validate(name, startDate, doB) {
    const errors = {
      name: "",
      startDate: "",
      doB: "",
    };
    if (this.state.touched.name && name === "") errors.name = "Yêu cầu nhập";
    else if (this.state.touched.name && name.length < 2)
      errors.name = "Yêu cầu nhập nhiều hơn 2 ký tự";
    else if (this.state.touched.name && name.length > 30)
      errors.name = "Yêu cầu nhập ít hơn 30 ký tự";

    if (this.state.touched.doB && doB === "") errors.doB = "Yêu cầu nhập";

    if (this.state.touched.startDate && startDate === "")
      errors.startDate = "Yêu cầu nhập";

    return errors;
  }
  render() {
    console.log(); //console log
    const errors = this.validate(
      this.state.name,
      this.state.startDate,
      this.state.doB
    );
    const menu = this.props.staffs
      .filter((value) => {
        if (this.state.resultSearch == "") {
          return value;
        } else if (
          value.name
            .toLowerCase()
            .includes(this.state.resultSearch.toLowerCase())
        ) {
          return value;
        }
      })
      .map((value) => (
        <div className="col-lg-2 col-md-4 col-6 list" key={value.id}>
          <Link to={`/staff/${value.id}`} className="linkreact">
            <Card className="card">
              <CardImg src={value.image} />
              <CardBody className="cbody">
                <CardTitle>{value.name}</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </div>
      ));
    return (
      <div className="container main">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-10">
            <h2>Nhân viên</h2>
          </div>
          <div className="col-lg-3 col-md-3 col-2">
            <Button onClick={this.toggleModal}>
              <i className="fa fa-plus"></i>
            </Button>
          </div>
          <Search
            innerRef={(input) => (this.name = input)}
            onClick={(e) => this.searchStaff(e)}
          />
          <div>
            <hr />
          </div>
        </div>
        <div className="row ">{menu}</div>
        <AddStaff 
        isOpen={this.state.isModalOpen}
        toggle={this.toggleModal}
        onSubmit={this.handleSubmit}
        errors={errors}
        handleBlur={this.handleBlur}
        onChange={this.handleInputChange}
        value={this.state}
        />

      </div>
    );
  }
}

export default ListUser;
