import { motion, useScroll, useSpring } from "framer-motion";
import "./App.css";
import Experiences from "./components/Experiences";
import { Hero } from "./components/Hero";
import Navbar from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <>
      <Hero />
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

export default App;
