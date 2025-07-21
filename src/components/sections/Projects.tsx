import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { Projects } from "../../data";
import { useState, useEffect } from "react";
import SafeImage from "../ui/SafeImage";

const OtherProjects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Determine how many tags to show based on screen size
  const getTagsToShow = () => {
    if (windowWidth === 0) return 4; // Default for SSR
    return windowWidth < 640 ? 1 : 4;
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        Projects
      </h2>
      <span className="text-xs text-gray-400 text-right block">
        Download counts are aggregated from multiple sources.
      </span>
      <div className="px-6 mx-auto py-6 pb-32 space-y-6">
        {Projects.map((proj, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-lg bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => openModal(proj)}
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
              {/* Project Icon - NEW: Using dedicated icon instead of first image */}
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
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="sm:text-md md:text-2xl font-bold text-white">
                        {proj.title}
                      </h3>
                      {/* Status Badge */}
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
                      {/* Featured Badge */}
                      {proj.featured && (
                        <span className="px-2 py-1 text-xs  font-medium bg-purple-500 bg-opacity-20 text-purple-400 border border-purple-500 border-opacity-30 rounded-full">
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
                    {/* Tags */}
                    {proj.tags && proj.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {proj.tags
                          .slice(0, getTagsToShow())
                          .map((tag: string, tagIndex: number) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 text-xs bg-gray-700 bg-opacity-50 text-gray-300 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        {proj.tags.length > getTagsToShow() && (
                          <span className="px-2 py-1 text-xs bg-gray-700 bg-opacity-50 text-gray-400 rounded-md">
                            +{proj.tags.length - getTagsToShow()} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Click indicator */}
                  <div className="flex items-center text-gray-400 group-hover:text-white transition-colors ml-4">
                    <span className="text-sm mr-2 hidden sm:inline">Click to view</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}{" "}
        <span className="text-xs text-gray-400 text-right block mt-8">
          <p>This list only includes some of my projects.</p>
        </span>
      </div>{" "}
      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            className="bg-black bg-opacity-10 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>{" "}
            {/* Modal Header */}
            <div className="flex items-center p-6 border-b border-gray-700 pr-16">
              {/* Project Icon in Modal */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gray-700 shadow-lg mr-4">
                {selectedProject.icon && (
                  <SafeImage
                    src={selectedProject.icon}
                    alt={`${selectedProject.title} icon`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                  {/* Status Badge */}
                  {selectedProject.status && (
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        selectedProject.status === "Live"
                          ? "bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30"
                          : selectedProject.status === "In Development"
                          ? "bg-yellow-500 bg-opacity-20 text-yellow-400 border border-yellow-500 border-opacity-30"
                          : "bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-500 border-opacity-30"
                      }`}
                    >
                      {selectedProject.status}
                    </span>
                  )}
                  {/* Featured Badge */}
                  {selectedProject.featured && (
                    <span className="px-3 py-1 text-sm font-medium bg-purple-500 bg-opacity-20 text-purple-400 border border-purple-500 border-opacity-30 rounded-full">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-300">{selectedProject.short_info}</p>
                {/* Tags in Modal */}
                {selectedProject.tags && selectedProject.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedProject.tags.map(
                      (tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm bg-gray-700 bg-opacity-50 text-gray-300 rounded-lg border border-gray-600 border-opacity-30"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Image Carousel */}
              {selectedProject.imgs && selectedProject.imgs.length > 0 && (
                <div className="mb-6">
                  <Carousel
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                  >
                    {selectedProject.imgs.map(
                      (img: string, imgIndex: number) => (
                        <div key={imgIndex}>
                          <SafeImage
                            src={img}
                            alt={`${selectedProject.title} image ${
                              imgIndex + 1
                            }`}
                            className="rounded-lg max-h-[400px] object-contain"
                          />
                        </div>
                      )
                    )}
                  </Carousel>
                </div>
              )}

              {/* Links */}
              {selectedProject.links && selectedProject.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {selectedProject.links.map((linkObj: any, i: number) => (
                    <a
                      key={i}
                      href={linkObj.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                        linkObj.name === "Github"
                          ? "bg-[#5a4378] text-white hover:bg-[#6b5189]"
                          : linkObj.name === "Product"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : linkObj.name === "MCPEDL"
                          ? "bg-[#4a8a4a] text-white hover:bg-[#5a9a5a]"
                          : linkObj.name === "CurseForge"
                          ? "bg-[#f16436] text-white hover:bg-[#ff7446]"
                          : linkObj.name === "VSCode Marketplace"
                          ? "bg-[#007ACC] text-white hover:bg-[#1e8acc]"
                          : linkObj.name === "NPM Package"
                          ? "bg-[#cb3837] text-white hover:bg-[#db4847]"
                          : linkObj.name === "Wiki Website"
                          ? "bg-[#00599c] text-white hover:bg-[#0069ac]"
                          : linkObj.name === "Website"
                          ? "bg-[#00599c] text-white hover:bg-[#0069ac]"  
                          : linkObj.name === "Minecraft Marketplace"
                          ? "bg-[#00A651] text-white hover:bg-[#10B661]"
                          : "bg-gray-600 text-white hover:bg-gray-700"
                      }`}
                    >
                      {linkObj.name}
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default OtherProjects;