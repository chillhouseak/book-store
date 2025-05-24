import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/Authprovider';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { setUser } = useContext(AuthContext); // Optional: if you're managing user state
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser && setUser(result.user);
        form.reset();
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser && setUser(result.user);
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Login to Your Account</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleEmailLogin} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 px-2 py-3"
              placeholder="Email address"
            />
            <label className="absolute left-2 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 px-2 py-3"
              placeholder="Password"
            />
            <label className="absolute left-2 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">Or sign in with</p>
          <button
            onClick={handleGoogleLogin}
            className="mt-2 w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded hover:bg-blue-50 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="text-sm text-gray-700 font-medium">Continue with Google</span>
          </button>
        </div>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don’t have an account? <a href="/signup" className="text-blue-700 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
