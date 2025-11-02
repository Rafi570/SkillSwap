import React, { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const About = () => {
  const navigate = useNavigate();  
  const { user } = use(AuthContext);

  const handleGetStarted =()=>{
     if (user) {

      navigate("/");
    } else {

      navigate("/auth/register");
    }

  }
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-20 py-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">
          About SkillSwap
        </h1>
        <p className="mt-4 text-gray-700 text-base sm:text-lg">
          A local platform to exchange skills, learn new talents, and connect with your community.
        </p>
      </header>

      {/* How It Works */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">Offer Skills</h2>
          <p className="text-gray-600">
            Share your talents and help others learn. From guitar lessons to coding, you can offer any skill.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">Learn Skills</h2>
          <p className="text-gray-600">
            Browse local listings to find someone who can teach you a skill you want to master.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">Connect & Trade</h2>
          <p className="text-gray-600">
            Meet people in your area, rate experiences, and build a community around learning.
          </p>
        </div>
      </section>


      <section className="mb-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">
          Why Choose SkillSwap?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg">
          SkillSwap makes skill exchange easy, trustworthy, and local. Build connections, gain experience, and explore your interests in a safe, engaging environment.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-gray-700 mb-4 text-lg sm:text-xl">
          Ready to start learning or sharing your skills?
        </p>
        <button onClick={handleGetStarted} className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
