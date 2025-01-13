import React from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  isAuthenticated: boolean;
  children: JSX.Element;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, children }) =>
  isAuthenticated ? children : <Navigate to="/login" />;

export default PrivateRoute;
