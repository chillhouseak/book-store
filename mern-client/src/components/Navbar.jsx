import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contexts/Authprovider';
import { getAuth, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Shop", path: "/shop" },
    { label: "Sell Your Book", path: "/admin/dashboard" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? "bg-white shadow" : "bg-transparent"}`}>
      <nav className="py-4 px-4 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-1">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">📚 Epic-Book</h2>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-base font-medium items-center">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="text-gray-800 hover:text-blue-700 transition"
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Auth Buttons */}
          {
            user ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 rounded transition"
                >
                  Login
                </Link>
              </li>
            )
          }
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-800">
            {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-6 space-y-4 text-white fixed top-16 left-0 right-0 z-40 shadow-md">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {
            user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block text-white uppercase w-full text-left"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white uppercase"
              >
                Login
              </Link>
            )
          }
        </div>
      )}
    </header>
  );
};

export default Navbar;
