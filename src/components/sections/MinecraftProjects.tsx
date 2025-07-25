

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { mcProjects } from "../../data";
import { Suspense, lazy } from "react";

const SafeImage = lazy(() => import("../ui/SafeImage"));
const SafeCarousel = lazy(() => import("../ui/SafeCarousel"));

const MinecraftProjects = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);
  const skeletons = Array.from({ length: 5 });
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Minecraft Projects</h2>
      <span className="text-xs text-gray-400 text-right block">
        Download counts are aggregated from multiple sources.
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 pb-32">
        {loading
          ? skeletons.map((_, i) => (
              <div key={i} className="group">
                <div className="project-card animate-pulse flex flex-col gap-2">
                  <div className="bg-gray-300 h-6 w-3/4 rounded mb-2" />
                  <div className="bg-gray-200 h-4 w-1/2 rounded mb-1" />
                  <div className="bg-gray-200 h-4 w-full rounded mb-1" />
                  <div className="bg-gray-200 h-32 w-full rounded mb-2" />
                  <div className="flex gap-2 mt-2">
                    <div className="bg-gray-300 h-6 w-16 rounded" />
                    <div className="bg-gray-300 h-6 w-16 rounded" />
                  </div>
                </div>
              </div>
            ))
          : mcProjects.map((proj, index) => (
              <div key={index} className="group">
                <motion.div
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="project-title">
                    <span className="truncate">{proj.title}</span>
                    {proj.downloads && (
                      <Suspense fallback={<span className="inline-block ml-2 h-5 bg-gray-200 rounded w-12 animate-pulse" />}>
                        <SafeImage
                          className="inline-block ml-2 h-5"
                          alt="downloads"
                          src={`https://img.shields.io/badge/downloads-${proj.downloads}-blue`}
                        />
                      </Suspense>
                    )}
                  </h3>
                  <h4 className="project-subtitle">{proj.short_info}</h4>
                  <h4 className="project-description">
                    {proj.description}
                  </h4>
                  <Suspense fallback={<div className="h-32 w-full bg-gray-200 animate-pulse rounded mb-2" />}>
                    <SafeCarousel
                      className="mt-3 mb-3"
                      images={proj.imgs || []}
                      alt={proj.title}
                    />
                  </Suspense>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {proj.links &&
                      proj.links.map((linkObj, i) => (
                        <a
                          key={i}
                          href={linkObj.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs font-bold inline-block px-3 py-1.5 rounded-lg shadow-inner shadow-black ${
                            linkObj.name === "Github"
                              ? "bg-[#5a4378] text-white hover:bg-[#5a4378]"
                              : linkObj.name === "MCPEDL"
                              ? "bg-[#7CBB7C] text-[#242424] hover:bg-[#97C997] hover:text-[#383838]"
                              : linkObj.name === "CurseForge"
                              ? "bg-[#F5A184] text-[#242424] hover:bg-[#F7B39C] hover:text-[#383838]"
                              : "bg-[#333] text-white hover:bg-[#333]"
                          }`}
                        >
                          {linkObj.name}
                        </a>
                      ))}
                  </div>
                </motion.div>
              </div>
            ))}
        <span className="text-xs text-gray-400 text-right block">
          <p>This list only includes some of my projects.</p>
        </span>
      </div>
    </section>
  );
};

export default MinecraftProjects;
