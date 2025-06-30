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
  return (
    <>
      <Analytics />
      <Hero />
      <About />
      <Experiences />
      <OtherProjects />
      <MinecraftProjects />
      <Contact />
      <Navbar />
    </>
  );
}
