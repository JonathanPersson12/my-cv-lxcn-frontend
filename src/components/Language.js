import React from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import cvData, { theme } from "../data/cvData";

const Language = ({ data }) => {
  const getSkillLevel = (level) => {
    const levels = {
      Beginner: 1,
      Intermediate: 2,
      Fluent: 4,
      Native: 5,
    };
    return levels[level] || 3;
  };

  const renderStars = (level) => {
    const count = getSkillLevel(level);
    return [...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`w-1.5 h-1.5 rounded-full ${
          i < count ? "bg-purple-500" : "bg-gray-300"
        }`}
      />
    ));
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1 mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded">
          <FaCode className="text-white text-xs" />
        </div>
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          LANGUAGE
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {data.map((lang, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={lang.icon} alt={lang.name} className="w-6 h-6 object-contain" />
            <div className="text-sm text-gray-800">
              <span className="font-medium">{lang.name}</span>
              <span className="text-gray-600"> &nbsp;–&nbsp; {lang.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
