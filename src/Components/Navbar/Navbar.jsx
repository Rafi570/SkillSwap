import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
        setOpen(false);
        navigate("/");
      })
      .catch(() => toast.error("Logout failed"));
  };

  // --- Ordered Links ---
  const links = (
    <>
      <NavLink
        to="/"
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `block px-4 py-2 rounded-md text-base font-semibold transition ${
            isActive
              ? "text-blue-600 bg-blue-50"
              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `block px-4 py-2 rounded-md text-base font-semibold transition ${
            isActive
              ? "text-blue-600 bg-blue-50"
              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `block px-4 py-2 rounded-md text-base font-semibold transition ${
            isActive
              ? "text-blue-600 bg-blue-50"
              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
          }`
        }
      >
        Contact
      </NavLink>

      {user && (
        <NavLink
          to="/profile"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-md text-base font-semibold transition ${
              isActive
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            }`
          }
        >
          My Profile
        </NavLink>
      )}
    </>
  );

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl text-gray-700"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>

            <img
              src={logo}
              alt="Logo"
              onClick={() => navigate("/")}
              className="w-9 h-9 cursor-pointer"
            />
            <span
              onClick={() => navigate("/")}
              className="text-xl font-bold text-blue-600 cursor-pointer"
            >
              SkillSwap
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">{links}</div>

          {/* Right Section (User / Auth Buttons) */}
          <div className="flex items-center gap-4">
            {user ? (
              user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  title={user.displayName || "User"}
                  className="w-9 h-9 rounded-full border border-blue-500 object-cover"
                />
              ) : (
                <FaUserCircle
                  size={32}
                  className="text-blue-500"
                  title={user?.displayName || "User"}
                />
              )
            ) : (
              <FaUserCircle size={32} className="text-blue-500" title="Guest" />
            )}

            {user ? (
              <button
                onClick={handleLogout}
                className="hidden md:block bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-3 rounded-lg transition"
              >
                Logout
              </button>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <NavLink
                  to="/auth/login"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg transition"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/auth/register"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg transition"
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start px-6 py-5 mt-14 space-y-3">
          {links}

          <div className="w-full border-t border-gray-200 pt-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink
                  to="/auth/login"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg transition"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/auth/register"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-lg transition mt-2"
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Navbar;
