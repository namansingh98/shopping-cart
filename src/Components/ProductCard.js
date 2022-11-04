import { Card, Button, Form, Row, Col } from "react-bootstrap"
import { productArray } from "./ProductStore";
function ProductCard(props) {
    const product = props.product;
    return(
    <Card>
        <Card.Body>
            <Card.Title> {product.title} </Card.Title>
            <Card.Text>Rs- {product.price} </Card.Text>
            <Button variant="primary">Add to Card</Button>
        </Card.Body>
    </Card>  
    )
}
export default ProductCard;