import React from "react";
import { useNavigate } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
