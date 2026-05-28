import React from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";

const Language = ({ data }) => {
  return (
    <div className="cv-language">
      <div className="cv-sidebar-heading flex items-center gap-2 mb-3">
        <div className="cv-sidebar-heading-icon p-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded">
          <FaCode className="text-white text-xs" />
        </div>
        <h2 className="skill-heading-title text-lg font-bold border-b border-gray-300 pb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          LANGUAGE
        </h2>
      </div>
      <div className="cv-language-list flex flex-col gap-3">
        {data.map((lang, index) => (
          <div key={index} className="cv-language-row flex items-center gap-3">
            <Image
              src={lang.icon}
              alt={lang.name}
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
              unoptimized
            />
            <div className="text-sm text-gray-800">
              <span className="font-medium">{lang.name}</span>
              <span className="text-gray-600"> - {lang.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
