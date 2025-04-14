import { motion, useScroll, useSpring } from "framer-motion";
import Experiences from "../components/Experiences";
import { Hero } from "../components/Hero";
import Navbar from "../components/Nav";
import Contact from "../components/Contact";
import { Analytics } from "@vercel/analytics/react";
import About from "../components/About";
import MinecraftProjects from "../components/MinecraftProjects";
import OtherProjects from "../components/Projects";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <>
      <Analytics />
      <Hero />
      <About />
      <Experiences />
      <OtherProjects />
      <MinecraftProjects />
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
