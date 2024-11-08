import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/store/:categoryId" element={<ProductList />} /> {/* Dynamic category route */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
