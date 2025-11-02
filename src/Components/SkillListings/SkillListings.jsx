import React, { useRef, useState, useEffect } from "react";
import { useTransition, animated } from '@react-spring/web';

const skillData = [
  // ... your skillData array (kept the same for brevity)
  { skillId: 1, skillName: "Beginner Guitar Lessons", providerName: "Alex Martin", price: 20, rating: 4.8, slotsAvailable: 3, description: "Acoustic guitar classes for complete beginners.", category: "Music" },
  { skillId: 2, skillName: "Spoken English Practice", providerName: "Sara Hossain", price: 10, rating: 4.6, slotsAvailable: 5, description: "Conversational English sessions for non-native speakers.", category: "Language" },
  { skillId: 3, skillName: "Introduction to Python Programming", providerName: "Rajesh Kumar", price: 35, rating: 4.9, slotsAvailable: 2, description: "Fundamental concepts of Python for absolute beginners.", category: "Technology" },
  { skillId: 4, skillName: "Yoga for Stress Relief", providerName: "Priya Sharma", price: 15, rating: 4.7, slotsAvailable: 7, description: "Gentle yoga poses and breathing techniques to calm the mind.", category: "Health & Fitness" },
  // ... rest of the data
];

const SkillListings = () => {
  // 1. Ref and State remain the same
  const listRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 2. Modified Effect for Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // --- KEY MODIFICATION HERE ---
        // isIntersecting true hole animation start (isVisible = true)
        // isIntersecting false hole animation reset (isVisible = false)
        setIsVisible(entry.isIntersecting); 
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    // Cleanup function
    return () => {
      if (listRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(listRef.current);
      }
    };
  }, []);

  // 3. useTransition depends on the 'isVisible' state
  const transitions = useTransition(isVisible ? skillData : [], {
    key: (item) => item.skillId,
    // Animation starts ONLY when isVisible is true
    from: { opacity: 0, transform: 'translate3d(0,30px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0 },
    trail: 120, // Staggered delay (120ms)
    delay: 100,
  });

  return (
    <div className="py-12 sm:py-16 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Same as before) */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900">
            All Skill <span className="text-blue-600">Offerings</span>
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            A complete list of local skills available for exchange or learning.
          </p>
        </div>

        {/* 4. Attach the ref to the list container */}
        <div 
          ref={listRef} 
          className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg"
        >
          
          {/* List Header/Columns (Same as before) */}
          <div className="hidden md:grid grid-cols-6 text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 p-4 border-b border-gray-200">
            <div className="col-span-2">Skill Name</div>
            <div>Category</div>
            <div>Provider</div>
            <div className="text-center">Rating</div>
            <div className="text-center">Price / Book</div>
          </div>

          {/* Individual Skill Rows - USING REACT-SPRING */}
          <ul className="divide-y divide-gray-200">
            {transitions((style, skill) => (
              <animated.li
                style={style}
                key={skill.skillId}
                className="p-4 transition duration-300 hover:bg-blue-50/50"
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-6 items-center">
                   {/* ... content for skill listing row ... */}
                   <div className="col-span-2 pr-4">
                    <p className="font-semibold text-lg text-gray-900">{skill.skillName}</p>
                    <p className="text-xs text-gray-500 truncate">{skill.description}</p>
                  </div>
                  <div className="text-sm font-medium text-blue-600">{skill.category}</div>
                  <div className="text-sm text-gray-600">{skill.providerName}</div>
                  <div className="text-center flex items-center justify-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.631-.921 1.932 0l1.24 3.81c.11.336.417.579.761.579h4.026c.969 0 1.371 1.24.588 1.81l-3.264 2.373c-.279.203-.393.553-.274.887l1.24 3.81c.3.921-.755 1.688-1.547 1.118l-3.264-2.373c-.344-.25-.82-.25-1.164 0l-3.264 2.373c-.792.57-1.847-.197-1.547-1.118l1.24-3.81c.119-.334.005-.684-.274-.887L2.454 9.126c-.783-.57-.381-1.81.588-1.81h4.026c.344 0 .651-.243.761-.579l1.24-3.81z" /></svg>
                    <span className="text-sm font-semibold">{skill.rating}</span>
                  </div>
                  <div className="text-center">
                    <button className="px-3 py-1 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 transition duration-150">${skill.price} | Book</button>
                    <p className="text-xs text-red-500 mt-1">{skill.slotsAvailable} slots</p>
                  </div>
                </div>
                {/* Mobile Layout */}
                <div className="md:hidden space-y-2">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-900">{skill.skillName}</p>
                        <button className="px-3 py-1 text-sm font-semibold rounded text-white bg-blue-600">${skill.price}</button>
                    </div>
                    <p className="text-sm text-blue-600 font-medium">{skill.category} by {skill.providerName}</p>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                    <div className="flex justify-between items-center text-sm pt-2">
                        <span className="text-red-500 font-medium">Slots Left: {skill.slotsAvailable}</span>
                        <div className="flex items-center space-x-1 text-gray-700">
                           <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.631-.921 1.932 0l1.24 3.81c.11.336.417.579.761.579h4.026c.969 0 1.371 1.24.588 1.81l-3.264 2.373c-.279.203-.393.553-.274.887l1.24 3.81c.3.921-.755 1.688-1.547 1.118l-3.264-2.373c-.344-.25-.82-.25-1.164 0l-3.264 2.373c-.792.57-1.847-.197-1.547-1.118l1.24-3.81c.119-.334.005-.684-.274-.887L2.454 9.126c-.783-.57-.381-1.81.588-1.81h4.026c.344 0 .651-.243.761-.579l1.24-3.81z" /></svg>
                           {skill.rating}
                        </div>
                    </div>
                </div>
              </animated.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillListings;