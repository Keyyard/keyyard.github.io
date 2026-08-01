// ─── EXPERIENCES ─────────────────────────────────────────────
// `tier` drives the timeline node color + legend grouping. It lives on each
// entry (not a separate parallel array) so reordering can never desync it.
export type ExperienceTier = "diamond" | "gold" | "grass" | "wood" | "stone";

export interface Experience {
  title: string;
  company_name: string;
  company_url: string;
  date: string;
  tier: ExperienceTier;
  details: string[];
}

export const experiences: Experience[] = [
  {
    title: "Founder | Official Microsoft Partner",
    company_name: "Keyyard Studio - G2crafted | Official Minecraft Marketplace",
    company_url: "https://www.bedrockexplorer.com/@g2crafted",
    date: "Aug 2021 - 2023",
    tier: "gold", // first MS Partner
    details: [
      "Established Keyyard Studio as a trusted brand, building credibility that attracts high-value partnerships.",
      "Delivered premium-quality content that consistently exceeded Microsoft's strict quality standards.",
      "Mastered end-to-end project management, ensuring every deadline is met while maintaining exceptional quality standards.",
    ],
  },
  {
    title: "Contract Developer",
    company_name: "Giggle Block Studios Ltd | Official Minecraft Marketplace",
    company_url: "https://www.youtube.com/@GiggleBlockStudios",
    date: "Apr 2022 - Jan 2023",
    tier: "grass",
    details: [
      "Delivered complex entity systems and gameplay mechanics that directly increased player engagement and retention.",
      "Optimized animations and animation controllers for smooth and engaging user experiences.",
    ],
  },
  {
    title: "Contract Developer",
    company_name: "MELONBP | Official Minecraft Marketplace",
    company_url: "https://www.melonbp.com/",
    date: "Mar 2023 - Jul 2024",
    tier: "grass",
    details: [
      "Engineered sophisticated AI behaviors that created more immersive gameplay experiences, resulting in higher player satisfaction scores.",
      "Pioneered innovative custom mechanics that differentiated client projects from competitors in the marketplace.",
    ],
  },
  {
    title: "Content Publisher & Creator",
    company_name: "Kayen Works",
    company_url: "https://kayenworks.com/",
    date: "2023 - Present",
    tier: "gold",
    details: [
      "Partnered with Kayen Works to publish high-quality Minecraft content, expanding the reach of multiple creators and delivering engaging experiences to a wider audience.",
    ],
  },
  {
    title: "Senior Developer",
    company_name: "Fire Games | Official Minecraft Marketplace",
    company_url: "https://www.bedrockexplorer.com/@firegames",
    date: "Jul 2024 - February 2025",
    tier: "diamond", // Preston collab
    details: [
      "Leveraged advanced JavaScript and TypeScript to create high-performance systems that handle complex algorithms seamlessly.",
      "Transformed player experiences through cutting-edge gameplay features, directly contributing to increased user engagement.",
      "Built scalable, maintainable codebases that reduce long-term maintenance costs and enable rapid feature development.",
      "Collaborated with PrestonPlayz (millions of subscribers), delivering content that meets the highest industry standards.",
    ],
  },
  {
    title: "Contract Developer",
    company_name: "OASIS | Official Minecraft Marketplace",
    company_url: "https://www.oasis-team.com/",
    date: "April 2025 - September 2025",
    tier: "grass",
    details: [
      "Architecting next-generation scripting solutions that give clients a competitive edge in the marketplace.",
      "Creating immersive gameplay systems that drive player retention and monetization for client projects.",
      "Building enterprise-level infrastructure that scales effortlessly while maintaining peak performance.",
      "Developing proprietary development tools that accelerate project delivery and boost development efficiency by 50%.",
      "Designing engagement-focused gameplay mechanics that consistently outperform industry benchmarks.",
    ],
  },
  {
    title: "Organization Member & Project Lead",
    company_name: "Bedrock OSS",
    company_url: "https://github.com/Bedrock-OSS/",
    date: "June 2025 - Present",
    tier: "wood",
    details: [
      "Contributing to the development of open-source projects, collaborating with fellow developers to create cutting-edge solutions.",
      "Served as a Wiki Contributor, creating and editing content for the knowledge-sharing platform dedicated to Minecraft Bedrock Add-Ons.",
    ],
  },
  {
    title: "Founder",
    company_name: "Bedrock CLI",
    company_url: "https://bedrockcli.keyyard.xyz",
    date: "June 2025 - Present",
    tier: "wood",
    details: [
      "Created an open-source Minecraft Bedrock Compiler and a CLI tool that scaffolds Minecraft Bedrock add-on workspaces. The tool is widely used by developers to skip boilerplate and jump straight into scripting.",
    ],
  },
  {
    title: "Contract Developer",
    company_name: "Mushco | Official Minecraft Marketplace",
    company_url: "https://www.mushco.games/",
    date: "July 2025 - March 2026",
    tier: "diamond", // Cut the Rope DLC
    details: [
      "Create and maintain high-quality Minecraft DLC* content that meets the highest standards of quality and performance.",
      "DLC*: Unlike typical Minecraft Marketplace contents, DLC contents are usually content that collaborate with other brands, games, movies, like Moana DLC and Sonic DLC.",
    ],
  },
  {
    title: "Developer",
    company_name: "Block Factory | Official Minecraft Marketplace",
    company_url: "https://blockfactory.studio/",
    date: "January 2026 - July 2026",
    tier: "grass",
    details: [
      "Working on entities, gameplay mechanics, and scripting systems to deliver engaging Minecraft experiences.",
    ],
  },
  {
    title: "Founder",
    company_name: "Productivitism",
    company_url: "https://productivitism.com/",
    date: "Mar 2026 - Present",
    tier: "stone",
    details: [
      "Building tools and content to help people maintain focus and productivity in the digital age.",
    ],
  },
  {
    title: "Middle Developer",
    company_name: "Lumina Studio | Official Minecraft Marketplace",
    company_url: "",
    date: "August 2026 - Present",
    tier: "grass",
    details: [
      "Working on entities, gameplay mechanics, and scripting systems to deliver engaging Minecraft experiences.",
    ],
  },
  {
    title: "Founder",
    company_name: "Keyyard | Official Minecraft Marketplace",
    company_url: "https://keyyard.xyz",
    date: "August 2026 - Present",
    tier: "gold",
    details: [
      "Official Minecraft Partner via Publisher Waypoint Studios",
    ],
  },
];

