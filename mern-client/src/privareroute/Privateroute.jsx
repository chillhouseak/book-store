import React, { useContext } from 'react';
import { AuthContext } from '../contexts/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';


const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext); 
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center mt-20">
       
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Privateroute;
