// src/components/PrivateRoute.js
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Check if the user is logged in by looking for the access_token in localStorage
  const accessToken = localStorage.getItem('access_token');

  // If there's no token, redirect to the login page
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the child routes
  return <Outlet />;
};

export default PrivateRoute;
