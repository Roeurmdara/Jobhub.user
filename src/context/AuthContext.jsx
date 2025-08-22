// context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext(null);

// AuthProvider component to wrap your application
export const AuthProvider = ({ children }) => {
  // State to hold authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // State to hold user data (e.g., user ID, name, email)
  const [user, setUser] = useState(null);
  // State to indicate if the initial authentication check is complete
  const [isLoading, setIsLoading] = useState(true);

  // Effect to check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // In a real application, you would send a request to your backend
        // to validate the token stored in localStorage (e.g., JWT).
        // For this example, we'll just check if a 'user' item exists.
        const storedUser = localStorage.getItem('user');
        // storedUser = null;
        if (storedUser) {
          // If a user is found, parse it and set authentication status
          const userData = JSON.parse(storedUser);
          setIsAuthenticated(true);
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
        // Clear invalid data if parsing fails
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        // Set loading to false once the check is complete
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to handle user login
  const login = (userData) => {
    // Store user data (e.g., a token or user object) in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Function to handle user logout
  const logout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  // Provide the authentication state and functions to children components
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily consume the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
