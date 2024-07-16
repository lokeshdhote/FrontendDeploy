// src/App.js
import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';


const UserAth = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-emerald-700">
      <div className="flex flex-col items-center mb-8">
        <div className="flex gap-5 mb-5">
          <button
            className={`px-4 py-2 rounded ${isRegistering ? 'bg-gray-300' : 'bg-gray-600 text-white'}`}
            onClick={() => setIsRegistering(true)}
          >
            Sign Up
          </button>
          <button
            className={`px-4 py-2 rounded ${!isRegistering ? 'bg-gray-300' : 'bg-gray-600 text-white'}`}
            onClick={() => setIsRegistering(false)}
          >
            Log In
          </button>
        </div>
        {isRegistering ? <Register /> : <Login />}
      </div>
      <h6 className="text-2xs font-light text-center text-gray-300">created by ShopWave</h6>
    </div>
  );
};

export default UserAth;
