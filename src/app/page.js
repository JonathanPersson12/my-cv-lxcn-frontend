"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { FaUser } from "react-icons/fa";
import cvData from "@/data/cvData";
import CVHeader from "@/components/CVHeader";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Language from "@/components/Language";
import Footer from "@/components/Footer";

export default function HomePage() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "CV",
    pageStyle: `
  @page {
    size: 1000px 1530px;
    margin: 0;
  }

  @media print {
    html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    .cv-container {
      width: 700px !important; /* exact A3 portrait width in px at 96 DPI */
      height: 1530px !important; /* exact A3 portrait height in px at 96 DPI */
      box-shadow: none !important;
      overflow: hidden !important;
      page-break-before: avoid !important;
      page-break-after: avoid !important;
      page-break-inside: avoid !important;
    }

    * {
      break-inside: avoid !important;
      page-break-inside: avoid !important;
    }

    button, .no-print {
      display: none !important;
    }
  }
`,
  });

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 relative">
      {/* PDF Content */}
      <div
        ref={componentRef}
        className="cv-container w-[900px] bg-white shadow-xl flex flex-col text-sm font-sans"
      >
        <div className="flex flex-row">
          {/* Left Column */}
          <aside className="w-[32%] bg-sky-50 border-r border-sky-200 p-5 flex flex-col gap-6">
            <CVHeader data={cvData} />
            <Skills
              techSkills={cvData.techSkills}
              softSkills={cvData.softSkills}
            />
            <Language data={cvData.language} />
          </aside>

          {/* Right Column */}
          <section className="w-[70%] p-6 pr-8 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded">
                <FaUser className="text-white text-sm" />
              </div>
              <h2 className="text-lg font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PROFILE
              </h2>
            </div>
            <div className="mb-4 text-gray-800 text-sm leading-relaxed">
              {cvData.about}
            </div>
            <WorkExperience data={cvData.work} />
            <Education data={cvData.education} />
          </section>
        </div>
      </div>

      {/* PDF Button */}
      <div className="absolute top-6 right-6 flex flex-col gap-2 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          Download PDF
        </button>
      </div>
    </main>
  );
}
