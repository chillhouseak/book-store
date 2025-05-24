import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/Authprovider';
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext); // optional if you track user state

  useEffect(() => {
    signOut(auth)
      .then(() => {
        setUser && setUser(null); // optional
        alert("You have been logged out.");
        navigate('/login');
      })
      .catch((error) => {
        console.error("Logout error:", error);
        alert("Failed to logout. Please try again.");
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-blue-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm w-full">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Logging out...</h2>
        <p className="text-gray-500">Please wait while we sign you out securely.</p>
      </div>
    </div>
  );
};

export default Logout;
