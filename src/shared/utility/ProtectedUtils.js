import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


const ProtectedRoute = ({  ...rest }) => {
    let location = useLocation();
    const userAccess = JSON.parse(localStorage.getItem("userAccess"));
     let isAuthenticated =  userAccess? true :false;
      if(!isAuthenticated){
            return <Navigate to="/login" state={{ from: location }} />;
      }
      return <Outlet />
};

export default ProtectedRoute;