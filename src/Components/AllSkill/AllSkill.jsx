import React, { useState, useEffect } from "react";
import SingleSkill from "../../Pages/SingleSkill/SingleSkill";

const AllSkill = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/skilledData.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setFilteredData(resData);
        // Unique categories
        const uniqueCategories = [
          "All",
          ...new Set(resData.map((skill) => skill.category)),
        ];
        setCategories(uniqueCategories);
        setIsLoading(false);
      });
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((skill) => skill.category === category));
    }
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            All Available Skills
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            Browse all the skills shared by our community members.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
{/* Sidebar Filter */}
<aside className="lg:w-1/4 bg-white rounded-2xl shadow-md p-6 flex-shrink-0 sticky top-20 self-start">
  <h3 className="text-xl font-bold mb-4">Filter by Category</h3>
  <ul className="space-y-2">
    {categories.map((category) => (
      <li key={category}>
        <button
          className={`w-full text-left px-4 py-2 rounded-lg transition ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-blue-100"
          }`}
          onClick={() => handleFilter(category)}
        >
          {category}
        </button>
      </li>
    ))}
  </ul>
</aside>


          {/* Skills Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="flex justify-center items-center h-96">
                <div className="w-32 h-32 border-8 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            ) : filteredData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {filteredData.map((skill) => (
                  <SingleSkill key={skill.skillId} skill={skill} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center">
                No skills found for "{selectedCategory}"
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSkill;
