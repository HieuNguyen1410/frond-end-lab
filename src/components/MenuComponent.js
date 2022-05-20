
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Fade } from 'reactstrap';
import DishDetails from './DishDetailsComponent'



function RenderMenuItem({dish,onClick}){

    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}
const Menu = (props) => {

    let menu = props.dish.map((value, i) => (
        <div key={value.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={value} onClick={props.onClick}/>
        </div>
    ))

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    )
}


export default Menu