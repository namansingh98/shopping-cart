import { Col, Row } from "react-bootstrap"
import ProductCard from "../Components/ProductCard";
import {productArray} from '../Components/ProductsStore';
function Store() {
    return (
        <>
        <h1 align="center" className="p-3">Welcome to the store!</h1>
        <Row xs={1} md={3} className="g-4">
            {productArray.map((product, idx) => (
                <Col align="center" key={idx}>
                    <ProductCard product={product}/>
                </Col>
            ))}
        </Row>
    </>
    )
}
export default Store;