import React from "react";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { STAFFS } from "./shared/staffs";
import ListUser from "../src/components/StaffListComponent";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs:STAFFS
    }
  }
  render(){
    return (
      <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="#">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </div>
      </Navbar>
      <ListUser staffs={this.state.staffs}/>
    </div>
    )
  }
}

export default App;
