import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./css/staffcss.css";

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

  render() {
    let menu = this.props.staffs.map((value) => (
      <div className="col-lg-2 col-md-4 col-6 list" key={value.id}>
        <Link to={`/staff/${value.id}`} className="linkreact">
          <Card>
            <CardImg src={value.image} />
            <CardBody className="cbody">
              <CardTitle>{value.name}</CardTitle>
            </CardBody>
          </Card>
        </Link>
      </div>
    ));
    return (
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h2>Nhân viên</h2>
            </div>
          <div className="col-12">
            <h3>{this.props.staffs.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row ">{menu}</div>
      </div>
    );
  }
}

export default ListUser;
