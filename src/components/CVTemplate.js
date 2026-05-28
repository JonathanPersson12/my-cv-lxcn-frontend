import CVHeader from "@/components/CVHeader";
import Skills from "@/components/Skills";
import Language from "@/components/Language";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import { FaUser } from "react-icons/fa";

export default function CVTemplate({ cvData, showDownload = true }) {
  return (
    <main className="cv-page min-h-screen flex items-start justify-center p-6 relative">
      <div className="sheet bg-white shadow-xl">
        <div className="sheet-inner">
          <div className="cv-layout flex">
            <aside className="cv-sidebar w-[30%] bg-sky-50 border-r border-sky-200 p-5 flex flex-col gap-6">
              <CVHeader data={cvData} />
              <Skills techSkills={cvData.techSkills} softSkills={cvData.softSkills} />
              <Language data={cvData.language} />
            </aside>

            <section className="cv-main w-[70%] p-6 pr-8 flex flex-col gap-2">
              <div className="cv-section-heading flex items-center gap-2 mb-2">
                <div className="cv-heading-icon p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded">
                  <FaUser className="text-white text-sm" />
                </div>
                <h2 className="text-lg font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  PROFILE
                </h2>
              </div>

              <p className="cv-profile-text mb-4 text-gray-800 text-sm leading-relaxed">
                {cvData.about}
              </p>
              <WorkExperience data={cvData.work} />
              <Education data={cvData.education} />
            </section>
          </div>
        </div>
      </div>

      {showDownload && (
        <div className="no-print fixed top-6 right-6 flex gap-2">
          <a
            href={`/api/cv-pdf/${cvData.slug}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Download PDF
          </a>
        </div>
      )}
    </main>
  );
}
