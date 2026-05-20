import { useEffect, useState } from "react";
import { navs } from "../../data";

const NAV_PATTERNS: Record<string, string[]> = {
  hero: [
    "...##...",
    "..####..",
    ".######.",
    "########",
    "#.####.#",
    "#.#..#.#",
    "#.#..#.#",
    "########",
  ],
  about: [
    ".######.",
    "########",
    "##....##",
    "##.##.##",
    "##....##",
    "##.##.##",
    "########",
    ".######.",
  ],
  experiences: [
    ".######.",
    "########",
    "########",
    "....##..",
    "...##...",
    "..##....",
    ".##.....",
    "##......",
  ],
  projects: [
    "..####..",
    ".######.",
    "##.##.##",
    "#.####.#",
    "#.####.#",
    "##.##.##",
    ".######.",
    "..####..",
  ],
  apps: [
    ".###.###",
    ".###.###",
    ".###.###",
    "........",
    ".###.###",
    ".###.###",
    ".###.###",
    "........",
  ],
  contact: [
    "########",
    "#......#",
    "#.#..#.#",
    "#..##..#",
    "#......#",
    "#......#",
    "#......#",
    "########",
  ],
};

const FALLBACK_PATTERN = [
  "########",
  "#......#",
  "#......#",
  "#..##..#",
  "#..##..#",
  "#......#",
  "#......#",
  "########",
];

function PixelIcon({ pattern }: { pattern: string[] }) {
  return (
    <svg
      viewBox="0 0 8 8"
      width="20"
      height="20"
      style={{ shapeRendering: "crispEdges", display: "block" }}
      aria-hidden="true"
    >
      {pattern.flatMap((row, y) =>
        row.split("").map((c, x) =>
          c === "#" ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="currentColor" />
          ) : null,
        ),
      )}
    </svg>
  );
}

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
                <PixelIcon pattern={NAV_PATTERNS[nav.sectionId] ?? FALLBACK_PATTERN} />
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
