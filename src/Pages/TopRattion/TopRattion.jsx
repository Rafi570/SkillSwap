import React from "react";
import HowItsWork from "../HowItsWork/HowItsWork";

const TopRated = () => {
  const providers = [
    {
      id: 1,
      name: "Alex Martin",
      skill: "Beginner Guitar Lessons",
      rating: 4.8,
      price: 20,
      slots: 3,
      image: "https://i.ibb.co/C3rhPR7f/istockphoto-1193517744-1024x1024.jpg",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      skill: "Introduction to Python Programming",
      rating: 4.9,
      price: 35,
      slots: 2,
    "image": "https://i.ibb.co.com/7tKhr8hM/Python-programming-logo-on-transparent-background-PNG.png",
    },
    {
      id: 3,
      name: "Priya Sharma",
      skill: "Yoga for Stress Relief",
      rating: 4.7,
      price: 15,
      slots: 7,
      image: "https://i.ibb.co.com/nXhb8JJ/images.png",
    },
    {
      id: 4,
      name: "David Lee",
      skill: "Basic Photography Composition",
      rating: 4.8,
      price: 30,
      slots: 3,
      image: "https://i.ibb.co.com/Fk0Z34LV/images-2.jpg",
    },
  ];

  return (
    <section
    data-aos="fade-up"
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Top Rated Providers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {providers.map((p, index) => (
          <div
            key={p.id}
            className={`flex flex-col items-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center`}
          >
            <div className="w-24 h-24 mb-4">
              <img
                src={p.image}
                alt={p.skill}
                className="w-full h-full object-cover rounded-full border-2 border-blue-500"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{p.skill}</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-medium">
                ⭐ {p.rating}
              </span>
              <span className="text-gray-600 text-sm">{p.slots} slots</span>
            </div>
            <p className="text-blue-600 font-bold">${p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRated;
