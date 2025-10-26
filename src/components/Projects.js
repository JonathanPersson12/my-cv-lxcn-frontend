import React from "react";
import cvData, { theme } from "../data/cvData";

const Projects = ({ projects }) => {
  if (!projects) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-600 border-b-2 border-purple-600 pb-2">
        PROJECTS
      </h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 italic">
                  {project.technologies}
                </p>
              </div>
              <span className="text-sm text-gray-500">{project.period}</span>
            </div>
            <ul className="list-none space-y-1">
              {project.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-700 flex items-start"
                >
                  <span className="text-purple-600 mr-2">▸</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
