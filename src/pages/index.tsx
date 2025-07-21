import { motion, useScroll, useSpring } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { 
  Hero, 
  About, 
  Experiences, 
  Projects as OtherProjects, 
  MinecraftProjects, 
  Contact 
} from "../components/sections";
import { Nav as Navbar } from "../components/layout";
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
