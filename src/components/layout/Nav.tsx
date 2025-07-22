import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navs } from "../../data";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [setActiveSection]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.01 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className="fixed p-4 bottom-0 items-center mx-auto inset-x-0 bg-[#242424] z-[99]"
      id="nav"
    >
      <ul className="flex justify-center">
        {navs.map((nav, index) => (
          <motion.li
            key={index}
            className={`mx-4 ${
              activeSection === nav.sectionId
                ? "underline underline-offset-8 text-gray-200"
                : "text-gray-500"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={`${nav.link.toLowerCase()}`}>{nav.name}</a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
