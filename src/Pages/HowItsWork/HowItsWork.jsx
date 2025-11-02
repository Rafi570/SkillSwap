import React from "react";
import {
  FaRegLightbulb,
  FaChalkboardTeacher,
  FaHandshake,
  FaSmile,
} from "react-icons/fa";

const HowItsWork = () => {
  const steps = [
    {
      id: 1,
      icon: <FaRegLightbulb className="text-blue-600 w-10 h-10" />,
      title: "Discover Skills",
      description:
        "Browse a variety of skills offered by local experts and top-rated providers.",
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher className="text-blue-600 w-10 h-10" />,
      title: "Book a Session",
      description:
        "Select your preferred skill and schedule a session that fits your timetable.",
    },
    {
      id: 3,
      icon: <FaHandshake className="text-blue-600 w-10 h-10" />,
      title: "Learn & Exchange",
      description:
        "Attend the session, interact with the provider, and learn valuable skills.",
    },
    {
      id: 4,
      icon: <FaSmile className="text-blue-600 w-10 h-10" />,
      title: "Grow & Enjoy",
      description:
        "Apply your new skills and enjoy the satisfaction of learning and exchanging knowledge.",
    },
  ];

  return (
    <section
    data-aos="fade-up"
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        How It Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl"
            
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItsWork;
