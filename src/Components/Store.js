import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { productArray } from './ProductStore'
import ProductCard from './ProductCard'
function Main() {
  return (
  <>
  <h2 align="center" className='p-3'>Welcome to the store</h2>
   <Row xs={1} md={3} className="g-4">
   {productArray.map((product,idx) =>(
        <Col align='center' key={idx}>
      <ProductCard product={product} />
       </Col>
      ))}
      </Row>  
  </>
  )
}

export default Main