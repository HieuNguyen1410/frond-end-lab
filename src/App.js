// import logo from './logo.svg';
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

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="#">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </div>
      </Navbar>
      <ListUser />
    </div>
  );
}

export default App;
