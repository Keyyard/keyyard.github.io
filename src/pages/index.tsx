import { motion, useScroll, useSpring } from "framer-motion";
import Experiences from "../components/Experiences";
import { Hero } from "../components/Hero";
import Navbar from "../components/Nav";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Analytics } from "@vercel/analytics/react";
import About from "../components/About";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <>
      <Analytics />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="p-0 fixed top-0 w-full h-1 bg-white"
      />
      <Navbar />
    </>
  );
}
