import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, Form, Row, Col, Card } from 'react-bootstrap';
import { updateQuantity, removeFromCart } from '../store/actions';
import HelpButton from './HelpButton';

const CartPage = () => {
  // Access the cart items from the Redux store
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  // State to hold the selected shipment method
  const [shipmentMethod, setShipmentMethod] = useState('');

  // Function to calculate the total cost of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  // Handler to update the quantity of a specific product in the cart
  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity(productId, newQuantity));
  };

  // Handler to remove a specific product from the cart
  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Shopping Cart</h2>
      {/* Display a message if the cart is empty */}
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {/* Loop through each product in the cart and display it */}
            {cart.map((product, index) => (
              <Col md={12} lg={6} className="mb-4" key={index}>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Row>
                      <Col xs={4} className="d-flex align-items-center">
                        {/* Product image */}
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: '100%', maxWidth: '100px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                      </Col>
                      <Col xs={8}>
                        {/* Product name and size */}
                        <h5>{product.name}</h5>
                        <p className="text-muted">Size: {product.selectedSize}</p>
                        <Row>
                          <Col xs={6}>
                            {/* Input for updating product quantity */}
                            <Form.Control
                              type="number"
                              min="1"
                              value={product.quantity}
                              onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                              style={{ width: '100%', maxWidth: '80px' }}
                            />
                          </Col>
                          <Col xs={6} className="text-end">
                            {/* Button to remove product from cart */}
                            <Button variant="danger" size="sm" onClick={() => handleRemoveItem(product.id)}>
                              Remove
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* Display product price and subtotal */}
                    <div className="text-end mt-3">
                      <span className="fw-bold">Price: R{product.price}</span>
                      <br />
                      <span className="fw-bold">Subtotal: R{(product.price * product.quantity).toFixed(2)}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="justify-content-between mt-4">
            <Col md={6} lg={4}>
              {/* Dropdown to select shipping method */}
              <Form.Select
                value={shipmentMethod}
                onChange={(e) => setShipmentMethod(e.target.value)}
                aria-label="Select a shipping method"
                className="mb-3 p-2 shadow-sm rounded"
              >
                <option value="">Select a shipping method</option>
                <option value="Standard">Standard Shipping</option>
                <option value="Express">Express Shipping</option>
              </Form.Select>
              {/* Button to provide help with shipping options */}
              <HelpButton />
            </Col>

            <Col md={6} lg={4} className="text-end">
              {/* Order summary card displaying the total cost */}
              <Card className="shadow-sm p-3">
                <Card.Body className="text-center">
                  <h5 className="fw-bold mb-3">Order Summary</h5>
                  <h5>Total: R{calculateTotal()}</h5>
                  {/* Button to proceed to checkout */}
                  <Button variant="primary" size="lg" className="mt-3 shadow-sm rounded-pill">
                    Proceed to Checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default CartPage;
