// app/cv/print/page.jsx
import cvData from "@/data/cvData";
import CVHeader from "@/components/CVHeader";
import Skills from "@/components/Skills";
import Language from "@/components/Language";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import { FaUser } from "react-icons/fa"; // 👈 add this

export const metadata = { title: "CV – Print" };

export default function CVPrintPage() {
  return (
    <main className="sheet">
      <div className="sheet-inner">
        <div className="flex">
          {/* LEFT COLUMN – PROFILE / SKILLS / LANGUAGES */}
          <aside
            className="
              w-[33%]
              bg-sky-50 border-r border-sky-200
              pr-7 py-4 pl-6
              flex flex-col gap-5
              text-[13px] leading-relaxed
            "
          >
            <CVHeader data={cvData} plainImg />

            <section className="space-y-5">
              <Skills
                techSkills={cvData.techSkills}
                softSkills={cvData.softSkills}
              />
            </section>

            <section className="space-y-3">
              <Language data={cvData.language} />
            </section>
          </aside>

          {/* RIGHT COLUMN – PROFILE + EXPERIENCE + EDUCATION */}
          <section
            className="
              w-[67%]
              pl-8 pr-8 py-4
              flex flex-col gap-4
              text-[14px]
            "
          >
            {/* PROFILE heading – same style as on home page */}
            <div className="flex items-center gap-2 ">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded">
                <FaUser className="text-white text-sm" />
              </div>
              <h2 className="text-lg font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
                PROFILE
              </h2>
            </div>

            <p className="mb-3 text-gray-800 avoid-break">{cvData.about}</p>

            <div className="experience avoid-break">
              <WorkExperience data={cvData.work} />
            </div>

            <div className="education avoid-break">
              <Education data={cvData.education} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
