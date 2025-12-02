import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    console.log("Contact form submitted:", formData);
    toast.success("Message sent successfully!");

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className=" py-16">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-600">
          Contact Us
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition transform duration-300 w-full"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
