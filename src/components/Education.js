import React from "react";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaChevronRight,
} from "react-icons/fa";
import cvData, { theme } from "../data/cvData";

const Education = ({ data }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mt-4 mb-4">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded">
          <FaGraduationCap className="text-white text-sm" />
        </div>
        <h2 className="text-lg font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          EDUCATION
        </h2>
      </div>

      <div className="space-y-4">
        {data.map((edu, index) => (
          <div key={index} className="relative">
            <div className="flex gap-3">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                <FaUniversity className="text-white text-xs" />
              </div>

              {/* Content */}
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-lg p-3 border border-gray-100">
                <div className="mb-2">
                  <h3 className="text-base font-bold text-gray-800 hover:text-indigo-600 transition-colors">
                    {edu.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm font-semibold text-purple-600">
                    <FaUniversity className="text-xs" />
                    {edu.school}
                  </div>
                  <div className="flex items-center gap-1 text-xm text-gray-500 mt-1">
                    <FaCalendarAlt className="text-xs" />
                    {edu.period}
                  </div>
                </div>

                {edu.details && edu.details.length > 0 && (
                  <ul className="space-y-1">
                    {edu.details.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xm text-gray-700 leading-relaxed"
                      >
                        <FaChevronRight className="text-indigo-500 text-xs mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Achievement badge */}
                {edu.gpa && (
                  <div className="mt-2 inline-flex items-center gap-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    <FaGraduationCap className="text-xs" />
                    GPA: {edu.gpa}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
