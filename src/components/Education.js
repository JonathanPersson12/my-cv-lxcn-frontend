import React from "react";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaChevronRight,
} from "react-icons/fa";

const Education = ({ data }) => {
  return (
    <div className="cv-section cv-education-section">
      <div className="cv-section-heading flex items-center gap-2 mt-4 mb-4">
        <div className="cv-heading-icon p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded">
          <FaGraduationCap className="text-white text-sm" />
        </div>
        <h2 className="text-lg font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          EDUCATION
        </h2>
      </div>

      <div className="cv-entry-list space-y-4">
        {data.map((edu, index) => (
          <div key={index} className="cv-entry relative">
            <div className="flex gap-3">
              <div className="cv-entry-marker flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                <FaUniversity className="text-white text-xs" />
              </div>

              <div className="cv-entry-card flex-1 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-lg p-3 border border-gray-100">
                <div className="cv-entry-header mb-2">
                  <h3 className="cv-entry-title text-base font-bold text-gray-800">
                    {edu.title}
                  </h3>
                  <div className="cv-entry-company flex items-center gap-1 text-sm font-semibold text-purple-600">
                    <FaUniversity className="text-xs" />
                    {edu.school}
                  </div>
                  <div className="cv-entry-period flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <FaCalendarAlt className="text-xs" />
                    {edu.period}
                  </div>
                </div>

                {edu.details && edu.details.length > 0 && (
                  <ul className="cv-bullet-list space-y-1">
                    {edu.details.map((point, i) => (
                      <li
                        key={i}
                        className="cv-bullet flex items-start gap-2 text-xs text-gray-700 leading-relaxed"
                      >
                        <FaChevronRight className="text-indigo-500 text-xs mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

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
