import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/actions';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = users.find((user) => user.username === username);
    if (userExists) {
      dispatch(loginUser(username));
      alert('Login successful');
      navigate('/');
    } else {
      alert('User not found');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <Container
      style={{
        maxWidth: '400px',
        marginTop: '60px',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ borderRadius: '8px' }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          Login
        </Button>
      </Form>
      <div className="text-center mt-3">
        <p>
          Not registered?{' '}
          <span
            onClick={handleRegisterRedirect}
            style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Sign up
          </span>
        </p>
      </div>
    </Container>
  );
};

export default LoginForm;
