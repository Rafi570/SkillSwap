import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

const SkilledDetails = () => {
  const { id } = useParams();
  const data = useLoaderData(); // assume this is an array of skills

  // 🔹 Find the skill with matching id
  const skill = data.find((item) => item.skillId === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking successful!");
    setFormData({ name: "", email: "" });
  };

  if (!skill) {
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">
        Skill not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-2xl border border-gray-100">
      {/* 🖼 Image */}
       <Toaster position="top-right" reverseOrder={false} />
      <div className="relative w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden rounded-2xl shadow-md mb-6">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
        />
        <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          ⭐ {skill.rating}
        </span>
      </div>

      {/* 🧠 Skill Info */}
      <div className="space-y-3 mb-8 px-2 sm:px-0">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          {skill.skillName}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">By {skill.providerName}</p>
        <p className="text-gray-500 text-sm sm:text-base">📧 {skill.providerEmail}</p>
        <p className="text-gray-700 text-base sm:text-lg">{skill.description}</p>
        <p className="text-gray-800 font-medium">
          💰 Price: <span className="text-blue-600">${skill.price}</span>
        </p>
        <p className="text-gray-600">🧑‍🎓 Slots Available: {skill.slotsAvailable}</p>
        <p className="text-gray-500">📂 Category: {skill.category}</p>
      </div>

      {/* 📋 Booking Form */}
      <div className="border-t border-gray-200 pt-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Book a Session</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkilledDetails;
