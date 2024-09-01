import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "../data";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../carousel.css";
const Projects = () => {
  const [resolution, setResolution] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setResolution(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
      <section id="projects" className="min-h-[100vh]">
        <h2 className="text-4xl pt-4 text-center border-t-2">Projects</h2>
        <span className="text-xs text-gray-400 text-right block">
          Download counts are aggregated from multiple sources.
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 p-6 pb-32">
          {projects.map((proj, index) => (
            <div key={index} className="group">
              <motion.div
                className="p-4 cursor-pointer bg-black bg-opacity-20 shadow-black inset-2 shadow-lg rounded-lg overflow-hidden whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: true ? 1 : 0,
                  y: true ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold flex justify-between items-center">
                  <span>{proj.title}</span>
                  {proj.downloads && (
                    <img
                      className="inline-block"
                      alt="downloads"
                      src={`https://img.shields.io/badge/downloads-${proj.downloads}-blue`}
                    />
                  )}
                </h3>

                <h4 className="text-md text-gray-200 leading-3">{proj.date}</h4>
                <h4 className="text-md text-gray-200 text-ellipsis overflow-hidden mt-2 leading-5">
                  {proj.description}
                </h4>
                <Carousel className="mt-4">
                  {proj.imgs &&
                    proj.imgs.map((img, imgIndex) => (
                      <div key={imgIndex}>
                        <img
                          src={img}
                          alt={`${proj.title} image ${imgIndex + 1}`}
                        />
                      </div>
                    ))}
                </Carousel>
                <div className="flex items-center justify-center mt-4">
                  {proj.links &&
                    proj.links.map((linkObj, i) => (
                      <a
                        key={i}
                        href={linkObj.link || "#"}
                        target="_blank"
                        className={`text-sm font-bold inline-block px-4 py-2 rounded-xl mr-5 shadow-inner shadow-black ${
                          linkObj.name === "Github"
                            ? "bg-[#5a4378] text-white hover:bg-[#5a4378]"
                            : linkObj.name === "MCPEDL"
                            ? "bg-[#4a8a4a] text-white hover:bg-[#4a8a4a]"
                            : ""
                        }`}
                      >
                        {linkObj.name}
                      </a>
                    ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Projects;
