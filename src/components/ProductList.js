

import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions';
const products = [
  // Dresses
  {
    id: 1,
    name: 'Bodycon',
    category: 'Dresses',
    price: 180,
    sizes: ['S', 'M', 'L'],
    image: '/images/bodycon.avif',
  },
  {
    id: 2,
    name: 'Evening Gown',
    category: 'Dresses',
    price: 100,
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/column.png',
  },
  {
    id: 3,
    name: 'Casual Dress',
    category: 'Dresses',
    price: 145,
    sizes: ['S', 'M', 'L'],
    image: '/images/fitnflare.avif',
  },
  {
    id: 4,
    name: 'Floral Dress',
    category: 'Dresses',
    price: 235,
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/wrap.avif',
  },
  {
    id: 5,
    name: 'Maxi Dress',
    category: 'Dresses',
    price: 255,
    sizes: ['M', 'L', 'XL'],
    image: '/images/slip.avif',
  },

  // Jeans
  {
    id: 6,
    name: 'Skinny Jeans',
    category: 'Jeans',
    price: 140,
    sizes: ['30', '32', '34', '36'],
    image: '/images/skinny.avif',
  },
  {
    id: 7,
    name: 'Straight Fit Jeans',
    category: 'Jeans',
    price: 245,
    sizes: ['30', '32', '34', '36'],
    image: '/images/straight.avif',
  },
  {
    id: 8,
    name: 'Wide Leg Jeans',
    category: 'Jeans',
    price: 250,
    sizes: ['32', '34', '36', '38'],
    image: '/images/wideleg.avif',
  },
  {
    id: 9,
    name: 'Jeggings ',
    category: 'Jeans',
    price: 142,
    sizes: ['30', '32', '34', '36'],
    image: '/images/jeggings.avif',
  },
  {
    id: 10,
    name: 'tube Jeans',
    category: 'Jeans',
    price: 55,
    sizes: ['30', '32', '34', '36'],
    image: '/images/tuve.avif',
  },

  // Shoes
  {
    id: 11,
    name: 'Pumps',
    category: 'Shoes',
    price: 160,
    sizes: ['7', '8', '9', '10'],
    image: '/images/pumps.avif',
  },
  {
    id: 12,
    name: 'Casual Sneakers',
    category: 'Shoes',
    price: 250,
    sizes: ['7', '8', '9', '10'],
    image: '/images/sneakers.avif',
  },
  {
    id: 13,
    name: 'Heels',
    category: 'Shoes',
    price: 280,
    sizes: ['8', '9', '10', '11'],
    image: '/images/heals.avif',
  },
  {
    id: 14,
    name: 'Sliders',
    category: 'Shoes',
    price: 190,
    sizes: ['7', '8', '9', '10'],
    image: '/images/sliders.avif',
  },
  {
    id: 15,
    name: 'Sandals',
    category: 'Shoes',
    price: 120,
    sizes: ['6', '7', '8', '9'],
    image: '/images/sandals.avif',
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes({ ...selectedSizes, [productId]: size });
  };

  const handleAddToCart = (product) => {
    const size = selectedSizes[product.id];
    if (!size) {
      alert('Please select a size before adding to the cart.');
      return;
    }
    const productWithSize = { ...product, selectedSize: size };
    dispatch(addToCart(productWithSize));
    alert(`${product.name} (Size: ${size}) has been added to your cart.`);
  };

  return (
    <Container>
      <h2 className="my-4"> Shop Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: R{product.price}</Card.Text>
                <Form.Select
                  onChange={(e) => handleSizeChange(product.id, e.target.value)}
                  defaultValue=""
                  aria-label="Select size"
                >
                  <option value="" disabled>
                    Select Size
                  </option>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </Form.Select>
                <Button variant="primary" onClick={() => handleAddToCart(product)} className="mt-2">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
