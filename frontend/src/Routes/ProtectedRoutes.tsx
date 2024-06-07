import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { RootState } from '../components/store/store';
import { axiosPrivate } from '../api/axios';
import { login, logout } from '../components/store/features/authSlice';
import { Riple } from "react-loading-indicators";

interface ProtectedRouteProps {
  rolle?: string; // Optional prop to specify required role
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ rolle }) => {
  const dispatch = useDispatch();
  const { isLoggedIn, role } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(true); // Local loading state


  const fetchToken = async () => {
    try {
      const response = await axiosPrivate.get('espacerecruteurs/validate-token');
      const { isLogged, role } = response.data;

      if (isLogged && role) {
        setLoading(false)
        dispatch(login({ isLogged, role })); // Dispatch login with payload
        console.log('from the fetch ',isLoggedIn);
      } else {
        dispatch(logout());
      }
    } catch (error) {
      dispatch(logout());
    }
  };

  useEffect(() => {
    fetchToken();
    
  }, [dispatch]);

  // If the authentication state is not yet determined, you may want to render a loading indicator
  if (loading) {
    return (
      <div className="w-full flex h-screen justify-center items-center">
         <Riple color="#4ADE80" size="medium" text="" textColor="" />
      </div>
    )}


  // If not logged in, redirect to login
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // If a role is specified and it doesn't match the user's role, redirect to login
  if (rolle && role !== rolle) {
    return <Navigate to="/login" />;
  }

  // If the user's role is 'recruiter' and they are logged in, navigate to '/suivezlesoffres'
  if (role === 'recruiter' && isLoggedIn) {
    return <Outlet />;
  }

  
 
};

export default ProtectedRoute;
