import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3 shadow-sm">
      <Navbar.Brand href="/" className="fw-bold fs-4 text-light ms-3">
        VanessaStore
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="d-flex justify-content-center w-100">
          <Nav className="text-center">
            <Nav.Link
              as={NavLink}
              to="/"
              className="mx-3 text-light"
              activeClassName="active-link"
              style={{ fontWeight: '500', fontSize: '18px' }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/store"
              className="mx-3 text-light"
              activeClassName="active-link"
              style={{ fontWeight: '500', fontSize: '18px' }}
            >
              Store
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/cart"
              className="mx-3 text-light"
              activeClassName="active-link"
              style={{ fontWeight: '500', fontSize: '18px' }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </div>
        <Nav className="ms-auto me-3 d-flex align-items-center">
          {currentUser ? (
            <Navbar.Text className="text-light fw-light">
              Signed in as: <span className="fw-bold">{currentUser}</span>
            </Navbar.Text>
          ) : (
            <Nav.Link
              as={NavLink}
              to="/login"
              className="text-light rounded px-3 py-2 border border-light"
              style={{ fontSize: '16px' }}
            >
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
