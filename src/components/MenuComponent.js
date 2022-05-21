import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Fade,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import DishDetails from "./DishDetailsComponent";
import { Link } from "react-router-dom";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Link to={`/menu/${dish.id}`}>
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
}
const Menu = (props) => {
  let menu = props.dish.map((value, i) => (
    <div key={value.id} className="col-12 col-md-5 m-1">
      <RenderMenuItem dish={value} />
    </div>
  ));

  return (
    <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/Home'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </Breadcrumb>
        </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
