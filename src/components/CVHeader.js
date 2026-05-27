import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

const CVHeader = ({ data, plainImg = false }) => {
  return (
    <div className="text-center">
      {/* plainImg is used by the older print page. The normal app uses
          next/image for better image handling in the browser. */}
      <div className="relative mb-4 flex justify-center">
        <div className="relative w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg overflow-hidden flex items-center justify-center">
          {plainImg ? (
            <img
              src="/cv-photo.png" // Photo for CV profile stored in /public
              alt={data.name}
              width={160}
              height={160}
              className="w-full h-[96%] object-cover"
              style={{ objectPosition: "50% 42%" }}
            />
          ) : (
            <Image
              src="/cv-photo.png" // Photo for CV profile stored in /public
              alt={data.name}
              width={160}
              height={160}
              className="w-full h-[96%] object-cover"
              style={{ objectPosition: "50% 42%" }}
              unoptimized // bypass Next optimizer, safer for print/Puppeteer
              priority
            />
          )}
        </div>
      </div>

      {/* Name */}
      <h1 className="text-xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {data.name}
      </h1>

      {/* Some CV versions use a two-line headline. Versions without a headline
          fall back to a shorter title field. */}
      {data.headline ? (
        <div className="mb-4 px-2">
          <p className="text-base font-bold text-blue-600 leading-tight mb-0.5">
            {data.headline.split("\n")[0]}
          </p>
          <p className="text-xs text-gray-600 font-medium leading-relaxed">
            {data.headline.split("\n")[1]}
          </p>
        </div>
      ) : (
        <p className="text-sm text-blue-600 font-semibold mb-4 px-2">
          {data.title}
        </p>
      )}

      {/* Contact fields live under data.contact in the new data structure.
          The fallback fields keep older data shapes from crashing. */}
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
