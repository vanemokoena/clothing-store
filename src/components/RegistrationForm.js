import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/actions';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    alert('Registration successful');
    navigate('/login');
  };

  return (
    <Container
      style={{
        maxWidth: '500px',
        marginTop: '60px',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Create an Account</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ borderRadius: '8px' }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            style={{ borderRadius: '8px' }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ borderRadius: '8px' }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ borderRadius: '8px' }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ borderRadius: '8px' }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          style={{
            borderRadius: '8px',
            padding: '10px',
            fontWeight: 'bold',
          }}
        >
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
