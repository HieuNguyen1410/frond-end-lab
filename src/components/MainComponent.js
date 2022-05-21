import DishDetails from './DishDetailsComponent'
import React, {Component} from "react";
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Fade } from 'reactstrap';
import {DISHES} from '../shared/dishes'
import {LEADERS} from '../shared/leaders'
import {COMMENTS} from '../shared/comments'
import {PROMOTIONS} from '../shared/promotions'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Contact from './ContactComponent';
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectDish : null
    };
  }

  onDishSelect(dishId) {
    this.setState({selectDish: dishId})
  }
  
  render() {
    const HomePage = () => {
      return(
          <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const DishWithId = ({match}) =>{
      return (
        <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      )
    }
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path='/menu' component={() => <Menu dish={this.state.dishes} />} />
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route exact path='/contactus' component={Contact} />
        <Redirect to="/home" />
      </Switch>
      {/* <Menu 
      dish={this.state.dishes}
      onClick={(dishId) => this.onDishSelect(dishId)}
      />
      <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectDish)}/> */}
      <Footer />
    </div>
  );
  }
}

export default Main;