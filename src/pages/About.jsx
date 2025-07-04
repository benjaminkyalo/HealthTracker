
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            MyHealthTracker is a platform created to empower individuals with accurate and reliable health information. 
            We aim to bridge the gap between complex medical topics and everyday understanding by providing clear, 
            accessible content based on trusted sources.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our goal is to help you make informed decisions about your well-being by giving you tools and knowledge 
            rooted in evidence-based practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
