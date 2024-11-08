import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center" style={{ marginTop: '100px' }}>
      <h1>Welcome to the Clothing Store</h1>
      <Button variant="primary" onClick={() => navigate('/register')} className="m-2">
        Register
      </Button>
      <Button variant="secondary" onClick={() => navigate('/login')} className="m-2">
        Login
      </Button>
    </Container>
  );
};

export default LandingPage;
