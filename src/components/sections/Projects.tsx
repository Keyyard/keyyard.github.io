import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Projects } from "../../data";
import SafeImage from "../ui/SafeImage";

const ProjectsSection = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);
  const skeletons = Array.from({ length: 3 });

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <span className="text-xs text-gray-400 text-right block">
        Download counts are aggregated from multiple sources.
      </span>
      <div className="px-6 mx-auto py-6 pb-32 space-y-6">
        {loading
          ? skeletons.map((_, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg bg-gray-200 animate-pulse h-32 flex items-center p-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gray-300 mr-6" />
                <div className="flex-1 space-y-3">
                  <div className="h-6 w-1/2 bg-gray-300 rounded" />
                  <div className="h-4 w-1/3 bg-gray-200 rounded" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                  <div className="flex gap-2 mt-2">
                    <div className="h-4 w-12 bg-gray-300 rounded" />
                    <div className="h-4 w-10 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>
            ))
          : Projects.map((proj, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // onClick={() => openModal(proj)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${
                      proj.imgs && proj.imgs[0] ? proj.imgs[0] : ""
                    })`,
                  }}
                />
                {/* Content */}
                <div className="relative z-10 flex items-center p-6">
                  {/* Project Icon */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gray-700 shadow-lg">
                    {proj.icon && (
                      <SafeImage
                        src={proj.icon}
                        alt={`${proj.title} icon`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  {/* Project Info */}
                  <div className="flex-1 ml-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="sm:text-md md:text-2xl font-bold text-white">
                        {proj.title}
                      </h3>
                      {proj.status && (
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            proj.status === "Live"
                              ? "bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30"
                              : proj.status === "In Development"
                                ? "bg-yellow-500 bg-opacity-20 text-yellow-400 border border-yellow-500 border-opacity-30"
                                : "bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-500 border-opacity-30"
                          }`}
                        >
                          {proj.status}
                        </span>
                      )}
                      {proj.featured && (
                        <span className="px-2 py-1 text-xs font-medium bg-purple-500 bg-opacity-20 text-purple-400 border border-purple-500 border-opacity-30 rounded-full">
                          ⭐
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-xs text-gray-300 mb-2">
                      {proj.short_info}
                    </p>
                    <p className="text-gray-400 text-sm sm:text-xs leading-relaxed mb-3">
                      {proj.description}
                    </p>
                    {proj.tags && proj.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs bg-gray-700 bg-opacity-50 text-gray-300 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        <span className="text-xs text-gray-400 text-right block mt-8">
          This list only includes some of my projects.
        </span>
      </div>
    </section>
  );
};

export default ProjectsSection;