// Experience timeline visual data
export const experienceNodeStyles: Record<
  ExperienceTier,
  { bg: string; shadow: string }
> = {
  gold: {
    bg: "var(--gold)",
    shadow:
      "inset -3px -3px 0 rgba(0,0,0,0.4), inset 3px 3px 0 rgba(255,255,255,0.3), 0 0 10px rgba(245,197,66,0.35)",
  },
  diamond: {
    bg: "var(--diamond)",
    shadow:
      "inset -3px -3px 0 rgba(0,0,0,0.35), inset 3px 3px 0 rgba(255,255,255,0.35), 0 0 12px rgba(78,205,196,0.5)",
  },
  grass: {
    bg: "var(--grass-bright)",
    shadow:
      "inset -3px -3px 0 rgba(0,0,0,0.3), inset 3px 3px 0 rgba(255,255,255,0.15)",
  },
  stone: {
    bg: "var(--stone)",
    shadow:
      "inset -3px -3px 0 rgba(0,0,0,0.35), inset 3px 3px 0 rgba(255,255,255,0.15)",
  },
  wood: {
    bg: "var(--wood)",
    shadow:
      "inset -3px -3px 0 rgba(0,0,0,0.3), inset 3px 3px 0 rgba(255,255,255,0.12)",
  },
};

export const experienceLegend: { label: string; tier: ExperienceTier }[] = [
  { label: "Milestone", tier: "diamond" },
  { label: "Partnership", tier: "gold" },
  { label: "Contract", tier: "grass" },
  { label: "Community", tier: "wood" },
  { label: "Other", tier: "stone" },
];
