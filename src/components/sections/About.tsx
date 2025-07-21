import React from "react";
import { motion } from "framer-motion";
import { aboutMeData, techStackData } from "../../data";

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title mt-10 mb-6">About</h2>
      <div className="container-main">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="content-text">
            {aboutMeData.map((item, index) => (
              <p key={index}>
                {item.icon} <strong>{item.text}</strong>
              </p>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 mb-4">
          <h3 className="subsection-title">Tech Stack</h3>
          <div className="grid-two-col">
            {techStackData.map((stack, index) => (
              <motion.div
                key={index}
                className="card-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h4 className="text-xl font-bold mb-4">{stack.title}</h4>
                <ul className="tech-list">
                  {stack.items.map((item, idx) => (
                    <li key={idx}>
                      {"label" in item && <strong>{item.label}:</strong>}{" "}
                      {item.value}
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
