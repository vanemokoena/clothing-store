import React from 'react';

import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation

const HomePage = () => {
 

  const featuredProducts = [
    { id: 1, name: 'Summer Dress', price: 129.99, image: '/images/fdress.png' },
    { id: 2, name: 'Jeans', price: 149.99, image: '/images/jeggings.avif' },
    { id: 3, name: 'Sneakers', price: 269.99, image: '/images/fsneaker.webp' },
    { id: 4, name: 'Necklace', price: 89.99, image: '/images/fnecklace.avif' },
  ];

  const categories = [
    { id: 1, name: 'Dresses', image: '/images/dress.avif' },
    { id: 2, name: 'Shoes', image: '/images/pumps.avif' },
    { id: 3, name: 'Jeans', image: '/images/wideleg.avif' },
    { id: 4, name: 'Accessories', image: '/images/jews.webp' },
  ];

  const promotions = [
    { id: 1, title: 'Summer Sale - Up to 50% off!', image: '/images/sale.png' },
    { id: 2, title: 'New Arrivals', image: '/images/newarr.png' },
  ];

  return (
    <Container fluid>
      {/* Hero Banner */}
      <Carousel>
        <Carousel.Item>
          <Link to="/store">
            <img
              className="d-block w-100"
              src="/images/banner1.png"
              alt="Hero Banner 1"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/store">
            <img
              className="d-block w-100"
              src="/images/banner2.png"
              alt="Hero Banner 2"
            />
          </Link>
        </Carousel.Item>
      </Carousel>

      {/* Category Section */}
      <h2 className="my-4 text-center">Available Categories</h2>
      <Row className="text-center">
        {categories.map((category) => (
          <Col key={category.id} md={3} className="mb-4">
            <Card>
              <Link to="/store">
                <Card.Img variant="top" src={category.image} />
              </Link>
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Promotions Section */}
      <h2 className="my-4 text-center">Special Promotions</h2>
      <Row>
        {promotions.map((promo) => (
          <Col key={promo.id} md={6} className="mb-4">
            <Card>
              <Link to="/store">
                <Card.Img variant="top" src={promo.image} />
              </Link>
              <Card.Body>
                <Card.Title className="text-center">{promo.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Featured Products Section */}
      <h2 className="my-4 text-center">Featured Products</h2>
      <Row>
        {featuredProducts.map((product) => (
          <Col key={product.id} md={3} className="mb-4">
            <Card>
              <Link to="/store">
                <Card.Img variant="top" src={product.image} />
              </Link>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: R{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
