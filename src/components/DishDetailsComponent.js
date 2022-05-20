import React, {Component} from "react";
import {Navbar, NavbarBrand,FadeTransform,Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Button,Stagger,Fade,CommentForm} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes'




  function RenderDish({dish}) {

    if(dish != null) {
     const detail = dish.map((value, i) => (
      <React.Fragment>
      <div className="col-12 col-md-5 m-1" key={value.id}>
        <Card>
          <CardImg width="100%" src={value.image} alt={value.name} style={{backgroundColor:'#333'}}/>
          <CardBody>
              <CardTitle>{value.name}</CardTitle>
              <CardText>{value.description}</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
         <ul className="list-unstyled">
        {value.comments.map((comment,index) => {
            return (
              <li key={index}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              </li>
              );
            })}
          </ul>
      </div>
      </React.Fragment>
     ))
     return detail
    }
    else{
        return (
            <div></div>
        )
    }
}

const DishDetails = (props) =>{
  return (
    <div className="container">
      <div className="row">
        <RenderDish dish = {props.dish}/>
      </div>
    </div>
  )
}


export default DishDetails;
