import React, { useState } from 'react';
import { BrowserRouter as Router,useHistory, Route,Routes, Navigate } from 'react-router-dom';


import Login from './components/Login';
import Register from './components/Register';
import './App.css';





const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('auth') ? <Component {...props} /> : <Navigate to="/login" />
      }
    />




  );
  return (
    <Router>

    <Routes>
        
        
        <Route path="/grid" element={<Login />} />
        <Route path="/register" element={<Register />} />
        

        <Route path="/" element={<Login />} />
        
      </Routes>




     
    </Router>
  );
};

export default App;
