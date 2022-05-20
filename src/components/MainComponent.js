import DishDetails from './DishDetailsComponent'
import React, {Component} from "react";
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Fade } from 'reactstrap';
import {DISHES} from '../shared/dishes'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes:DISHES,
      selectDish : null
    };
  }

  onDishSelect(dishId) {
    this.setState({selectDish: dishId})
  }
  
  render() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu 
      dish={this.state.dishes}
      onClick={(dishId) => this.onDishSelect(dishId)}
      />
      {/* <Menu 
      dishes={this.state.dishes}
      onClick={(dishId) => this.onDishSelect(dishId)
      }
      /> */}
      <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectDish)}/>
    </div>
  );
  }
}

export default Main;