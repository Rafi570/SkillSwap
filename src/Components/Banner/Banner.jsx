import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Banner = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleGetStarted = () => {
    if (user) {
      navigate("/"); 
    } else {
      navigate("/auth/register");
    }
  }

  return (
    <section className="rounded-2xl relative bg-gradient-to-r from-blue-500 to-indigo-700 text-white overflow-hidden">

      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-24 flex flex-col md:flex-row items-center justify-between">

        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Learn, Share, and Connect Locally
          </h1>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed drop-shadow-sm">
            Join <span className="font-semibold">SkillSwap</span> and exchange skills with people in your community. From coding to yoga, everyone has something to teach and learn.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-100 hover:scale-105 transition transform duration-300 shadow-md"
          >
            {user ? "Go to Dashboard" : "Get Started"}
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://img.freepik.com/free-vector/online-education-concept-illustration_114360-6187.jpg?w=740&t=st=1708416371~exp=1708416971~hmac=1c2f94d4c90192cb256fc88a4aebf20912b750af7b1c9858c02291fa3ab7b2b4"
            alt="Learning Illustration"
            className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
