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
      <div className="flex flex-wrap gap-4">
        {data.map((lang, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center text-sky-600 hover:text-purple-800 transition"
          >
            <img
              src={lang.icon}
              alt={lang.name}
              className="w-8 h-8 object-contain"
            />
            <span
              className={`text-xs mt-1 px-2 py-0.5 rounded-full ${
                lang.level === "Native"
                  ? "bg-red-100 text-red-700"
                  : lang.level === "Fluent"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {lang.level}
            </span>

            {/* Star rating (optional to use can comment it out if want to) */}
            <div className="flex gap-0.5 mt-1">{renderStars(lang.level)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
