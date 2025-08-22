// components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth(); // Get auth status and loading state from context

  // If still loading the authentication status, show a loading message/spinner
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-700">Loading authentication...</div>
      </div>
    );
  }

  // If authenticated, render the child routes (Outlet)
  // Otherwise, redirect to the registration page
  return isAuthenticated ? <Outlet /> : <Navigate to="/register" replace />;
};

export default PrivateRoute;
