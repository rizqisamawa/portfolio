import Head from "next/head";
import Navbar from "../components/navbar";
import ScrollingButton from "../components/scrollingButton";
import data from "../data/data.json";
import { useMemo } from "react";

function Experience() {
  const groupedByYear = useMemo(() => {
    const groups = {};

    data.experience.forEach((project) => {
      const year = project.year;
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(project);
    });

    return Object.entries(groups)
      .sort((a, b) => b[0] - a[0])
      .map(([year, projects]) => [year, projects.sort((a, b) => b.id - a.id)]);
  }, []);

  return (
    <>
      <Head>
        <title>Experience | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        {groupedByYear.map(([year, projects]) => (
          <div key={year} className="mb-10">
            <h2 className="mb-4 text-xl sm:text-2xl font-semibold font-mono">
              PROJECT {year}
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-xl border border-gray-300 bg-white p-5 shadow-sm transition hover:shadow-lg min-h-[300px]"
                >
                  <div className="flex flex-col grow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {project.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-gray-500 text-right">
                        {project.duration}
                      </span>
                    </div>

                    {/* Subheader: ProjectType & Source */}
                    <div className="mt-3 flex justify-between items-start">
                      <span className="rounded bg-gray-100 px-3 py-1 text-[10px] sm:text-xs font-semibold text-gray-800 whitespace-nowrap">
                        {project.projectType}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-600 italic text-right">
                        {project.source}
                      </span>
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-gray-700">
                      {project.description}
                    </p>

                    {project.contributions && (
                      <ul className="mt-3 list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                        {project.contributions.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-auto pt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="rounded bg-gray-200 px-2 py-1 text-[10px] sm:text-xs text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-4 justify-end">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] sm:text-xs font-medium text-white bg-gray-800 rounded px-2 py-1"
                      >
                        Github
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ScrollingButton />
    </>
  );
}

export default Experience;
