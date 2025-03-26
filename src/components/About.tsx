import React from "react";
import { motion } from "framer-motion";
import { aboutMeData, techStackData } from "../data";

const About = () => {
  return (
    <section id="about" className="min-h-[95vh]">
      <h2 className="text-4xl font-semibold pt-4 mt-10 text-center border-t-2 mb-6">About Me</h2>
      <div className="container mx-auto px-6 lg:px-20 mt-8">
        <motion.div
          className="p-6 bg-neutral-800 rounded-xl shadow shadow-stone-900 drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-lg leading-8 space-y-6">
            {aboutMeData.map((item, index) => (
              <p key={index}>
                {item.icon} <strong>{item.text}</strong>
              </p>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 mb-4">
          <h3 className="text-3xl font-semibold mb-2 text-center">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStackData.map((stack, index) => (
              <motion.div
                key={index}
                className="p-4 bg-neutral-800 rounded-lg shadow shadow-stone-900 drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h4 className="text-xl font-bold mb-4">{stack.title}</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {stack.items.map((item, idx) => (
                    <li key={idx}>
                      {"label" in item && <strong>{item.label}:</strong>} {item.value}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;