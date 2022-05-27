
import React, {Component} from "react";
import Header from './HeaderComponent'
import ListUser from "./StaffListComponent";
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Route,Redirect } from 'react-router-dom';
import { STAFFS,DEPARTMENTS } from "../shared/staffs";
import StaffDetails from "./StaffDetails";
import DepartmentDetails from './DepartmentComponent'
import Salary from "./SalaryComponent";
import "./css/staffcss.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs:STAFFS,
      departments:DEPARTMENTS
    };
  }

  onDishSelect(dishId) {
    this.setState({selectDish: dishId})
  }
  
  render() {

    const StaffWithId =({match})=> {
      return (
        <StaffDetails staffs={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]}
        />
      )
    }
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <ListUser staffs={this.state.staffs} />}/>
        <Route exact path="/staff" component={() => <ListUser staffs={this.state.staffs} />}/>
        <Route path="/staff/:staffId" component={StaffWithId}/>
        <Route exact path='/department' component={()=><DepartmentDetails departments={this.state.departments} />}/>
        <Route exact path='/salary' component={()=><Salary staffs={this.state.staffs}/>} />
      </Switch>
      <Footer />
    </div>
  );
  }
}

export default Main;