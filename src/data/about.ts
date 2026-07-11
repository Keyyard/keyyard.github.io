import { researchPapers } from "./research";

// ─── ABOUT: PLAYER INFO ──────────────────────────────────────
// Edit these paragraphs to change the About section story text
export const aboutPlayerInfo = [
  "I'm a developer who builds from curiosity, not from tutorials. I started modding Minecraft in 2018 with nothing but a text editor in an iPad and the stubbornness to figure things out. That instinct to learn through building has defined everything since.",
  "I'm drawn to systems that demand both precision and creativity, where I can use my logical thinking with creativity. Scripting a complex boss, designing physics-driven gameplay, or architecting a developer toolchain: I care deeply about the craft behind all of it.",
  "Being multidisciplinary isn't a side effect for me, it's the point. I've spent most of my time learning and working across Bedrock scripting, software development, and various non-technical fields because I believe every domain sharpens your thinking in the others.",
  "I do my best work on ambitious projects with talented people who care about making their dreams a reality. If you're building something that pushes limits, I want to be part of it.",
];

// ─── ABOUT: SKILL CLASSES (multi-class character sheet) ──────
// Two card kinds, on purpose:
//  • "mastery"  → Minecraft: skill bars + LVL (the home turf, real self-estimate)
//  • "proof"    → App Dev / Research: capability shown by what's shipped, no numbers.
//                 tagline + tags + a pointer to the section that holds the real evidence.
// Edit any tag to match exactly what you'd stand behind.
export interface SkillClass {
  name: string;
  color: string; // accent: header, badge, bars/tags
  // mastery cards:
  level?: number;
  fill?: string; // bar fill gradient
  skills?: { label: string; percent: number }[];
  // proof cards:
  tagline?: string;
  projects?: { name: string; note: string; href: string }[];
  tags?: string[];
  footer?: { label: string; href?: string };
}

export const skillClasses: SkillClass[] = [
  {
    name: "Minecraft Developer",
    level: 99,
    color: "var(--grass-glow)",
    fill: "linear-gradient(90deg, var(--grass), var(--grass-glow))",
    skills: [
      { label: "Bedrock Entity Behavior", percent: 91 },
      { label: "Bedrock Scripting API", percent: 92 },
      { label: "Bedrock Items Functions", percent: 92 },
      { label: "Bedrock Animation", percent: 90 },
      { label: "Bedrock Blocks Features", percent: 77 },
    ],
    footer: { label: "▾ See projects", href: "#projects" },
  },
  {
    name: "Software Engineer",
    color: "var(--diamond)",
    tagline: "Tools, apps & products.",
    projects: [
      {
        name: "Bedrock CLI",
        note: "Open-source dev tool, used by Bedrock devs",
        href: "https://bedrockcli.keyyard.xyz",
      },
      {
        name: "Blockception VSCode Extension",
        note: "Contributor · Bedrock dev tooling for VS Code",
        href: "https://marketplace.visualstudio.com/items/?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension",
      },
      {
        name: "Productivitism",
        note: "Productivity app & studio I founded",
        href: "https://productivitism.com/",
      },
      {
        name: "Indie iOS Apps",
        note: "2 live on the App Store",
        href: "#apps",
      },
    ],
  },
  {
    name: "Researcher",
    color: "var(--gold)",
    tagline: "Behavioral psychology, applied to product.",
    projects: [
      ...researchPapers.map((p) => ({
        name: p.cardName,
        note: p.cardNote,
        href: p.link,
      })),
      {
        name: "Productivity Psychology — Blog",
        note: "Essays on habits, focus & behavioral design",
        href: "https://blogs.keyyard.xyz",
      },
    ],
    tags: ["Behavioral Psychology", "Product Design", "User Studies"],
  },
];

// ─── ABOUT: TECH STACK ───────────────────────────────────────
export const techStackData = [
  {
    title: "Programming Languages",
    items: [
      { value: "TypeScript" },
      { value: "JavaScript" },
      { value: "Python" },
      { value: "Swift" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { label: "Frameworks", value: "React, Next.js" },
      { label: "Styling", value: "TailwindCSS" },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { label: "API Frameworks", value: "FastAPI, Flask, Next.js" },
      { label: "Database", value: "PostgreSQL, SQLite, Prisma ORM, Supabase" },
      { label: "Authentication", value: "OAuth, JWT, Clerk" },
    ],
  },
  {
    title: "Mobile Development",
    items: [
      { value: "React Native" },
      { value: "Expo" },
      { value: "Lynx.JS" },
      { value: "Swift (iOS)" },
    ],
  },
  {
    title: "Creative Tools",
    items: [
      { label: "3D Modeling & Animation", value: "Blockbench" },
      { label: "Graphics", value: "Aseprite, Adobe Photoshop, Figma" },
      { label: "Video Editing", value: "DaVinci Resolve, CapCut" },
    ],
  },
];
