import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/Authprovider';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = form;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    createUser(email, password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Create Account</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-6">

          {/* Floating Input Group */}
          {["name", "email", "password", "confirmPassword"].map((field, index) => (
            <div className="relative" key={index}>
              <input
                type={field.toLowerCase().includes("password") ? "password" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 px-2 pt-6 pb-2 bg-transparent"
              />
              <label
                htmlFor={field}
                className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600"
              >
                {field === "confirmPassword" ? "Confirm Password" : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account? <a href="/login" className="text-blue-700 hover:underline">Login</a>
        </p>
      
      </div>
    </div>
  );
};

export default Signup;
