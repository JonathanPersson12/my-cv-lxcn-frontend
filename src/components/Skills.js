import React from "react";
import { FaCode, FaUsers } from "react-icons/fa";
import Image from "next/image";
import cvData, { theme } from "../data/cvData";

const Skills = ({ techSkills, softSkills }) => {
  const getSkillLevel = (level) => {
    const levels = {
      Beginner: 1,
      Intermediate: 2,
      Advanced: 3,
      Expert: 4,
      Master: 5,
    };
    return levels[level] || 3;
  };

  const renderStars = (level) => {
    const numLevel = getSkillLevel(level);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i <= numLevel ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="space-y-6">
      {/* Technical Skills */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded">
            <FaCode className="text-white text-xs" />
          </div>
          <h3 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:whitespace-nowrap">
            TECHNICAL SKILLS
          </h3>
        </div>

        {/* slightly tighter grid so long labels wrap nicer */}
        <div className="grid grid-cols-3 gap-8">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-1"
            >
              {skill.icon && (
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={32}
                  height={32}
                  className="object-contain"
                  unoptimized
                />
              )}

              {/* smaller, centered, clean wrapping for long names */}
              <p className="text-[10px] leading-tight font-medium text-gray-800 break-words mt-1 max-w-[100px] text-center">
                {skill.name}
              </p>

              {/* Level badge / stars kept commented out for now */}
              {/* <span ...>{skill.level}</span> */}
              {/* <div className="flex gap-0.5 mt-1">{renderStars(skill.level)}</div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills*/}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1 mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded">
            <FaUsers className="text-white text-xs" />
          </div>
          <h3 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            SOFT SKILLS
          </h3>
        </div>

        <div className="space-y-1">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded px-2 py-1 text-xs"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-800 font-medium">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
