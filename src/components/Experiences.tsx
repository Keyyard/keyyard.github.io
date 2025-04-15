import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { experiences } from "../data";

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const [resolution, setResolution] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setResolution(window.innerWidth);
      const handleResize = () => {
        setResolution(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <section id="experiences" className="min-h-[95vh]">
      <h2 className="text-4xl font-semibold pt-4 text-center border-t-2 ">Experiences</h2>
      <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          {resolution <= 1024 && selectedExperience && (
            <motion.div
              key={selectedExperience.title + selectedExperience.company_name}
              className="mx-auto p-6 bg-black bg-opacity-20 rounded-xl shadow shadow-stone-900 drop-shadow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-md font-bold">{selectedExperience.title}</h3>
              <h4 className="text-sm text-gray-300">
                <a
                  href={selectedExperience.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {selectedExperience.company_name}
                </a>
              </h4>
              <p className="text-sm text-gray-300">{selectedExperience.date}</p>
              <ul className="list-disc list-inside mt-2">
                {selectedExperience.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-100">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mx-auto p-6 cursor-pointer border rounded-lg ${
                selectedExperience === exp ? "bg-neutral-700" : ""
              }`}
              onClick={() => setSelectedExperience(exp)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
              transition={{ duration: 0.25, delay: index * 0.1 }}
              ref={sectionRef}
            >
              <h3
                className={`${
                  resolution <= 1024 ? "text-sm font-bold" : "text-xl font-bold"
                }`}
              >
                {exp.title}
              </h3>
              <h4
                className={`${
                  resolution <= 1024
                    ? "text-sm text-gray-200 leading-5"
                    : "text-lg text-gray-200 leading-7"
                }`}
              >
                <a
                  href={exp.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400 hover:text-blue-600"
                >
                  {exp.company_name}
                </a>
              </h4>
            </motion.div>
          ))}
        </div>
        <div>
          {resolution > 1024 && selectedExperience && (
            <motion.div
              key={selectedExperience.title + selectedExperience.company_name}
              className="mx-auto p-4 bg-black bg-opacity-20 rounded-xl shadow shadow-stone-900 drop-shadow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: sectionInView ? 1 : 0,
                scale: sectionInView ? 1 : 0.5,
              }}
              transition={{ duration: 0.25 }}
              ref={sectionRef}
            >
              <h3 className="text-xl font-bold">{selectedExperience.title}</h3>
              <h4 className="text-md text-gray-300 leading-5">
                <a
                  href={selectedExperience.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400 hover:text-blue-600"
                >
                  {selectedExperience.company_name}
                </a>
              </h4>
              <p className="text-sm text-gray-300">{selectedExperience.date}</p>
              <ul className="list-disc list-inside mt-2">
                {selectedExperience.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-100">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experiences;