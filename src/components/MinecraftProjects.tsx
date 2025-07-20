import { motion } from "framer-motion";
import { mcProjects } from "../data";
import SafeImage from "./SafeImage";
import SafeCarousel from "./SafeCarousel";

const MinecraftProjects = () => {
  return (
    <section id="projects" className="min-h-[95vh]">
      <h2 className="text-4xl font-semibold pt-4 text-center border-t-2">
        Minecraft Projects
      </h2>{" "}
      <span className="text-xs text-gray-400 text-right block">
        Download counts are aggregated from multiple sources.
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 pb-32">
        {mcProjects.map((proj, index) => (
          <div key={index} className="group">
            <motion.div
              className="p-3 cursor-pointer bg-black bg-opacity-20 shadow-black inset-2 shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {" "}
              <h3 className="text-md font-bold flex justify-between items-center mb-1">
                <span className="truncate">{proj.title}</span>
                {proj.downloads && (
                  <SafeImage
                    className="inline-block ml-2 h-5"
                    alt="downloads"
                    src={`https://img.shields.io/badge/downloads-${proj.downloads}-blue`}
                  />
                )}
              </h3>
              <h4 className="text-xs text-gray-200 leading-3 mb-2">
                {proj.short_info}
              </h4>
              <h4 className="text-xs text-gray-200 text-ellipsis overflow-hidden leading-4 group-hover:overflow-visible group-hover:whitespace-normal line-clamp-2 h-5">
                {proj.description}
              </h4>{" "}
              <SafeCarousel
                className="mt-3 mb-3"
                images={proj.imgs || []}
                alt={proj.title}
              />
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
                            ? "bg-[#4a8a4a] text-white hover:bg-[#4a8a4a]"
                            : linkObj.name === "CurseForge"
                              ? "bg-[#f16436] text-white hover:bg-[#f16436]"
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
