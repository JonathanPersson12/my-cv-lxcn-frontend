import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import cvData, { theme } from "../data/cvData";

const WorkExperience = ({ data }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded">
          <FaBriefcase className="text-white text-sm" />
        </div>
        <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          WORK EXPERIENCE
        </h2>
      </div>

      <div className="space-y-4">
        {data.map((job, index) => (
          <div key={index} className="relative">
            {/* Timeline line */}
            {index !== data.length - 1 && (
              <div className="absolute left-3 top-8 w-0.5 h-full bg-gradient-to-b from-blue-300 to-purple-300 -z-10"></div>
            )}

            <div className="flex gap-3">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-lg p-3 border border-gray-100">
                <div className="mb-2">
                  <h3 className="text-base font-bold text-gray-800 hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-purple-600 font-semibold">
                    <span>{job.company}</span>
                    {job.location && (
                      <>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs" />
                          <span>{job.location}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xm text-gray-500 mt-1">
                    <FaCalendarAlt className="text-xs" />
                    {job.period}
                  </div>
                </div>

                <ul className="space-y-1">
                  {job.details.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xm text-gray-700 leading-relaxed"
                    >
                      <FaChevronRight className="text-blue-500 text-xs mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
