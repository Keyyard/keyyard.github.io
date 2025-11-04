import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useCallback } from "react";
import { introductionText } from "../../data";
import Bg from "../layout/Background";

const HeadRender = dynamic(() => import("../layout/MyHead"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-200 animate-pulse" />,
});

export function Hero() {
  const scrollToProjects = useCallback(() => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="hero" className="section-hero">
      <Bg />
      <div className="flex flex-col justify-center">
        <span className="hero-title-blur">Keyyard</span>
        <h1 className="hero-title" style={{ fontSize: "2.25rem" }}>
          Keyyard
        </h1>
        <h2 className="hero-subtitle">
          Minecraft Add-on Developer & Fullstack Developer
        </h2>
      </div>
      <motion.div
        className="draggable-head"
        id="MyHead"
        drag
        dragConstraints={{
          top: -50,
          left: -100,
          right: 25,
          bottom: 50,
        }}
      >
        <HeadRender />
      </motion.div>
      <div className="pt-4 flex w-[50vw] h-[55vh]" id="head" />
      <div className="intro-text-container">
        <div className="intro-text-content">
          {introductionText.map((text, index) => (
            <p key={index} className="text-lg">
              {text}
            </p>
          ))}
          <p className="mt-4">
            I also enjoy writing! Explore my thoughts & perspectives in my{" "}
            <a
              className="text-[--color-secondary] hover:text-[--color-text-highlight]"
              href="https://blogs.keyyard.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Garden
            </a>
            .
          </p>
        </div>
        <div className="hero-buttons">
          <button
            onClick={scrollToProjects}
            className="hero-button-primary text-[--color-background] hover:text-[--color-text-highlight]"
          >
            View My Work
          </button>
          <button
            onClick={scrollToContact}
            className="hero-button-secondary"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
