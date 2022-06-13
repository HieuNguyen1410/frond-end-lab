import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardImg, Button } from "reactstrap";
import { STAFFS, DEPARTMENTS, STAFFSLOCAL } from "../shared/staffs";
import AddStaff from "./AddStaffComponent";
import Search from "./searchStaff";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { motion } from "framer-motion";
import "./css/staffcss.css";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectUser: null,
      resultSearch: "",
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
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

  menu() {
    if (this.props.staffsPending) {
      return <Loading />;
    } else if (this.props.staffsError) {
      return <h4>Failed to fetch</h4>;
    } else {
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
      return menu;
    }
  }

  render() {
    console.log(); //console log

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
            handleBlur={this.handleBlur}
          />
          <div>
            <hr />
          </div>
        </div>
        <div className="row ">{this.menu()}</div>
          <AddStaff
            isOpen={this.state.isModalOpen}
            toggle={this.toggleModal}
            departments={this.props.departments}
            postStaff={this.props.postStaff}
            departmentsPending={this.props.departmentsPending}
            fetchStaffs={this.props.fetchStaffs}
          />
      </div>
    );
  }
}

export default ListUser;
