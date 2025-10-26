import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";
import cvData, { theme } from "../data/cvData";

const CVHeader = ({ data }) => {
  return (
    <div className="text-center">
      {/* Profile Image */}
      <div className="relative mb-4 flex justify-center">
        <div className="relative">
          <Image
            src="/cv-picturekopia.jpg"
            alt={data.name}
            width={120}
            height={120}
            className="rounded-full border-3 border-blue-500 shadow-lg"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {data.name}
      </h1>

      {/* Title/Role */}
      <p className="text-sm text-blue-600 font-semibold mb-4 px-2">
        {data.title}
      </p>

      {/* Contact Info */}
      <div className="space-y-2 text-xs text-gray-700">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-blue-500 w-4 h-4 flex-shrink-0" />
          <span className="break-all">{data.contact?.email || data.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-blue-500 w-4 h-4 flex-shrink-0" />
          <span>{data.contact?.phone || data.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaGithub className="text-blue-500 w-4 h-4 flex-shrink-0" />
          <Link
            href={`https://github.com/${data.contact?.github || data.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-gray-500 hover:text-blue-700 hover:underline transition duration-300"
          >
            {data.contact?.github || data.github}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CVHeader;
