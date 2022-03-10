import React from 'react'
import { Link, useParams } from 'react-router-dom'
import events from '../events';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'

const ProductScreen = () => {
  const params = useParams();

  const giveBackProduct = events.find((p) => p._id === params.id)
    return (
        <>
        <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={giveBackProduct.image} alt={giveBackProduct.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{giveBackProduct.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${giveBackProduct.price}</ListGroup.Item>
            <ListGroup.Item>Description: {giveBackProduct.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${giveBackProduct.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {giveBackProduct.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={giveBackProduct.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
        </>

    )
}

export default ProductScreen