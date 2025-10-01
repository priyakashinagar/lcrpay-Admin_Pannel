import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Simple check for userAuth in localStorage
  const isAuthenticated = () => {
    try {
      const userAuth = localStorage.getItem('userAuth');
      if (!userAuth) return false;
      
      const authData = JSON.parse(userAuth);
      return authData.isAuthenticated === true;
    } catch (error) {
      return false;
    }
  };

  return isAuthenticated() ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;