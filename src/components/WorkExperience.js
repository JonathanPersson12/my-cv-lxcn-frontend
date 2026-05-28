import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

const WorkExperience = ({ data }) => {
  return (
    <div className="cv-section cv-work-section">
      <div className="cv-section-heading flex items-center gap-2 mb-4">
        <div className="cv-heading-icon p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded">
          <FaBriefcase className="text-white text-sm" />
        </div>
        <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          WORK EXPERIENCE
        </h2>
      </div>

      <div className="cv-entry-list space-y-4">
        {data.map((job, index) => (
          <div key={index} className="cv-entry relative">
            <div className="flex gap-3">
              <div className="cv-entry-marker flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                <div className="cv-entry-dot w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div className="cv-entry-card flex-1 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-lg p-3 border border-gray-100">
                <div className="cv-entry-header mb-2">
                  <h3 className="cv-entry-title text-base font-bold text-gray-800">
                    {job.title}
                  </h3>
                  <div className="cv-entry-company flex items-center gap-2 text-sm text-purple-600 font-semibold">
                    <span>{job.company}</span>
                    {job.location && (
                      <>
                        <span className="text-gray-400">|</span>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs" />
                          <span>{job.location}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="cv-entry-period flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <FaCalendarAlt className="text-xs" />
                    {job.period}
                  </div>
                </div>

                <ul className="cv-bullet-list space-y-1">
                  {job.details.map((point, i) => (
                    <li
                      key={i}
                      className="cv-bullet flex items-start gap-2 text-xs text-gray-700 leading-relaxed"
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
