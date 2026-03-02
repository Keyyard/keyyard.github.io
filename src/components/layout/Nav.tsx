import { useEffect, useState } from "react";
import { navs } from "../../data";

const NAV_ICONS: Record<string, string> = {
  hero:        "🏠",
  about:       "📖",
  experiences: "⚔️",
  projects:    "🗂️",
  contact:     "📬",
};

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
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          setActiveSection((prev) => (prev !== id ? id : prev));
        });
      },
      { threshold: 0.01 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <nav className="hotbar hidden sm:flex" id="nav">
      <div className="hotbar-slots">
        {navs.map((nav) => {
          const isActive = activeSection === nav.sectionId;
          return (
            <a
              key={nav.sectionId}
              href={nav.link.toLowerCase()}
              className={`hotbar-slot${isActive ? " hotbar-slot--active" : ""}`}
              title={nav.name}
            >
              <span className="hotbar-slot-icon">
                {NAV_ICONS[nav.sectionId] ?? "📌"}
              </span>
              <span className="hotbar-slot-label">{nav.shortName}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
