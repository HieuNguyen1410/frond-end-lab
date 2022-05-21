import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  FadeTransform,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  if (dish != null) {
    console.log(dish);
    const detail = (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card>
          <CardImg
            width="100%"
            src={dish.image}
            alt={dish.name}
            style={{ backgroundColor: "#333" }}
          />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
    // const detail = dish.map((value, i) => (
    //   <div className="col-12 col-md-5 m-1" key={value.id}>
    //     <Card>
    //       <CardImg
    //         width="100%"
    //         src={value.image}
    //         alt={value.name}
    //         style={{ backgroundColor: "#333" }}
    //       />
    //       <CardBody>
    //         <CardTitle>{value.name}</CardTitle>
    //         <CardText>{value.description}</CardText>
    //       </CardBody>
    //     </Card>
    //   </div>
    // ));
    return detail;
  } else {
    return <div></div>;
  }
}
function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment, index) => {
            return (
              <li key={index}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetails = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.comments} />
      </div>
    </div>
  );
};

export default DishDetails;
