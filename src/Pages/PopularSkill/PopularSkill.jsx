import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import SingleSkill from "../SingleSkill/SingleSkill";

const PopularSkill = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/skilledData.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Top Skills in Your Community
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            Discover the most in-demand skills people are sharing locally.
          </p>
        </div>

        {/* Cards Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="w-32 h-32 border-8 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(0, 8).map((skill) => (
                <SingleSkill key={skill.skillId} skill={skill} />
              ))}
            </div>

            {/* Show All Button */}
            <div className="text-center mt-8">
              <Link
                to="/all-skill"
                className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition transform duration-300"
              >
                Show All
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PopularSkill;
