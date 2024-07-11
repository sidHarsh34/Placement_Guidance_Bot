import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    handleLogout();
  }, []); // Call handleLogout on component mount

  const handleLogout = () => {
    localStorage.removeItem('auth-token'); // Remove the authentication token
    alert('Logged out successfully');
    setIsLoggedIn(false); // Update login status
    navigate('/'); // Redirect to the login page
  };

  return null; // This component doesn't render anything
};

export default Logout;
