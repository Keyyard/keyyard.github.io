import { motion } from "framer-motion";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import HeadRender from "../layout/MyHead";
import Bg from "../layout/Background";
import { introductionText } from "../../data";

export function Hero() {
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
            I write too! Check out my{" "}
            <a
              className="text-[--color-secondary] hover:text-[--color-text-highlight]"
              href="https://blogs.keyyard.xyz"
            >
              {" "}
              Digital Garden here{" "}
            </a>
          </p>
        </div>
        <div className="hero-buttons">
          <button
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hero-button-primary"
          >
            View My Work
          </button>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hero-button-secondary"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
