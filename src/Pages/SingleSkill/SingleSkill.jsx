import React from "react";
import { Link } from "react-router";

const SingleSkill = ({ skill }) => {
  return (
    <div
      data-aos="fade-up"
      className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1"
    >
      {/* 🖼 Image Section */}
      <div className="relative w-full overflow-hidden flex justify-center items-center bg-gray-50">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="max-h-60 w-auto transition-transform duration-700 group-hover:scale-105"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          ⭐ {skill.rating}
        </div>
      </div>

      {/* 📄 Content Section */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {skill.skillName}
        </h3>
        <p className="text-gray-500 text-sm mb-2">By {skill.providerName}</p>

        <p className="text-gray-600 text-sm mb-3 flex-grow line-clamp-2">
          {skill.description ||
            "Learn and exchange valuable skills with local experts."}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 font-semibold">
            💰 <span className="text-blue-600">${skill.price}</span>
          </span>
          <span className="text-sm text-gray-500">
            {skill.slotsAvailable} slots left
          </span>
        </div>

        <Link to={`/skillDetails/${skill.skillId}`}>
          <button className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleSkill;
