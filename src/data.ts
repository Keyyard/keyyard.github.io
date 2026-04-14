// ─── NAV ────────────────────────────────────────────────────
const navs = [
  { name: "Hero", shortName: "Home", link: "/#hero", sectionId: "hero" },
  { name: "About", shortName: "About", link: "/#about", sectionId: "about" },
  {
    name: "Experiences",
    shortName: "Career",
    link: "/#experiences",
    sectionId: "experiences",
  },
  {
    name: "Projects",
    shortName: "Builds",
    link: "/#projects",
    sectionId: "projects",
  },
  {
    name: "Apps",
    shortName: "Apps",
    link: "/#apps",
    sectionId: "apps",
  },
  {
    name: "Contact",
    shortName: "Contact",
    link: "/#contact",
    sectionId: "contact",
  },
];

// ─── BIRTHDAY / DOB ──────────────────────────────────────────
const DOB = new Date(2004, 8, 30); // September 30, 2004

function getBirthdayXP() {
  const now = new Date();
  const thisYearBday = new Date(
    now.getFullYear(),
    DOB.getMonth(),
    DOB.getDate(),
  );
  const isBirthday =
    now.getMonth() === DOB.getMonth() && now.getDate() === DOB.getDate();
  const lastBday =
    now >= thisYearBday
      ? thisYearBday
      : new Date(now.getFullYear() - 1, DOB.getMonth(), DOB.getDate());
  const nextBday =
    now >= thisYearBday
      ? new Date(now.getFullYear() + 1, DOB.getMonth(), DOB.getDate())
      : thisYearBday;
  const age =
    now.getFullYear() - DOB.getFullYear() - (now < thisYearBday ? 1 : 0);
  const xpPercent = isBirthday
    ? 0
    : Math.round(
        ((now.getTime() - lastBday.getTime()) /
          (nextBday.getTime() - lastBday.getTime())) *
          100,
      );
  return { age, xpPercent, isBirthday, nextLevel: age + 1 };
}
const _birthdayXP = getBirthdayXP();

// ─── HERO DATA ───────────────────────────────────────────────
const _startYear = 2018;
const _currentYear = new Date().getFullYear();
const _yearsXp = _currentYear - _startYear;

const heroData = {
  floatingBlocksCount: 12,
  groundSegments: 28,
  cornerBlocks: {
    topLeft: ["var(--grass)", "var(--dirt)", "var(--stone-dark)"],
    topRight: ["var(--diamond)", "var(--gold)", "var(--stone-dark)"],
  },
  blockRow: [
    "block-grass",
    "block-dirt",
    "block-stone",
    "block-gold",
    "block-stone",
    "block-dirt",
    "block-grass",
  ] as string[],
  pixelName: "KEYYARD"  // display name kept; SEO H1 handled via aria-label in Hero.tsx,
  roleBadge: "Minecraft Developer & Software Engineer",
  storyHook: `In 2018, I started modding Minecraft from scratch — no tutorials, just curiosity and a text editor.<br/>By 2024, <strong>I contributed to the official <span class="hl-diamond">Minecraft × Cut The Rope crossover DLC</span></strong>, and my addons had been downloaded <span class="hl-gold">5M+ times</span> across the world.`,
  statCards: [
    {
      cssClass: "gold",
      blockBg: "var(--gold)",
      blockShadow:
        "inset -2px -2px 0 rgba(0,0,0,0.4), inset 2px 2px 0 rgba(255,255,255,0.3)",
      num: "5M+",
      label: "Downloads",
      title: "Total downloads across all projects",
    },
    {
      cssClass: "green",
      blockBg: "var(--grass)",
      blockShadow: "inset -2px -2px 0 rgba(0,0,0,0.3)",
      num: `${_yearsXp} YRS`,
      label: "Experience",
      title: "Years of experience since 2018",
    },
    {
      cssClass: "blue",
      blockBg: "var(--diamond)",
      blockShadow:
        "inset -2px -2px 0 rgba(0,0,0,0.3), 0 0 8px rgba(78,205,196,0.5)",
      num: "MSFT",
      label: "Partner",
      title: "Official Microsoft Marketplace Partner",
    },
    {
      cssClass: "stone",
      blockBg: "var(--stone)",
      blockShadow: "inset -2px -2px 0 rgba(0,0,0,0.35)",
      num: "31M SUBS",
      label: "Youtuber Collab",
      title: "Collaborated with Preston (31M subscribers)",
    },
  ],
  featuredCallout: {
    link: "#projects",
    label: "Featured Work",
    title: "Cut the Rope × Minecraft DLC",
    description: `Shipped as an official DLC in partnership with <strong style="color:var(--diamond)">Mush Co., Microsoft, Mojang &amp; ZeptoLab</strong> — available on the Minecraft Marketplace worldwide.`,
  },
  ctaButtons: [
    { text: "⛏ View My Work", action: "projects", variant: "primary" },
    { text: "✉ Contact Me", action: "contact", variant: "secondary" },
  ] as { text: string; action: string; variant: "primary" | "secondary" }[],
  xpPercent: _birthdayXP.xpPercent,
  xpBar: {
    label: `LVL ${_birthdayXP.age} · KEYYARD`,
    progressText: _birthdayXP.isBirthday
      ? `★ HAPPY BIRTHDAY! LVL UP! ★`
      : `${_birthdayXP.xpPercent}% to LVL ${_birthdayXP.nextLevel}`,
  },
};

// ─── EXPERIENCES ─────────────────────────────────────────────
const experiences = [
  {
    title: "Official Microsoft Partner",
    company_name: "G2crafted | Official Minecraft Marketplace",
    company_url: "https://www.bedrockexplorer.com/@g2crafted",
    date: "Aug 2021 - 2023",
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
    details: [
      "Partnered with Kayen Works to publish high-quality Minecraft content, expanding the reach of multiple creators and delivering engaging experiences to a wider audience.",
    ],
  },
  {
    title: "Senior Developer",
    company_name: "Fire Games | Official Minecraft Marketplace",
    company_url: "https://www.bedrockexplorer.com/@firegames",
    date: "Jul 2024 - February 2025",
    details: [
      "Leveraged advanced JavaScript and TypeScript to create high-performance systems that handle complex algorithms seamlessly.",
      "Transformed player experiences through cutting-edge gameplay features, directly contributing to increased user engagement.",
      "Built scalable, maintainable codebases that reduce long-term maintenance costs and enable rapid feature development.",
      "Collaborated with PrestonPlayz (millions of subscribers), delivering content that meets the highest industry standards.",
    ],
  },
  {
    title: "Development Infrastructure Specialist & Developer",
    company_name: "OASIS | Official Minecraft Marketplace",
    company_url: "https://www.oasis-team.com/",
    date: "April 2025 - September 2025",
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
    details: [
      "Contributing to the development of open-source projects, collaborating with fellow developers to create cutting-edge solutions.",
      "Served as a Wiki Contributor, creating and editing content for the knowledge-sharing platform dedicated to Minecraft Bedrock Add-Ons.",
    ],
  },
  {
    title: "Developer",
    company_name: "Mushco",
    company_url: "https://www.mushco.games/",
    date: "July 2025 - Present",
    details: [
      "Create and maintain high-quality Minecraft DLC* content that meets the highest standards of quality and performance.",
      "DLC*: Unlike typical Minecraft Marketplace contents, DLC contents are usually content that collaborate with other brands, games, movies — like Moana DLC, Sonic DLC.",
    ],
  },
  {
    title: "Developer",
    company_name: "Block Factory",
    company_url: "https://blockfactory.studio/",
    date: "January 2026 - Present",
    details: [
      "Working on entities, gameplay mechanics, and scripting systems to deliver engaging Minecraft experiences.",
    ],
  },
];

// Experience timeline visual data
const experienceNodeStyles: Record<string, { bg: string; shadow: string }> = {
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

// Corresponds 1:1 with the experiences array above
const experienceTiers = [
  "gold", // G2crafted — first MS Partner
  "grass", // Giggle Block Studios
  "grass", // MELONBP
  "gold", // Kayen Works
  "diamond", // Fire Games — Preston collab
  "grass", // OASIS
  "wood", // Bedrock OSS
  "diamond", // Mushco — Cut the Rope DLC
  "grass", // Block Factory
];

const experienceLegend = [
  { label: "Milestone", tier: "diamond" },
  { label: "Partnership", tier: "gold" },
  { label: "Contract", tier: "grass" },
  { label: "Community", tier: "wood" },
  { label: "Other", tier: "stone" },
];

// ─── MINECRAFT PROJECTS ──────────────────────────────────────
// category: 'featured' = 1 large card per row
//           'highlight' = 3-column grid
//           'normal'    = compact expandable list
const mcProjects = [
  {
    category: "featured" as const,
    title: "Cut the Rope x Minecraft DLC",
    short_info: "Official Minecraft Marketplace DLC",
    description:
      "Official Minecraft Marketplace DLC collaboration between Cut the Rope and Minecraft. A premium DLC experience bringing the beloved Cut the Rope gameplay mechanics into the Minecraft universe. Developed in partnership with Mushco.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp/mush-co/cut-the-rope/b5c52ceb-8b81-4f97-9aae-f5fa668c0278",
      },
    ],
    imgs: [
      "/assets/mcProjs/ctr/CTR_Thumbnail_0.webp",
      "/assets/mcProjs/ctr/CTR_MarketingScreenshot_1.webp",
      "/assets/mcProjs/ctr/CTR_MarketingScreenshot_2.webp",
      "/assets/mcProjs/ctr/CTR_MarketingScreenshot_3.webp",
      "/assets/mcProjs/ctr/CTR_MarketingScreenshot_4.webp",
    ],
  },
  {
    category: "highlight" as const,
    title: "Tree Capitator and Vein Miner Addon",
    short_info: "Community Project",
    description:
      "Designed an optimized scripting system that accelerates resource gathering. Features dynamic block breaking, enchantment support, and durability tracking, improving vanilla gameplay with minified performance loss.",
    downloads: "2.0M+",
    links: [
      {
        name: "Github",
        link: "https://github.com/Keyyard/Minecraft-Tree-Capitator-and-Vein-Miner-Addon",
      },
      {
        name: "MCPEDL",
        link: "https://mcpedl.com/tree-capacitor-addon-lumberjack/",
      },
    ],
    imgs: ["/assets/mcProjs/tc.webp", "/assets/mcProjs/tc/maxresdefault.webp"],
  },
  {
    category: "highlight" as const,
    title: "Actual Guns MCBE",
    short_info: "Community Project",
    description:
      "Help creating the add-on in early stages with UI & Gun Shooting mechanic via Animation Controller & Snowball run identifier, and later on, the project was taken over by Azoz and Jun.",
    downloads: "3.0M+",
    links: [{ name: "MCPEDL", link: "https://mcpedl.com/actual-guns-addon/" }],
    imgs: [
      "/assets/mcProjs/ag/GWFjLdgWgAAVYUq.webp",
      "/assets/mcProjs/ag/GLZezFubUAA4E5O.webp",
      "/assets/mcProjs/ag/GDl2vZhXQAAU-8H.webp",
    ],
  },
  {
    category: "highlight" as const,
    title: "One Block Extra",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Led the development of custom entities, weapons, and boss fights in an engaging One Block survival experience. Engineered mechanics and scripted immersive player interactions.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=2d374bf8-38c5-4bce-966e-8b25e2ae6263",
      },
    ],
    imgs: [
      "/assets/mcProjs/obe/One_Block_Thumbnail_0.webp",
      "/assets/mcProjs/obe/One_Block_Screenshot_0.webp",
      "/assets/mcProjs/obe/One_Block_Screenshot_2.webp",
      "/assets/mcProjs/obe/One_Block_Screenshot_3.webp",
    ],
  },
  {
    category: "normal" as const,
    title: "Trains (CRAFTABLE)",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Designed a fully functional train system with attachable carts. Developed animation controllers and entity mechanics to ensure seamless movement and interaction.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=8313ab50-e5e6-4eef-81ce-9aba7c65b200",
      },
    ],
    imgs: [
      "/assets/mcProjs/train/Trains_Thumbnail_0.webp",
      "/assets/mcProjs/train/Trains_MarketingScreenshot_0.webp",
      "/assets/mcProjs/train/Trains_MarketingScreenshot_1.webp",
      "/assets/mcProjs/train/Trains_MarketingScreenshot_2.webp",
    ],
  },
  {
    category: "highlight" as const,
    title: "Scary Myth Mobs",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Created unique gameplay elements, including custom weapons and deep-driven horror mechanics. Developed scripting for jump scares and advanced weapons with math formulas.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=aa1a855c-628e-48f2-bfdb-174bb25c45ab",
      },
    ],
    imgs: [
      "/assets/mcProjs/smm.webp",
      "/assets/mcProjs/smm/fg_screenshot_0.webp",
      "/assets/mcProjs/smm/fg_screenshot_1.webp",
      "/assets/mcProjs/smm/fg_screenshot_2.webp",
    ],
  },
  {
    category: "normal" as const,
    title: "Dynamic Torchlighting",
    short_info: "Community Project",
    description:
      "Implemented real-time dynamic lighting for torches, allowing off-hand illumination. Optimized for performance while maintaining a seamless experience.",
    links: [
      { name: "Github", link: "https://github.com/Keyyard/dynamic-torchlight" },
      { name: "MCPEDL", link: "https://mcpedl.com/dynamic-torchlight-addon/" },
      {
        name: "CurseForge",
        link: "https://www.curseforge.com/minecraft-bedrock/addons/dynamic-torch-by-keyyard",
      },
    ],
    imgs: [
      "/assets/mcProjs/torch/torch.gif",
      "/assets/mcProjs/torch/torch2.gif",
    ],
  },
  {
    category: "normal" as const,
    title: "Portal Guns",
    short_info: "Community Project",
    description:
      "Developed a custom teleportation system inspired by Portal, allowing instant travel between two points using interactive gun mechanics.",
    links: [
      {
        name: "Github",
        link: "https://github.com/Keyyard/PortalGunsAddon-ScriptingAPI",
      },
    ],
    imgs: ["/assets/mcProjs/portal/portal-appears.gif"],
  },
  {
    category: "normal" as const,
    title: "Weapon Combiner",
    short_info: "Community Project",
    description:
      "Developed a custom crafting block that allows players to fuse weapons with unique abilities. Introduced new enchanting table with randomized enchantments and skill-based upgrades.",
    links: [
      { name: "MCPEDL", link: "https://mcpedl.com/weapon-combiner/" },
      {
        name: "CurseForge",
        link: "https://www.curseforge.com/minecraft-bedrock/addons/weapon-combiner",
      },
    ],
    imgs: [
      "/assets/mcProjs/wc/keyart.webp",
      "/assets/mcProjs/wc/wc1.webp",
      "/assets/mcProjs/wc/wc2.webp",
    ],
  },
  {
    category: "highlight" as const,
    title: "Crossbow Expansion",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Craft the most overpowered crossbows in Minecraft! Features Auto, Modified, Lighting, TNT, Ender, Apocalyptic, and Fire Crossbows. All craftable with much more!",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=735e4932-4817-4bc7-860d-6738413aa9a6",
      },
    ],
    imgs: [
      "/assets/mcProjs/cbe/Thumbnail_0.webp",
      "/assets/mcProjs/cbe/Screenshot_1.webp",
      "/assets/mcProjs/cbe/Screenshot_2.webp",
      "/assets/mcProjs/cbe/Screenshot_3.webp",
      "/assets/mcProjs/cbe/Screenshot_4.webp",
    ],
  },
  {
    category: "highlight" as const,
    title: "Redstone Expansion",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Tinker with brand new redstone tech! Features 11 NEW Redstone Components with brand new machines and mechanisms. Includes interactive demonstrations at spawn.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=87346cd5-68e7-4a6d-b0fd-b935ed1c5d34",
      },
    ],
    imgs: [
      "/assets/mcProjs/rse/Thumbnail_0 (1).webp",
      "/assets/mcProjs/rse/Screenshot_1.webp",
      "/assets/mcProjs/rse/Screenshot_2.webp",
      "/assets/mcProjs/rse/Screenshot_3.webp",
      "/assets/mcProjs/rse/Screenshot_4.webp",
    ],
  },
  {
    category: "normal" as const,
    title: "TNT Experiments",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Ready to blow your world into pieces? Explore the biggest and baddest TNT explosions in TNT EXPERIMENTS. Try and pass all 21 TNT levels and create your own TNT experiment.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=85db0b50-c05d-4684-82f7-bda15541ebda",
      },
    ],
    imgs: [
      "assets/mcProjs/tnt/Thumbnail_0.webp",
      "assets/mcProjs/tnt/Screenshot_2.webp",
      "assets/mcProjs/tnt/Screenshot_3.webp",
    ],
  },
  {
    category: "normal" as const,
    title: "3D Medieval Experience",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Step into a medieval world filled with side quests! Features 7 3D items, medieval cannon with unique behaviors, 4 custom NPCs, and a medieval castle at spawn.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=7f3ced8b-5d8c-483b-a516-05aff064231d",
      },
    ],
    imgs: [
      "/assets/mcProjs/3dme/g2crafted-3d-medieval-experience-thumbnail-ea2dbbec5214a3c4-800.webp",
      "/assets/mcProjs/3dme/3D_Medieval_Experience_MarketingScreenshot_1.webp",
    ],
  },
  {
    category: "normal" as const,
    title: "Demonic Legends",
    short_info: "Official Minecraft Marketplace Skin Pack",
    description:
      "Embrace the legend of demons! Features 12 devil skins with unique horn accessories. Developed by Keyyard Studio in partnership with G2Crafted.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=47c862c8-98c1-497c-94a5-3959eea3fec5",
      },
    ],
    imgs: ["/assets/mcProjs/dl/Demonic_Legends_Thumbnail.webp"],
  },
  {
    category: "normal" as const,
    title: "Fright Night",
    short_info: "Official Minecraft Marketplace Skin Pack",
    description:
      "Suit up for Halloween with our Fright Night pack. Includes 12 spooky skins. Developed by Keyyard Studio in partnership with G2Crafted.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=7ddad910-7c39-46c0-8e6d-8ed38f870d04",
      },
    ],
    imgs: ["/assets/mcProjs/fn/FrightNight_Thumbnail.webp"],
  },
];

// ─── MINECRAFT COMMUNITY SOFTWARE ────────────────────────────
const mcCommunityProjects = [
  {
    title: "Create Minecraft Bedrock CLI",
    short_info: "Open-source Node.js CLI Tool",
    description:
      "CLI tool to scaffold Minecraft Bedrock add-on workspaces in seconds. Generates structured folders, manifests, and includes Microsoft's official compiler. Used by developers to skip boilerplate and jump straight into scripting.",
    icon: "assets/Projs/bedrockcli/icon.webp",
    links: [
      {
        name: "Github",
        link: "https://github.com/Keyyard/create-mc-bedrock-cli",
      },
      {
        name: "NPM Package",
        link: "https://www.npmjs.com/package/create-mc-bedrock",
      },
      { name: "Website", link: "https://bedrockcli.keyyard.xyz" },
    ],
    imgs: ["assets/Projs/bedrockcli/gif.gif"],
    tags: ["TypeScript", "Node.js", "CLI", "Developer Tools"],
  },
  {
    title: "Blockception's VSCode Extension",
    short_info: "Contributed — VSCode Extension",
    description:
      "A VS Code extension providing code completion, validations, diagnostics, formatters, and creation tools for Minecraft Bedrock development. One of the most-used tools in the Bedrock dev community.",
    icon: "https://blockceptionltd.gallerycdn.vsassets.io/extensions/blockceptionltd/blockceptionvscodeminecraftbedrockdevelopmentextension/8.0.39/1749586201427/Microsoft.VisualStudio.Services.Icons.Default",
    links: [
      {
        name: "Github",
        link: "https://github.com/Blockception/VSCode-Bedrock-Development-Extension",
      },
      {
        name: "VSCode Marketplace",
        link: "https://marketplace.visualstudio.com/items/?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension",
      },
    ],
    imgs: ["/assets/Projs/blockception/overview.gif"],
    tags: ["TypeScript", "VSCode", "Developer Tools"],
  },
  {
    title: "Bedrock Wiki",
    short_info: "Contributed — Knowledge Base",
    description:
      "The go-to knowledge-sharing platform for Minecraft Bedrock Add-On development. Contains documentation, tutorials, and community-driven guides. Contributed articles and technical documentation.",
    icon: "/assets/Projs/wiki/logo.webp",
    links: [
      { name: "Github", link: "https://github.com/Bedrock-OSS/bedrock-wiki" },
      { name: "Wiki Website", link: "https://wiki.bedrock.dev/" },
    ],
    imgs: ["/assets/Projs/wiki/wiki.webp"],
    tags: ["Documentation", "Community", "Open Source"],
  },
];

// ─── ABOUT — PLAYER INFO ─────────────────────────────────────
// Edit these paragraphs to change the About section story text
const aboutPlayerInfo = [
  "I'm a developer who builds from curiosity — not from tutorials. I started modding Minecraft in 2018 with nothing but a text editor in an iPad and the stubbornness to figure things out. That instinct to learn through building has defined everything since.",
  "I'm drawn to systems that demand both precision and creativity, where I can use my logical thinking with creativity. Scripting a complex boss, designing physics-driven gameplay, or architecting a developer toolchain — I care deeply about the craft behind all of it.",
  "Being multidisciplinary isn't a side effect for me, it's the point. I've spent most of my time learning and working across Bedrock scripting, software development, and various non-technical fields because I believe every domain sharpens your thinking in the others.",
  "I do my best work on ambitious projects with talented people who care about making their dreams a reality. If you're building something that pushes limits — I want to be part of it.",
];

// ─── ABOUT — MINECRAFT SKILL BARS ────────────────────────────
const mcSkillsData = [
  { label: "Bedrock Entity Behavior", percent: 98 },
  { label: "Bedrock Scripting API", percent: 99 },
  { label: "Bedrock Items Functions", percent: 99 },
  { label: "Bedrock Animation Manipulatation", percent: 93 },
  { label: "Bedrock Blocks Features", percent: 78 },
];

// ─── ABOUT — TECH STACK ──────────────────────────────────────
const techStackData = [
  {
    title: "Programming Languages",
    items: [
      { value: "TypeScript" },
      { value: "JavaScript" },
      { value: "Python" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { label: "Frameworks", value: "React, Next.js" },
      { label: "Styling", value: "TailwindCSS, Bootstrap" },
      { label: "Core", value: "HTML5, CSS3, Vanilla JavaScript" },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { label: "APIs Frameworks", value: "FastAPI, Flask, Next.js" },
      { label: "Database", value: "PostgreSQL, SQLite, Prisma ORM, Supabase" },
      { label: "Authentication", value: "OAuth, JWT, Clerk, Supabase" },
    ],
  },
  {
    title: "Mobile Development",
    items: [{ value: "React Native" }, { value: "Expo" }, { value: "Lynx.JS" }],
  },
  {
    title: "Creative Tools",
    items: [
      {
        label: "3D Modeling & Animation",
        value: "Blockbench",
      },
      {
        label: "Graphics",
        value: "Aseprite, Adobe Photoshop, Figma",
      },
      {
        label: "Video Editing",
        value: "DaVinci Resolve, CapCut",
      },
    ],
  },
  {
    title: "Development Tools & Workflow",
    items: [
      { value: "Git & GitHub" },
      { value: "VS Code Extensions" },
      { value: "CLI Development" },
      { value: "npm / Package Management" },
    ],
  },
];

// ─── TROPHIES ─────────────────────────────────────────────────
// Each trophy is a milestone displayed as a 2D image on /trophies.
// image: path to the PNG trophy image in /public/assets/trophies/
//        Replace these placeholder PNGs with final artwork as needed.
// glowColor: hex color for the outline glow
const trophiesData: Array<{
  id: string;
  name: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  glowColor: string;
  link?: string;
  tags?: string[];
}> = [
  {
    id: "cut-the-rope-dlc",
    name: "DLC Developer",
    subtitle: "Cut the Rope × Minecraft",
    date: "Jul 2025",
    description: "Long before I even knew what Minecraft was, I was obsessed with Cut the Rope. I remember constantly borrowing my parents' phone every chance I got, completely hooked by the tricky puzzles and cute graphics.\n\nAs the years passed and I transitioned from player to developer, I eventually moved on from those early gaming memories. However, life has a funny way of coming full circle. Recently, the most surreal thing happened: I found myself working on the official Om Nom x Minecraft DLC crossover.\n\nIf you had told my younger self, the kid who was struggling with cutting ropes to feed Om Nom that I would one day be developing the collaboration of this scale, I wouldn't have believed it. It’s an incredible honor to bridge two of the most iconic pillars of my childhood into one massive project.",
    image: "/assets/trophies/omnom_trophy.png",
    glowColor: "#42f45d",
    link: "https://www.minecraft.net/en-us/marketplace/pdp/mush-co/cut-the-rope/b5c52ceb-8b81-4f97-9aae-f5fa668c0278",
    tags: ["Official DLC", "Microsoft", "Mojang", "ZeptoLab", "Cut the Rope", "Minecraft", "Om Nom"],
  },
  {
    id: "mc-partner",
    name: "Microsoft Partner",
    subtitle: "Official Marketplace Partner",
    description: "I have been passionate about Minecraft since childhood. I remember the old days of port forwarding and leaving my iPad running all day so others could join my world. Time flies; my curiosity and passion eventually led me to create content for the game, starting with maps and texture packs created by modifying file systems via jailbreaking.\n\nIn 2018, when Add-ons were released, I was blown away by the possibilities. I started learning how to manipulate JSONs by copying and pasting components, changing stats, and feeling frustrated when things wouldn't compile. I want to give a shout-out to @solvedDev for helping me so much at the start; he explained data structures and how things were supposed to work. That mix of logical thinking and creativity got me hooked on making increasingly complex content.\n\nAfter gaining significant recognition in the community, I had the opportunity to join G2Crafted, an official Microsoft Partner studio. This launched my professional career in Minecraft development. Although the business side was tough and some content flopped on the marketplace, I am grateful for the chance to learn teamwork, client communication, and how to meet deadlines. It was a huge step up from community projects to official work, and it set the foundation for everything that followed.",
    date: "Aug 2021",
    image: "/assets/trophies/mc_partner.png",
    glowColor: "#F5C542",
    link: "https://www.bedrockexplorer.com/@g2crafted",
    tags: ["Microsoft", "Official Partner", "Marketplace", "Minecraft"],
  },
  // {
  //   id: "5m-downloads",
  //   name: "5M Downloads",
  //   subtitle: "Community Milestone",
  //   description:
  //     "Reached 5 million total downloads across all community add-on projects. Tree Capitator & Vein Miner (2M+) and Actual Guns MCBE (3M+) lead the count.",
  //   date: "2023",
  //   shape: "star",
  //   image: "/assets/trophies/5m-downloads.png",
  //   glowColor: "#9B59B6",
  //   tags: ["Community", "Downloads", "Open Source"],
  // },
  // {
  //   id: "preston-collab",
  //   name: "Preston Collab",
  //   subtitle: "31M Subscriber Partnership",
  //   description:
  //     "Collaborated with PrestonPlayz (31M+ subscribers) on official Minecraft Marketplace content via Fire Games — one of the biggest creator partnerships in my career.",
  //   date: "2024",
  //   shape: "sword",
  //   image: "/assets/trophies/preston-collab.png",
  //   glowColor: "#E74C3C",
  //   link: "https://www.youtube.com/@PrestonPlayz",
  //   tags: ["Content Creator", "Fire Games", "31M Subscribers"],
  // },
  {
    id: "bedrock-oss",
    name: "Bedrock OSS",
    subtitle: "Open Source Contributor",
    description:
      "In late 2019, when I just came back to Minecraft development after a break, I'd found Bedrock Wiki & Bedrock OSS. The wiki had been a lifesaver for me make a comeback with up-to-date basic knowledge. This was the foundation of my professional career.\n\nI have always been looking up to people who contributed to the community and making various tools for other devs to work with more convenience. I have been contributing to Bedrock Wiki, Blockception's VSCode Extension, and some other packages in the ecosystem.\n\nBy 2025, I had the opportunity to officially promoted to a Project Lead in Bedrock OSS, leading the BedrockCLI - a powerful CLI tool to scaffold Minecraft Bedrock projects in seconds. A journey from a user to a contributor, and then to a small project leader in the community I admired the most.",
    date: "Jun 2025",
    image: "/assets/trophies/oss_trophy.png",
    glowColor: "#ffa3b6",
    link: "https://github.com/Bedrock-OSS/",
    tags: ["Community", "Minecraft", "Open Source", "Bedrock Wiki", "Bedrock CLI"],
  },
];

// ─── ABOUT — CREDENTIALS & AWARDS ────────────────────────────
// Update these with your real credentials. Each entry: icon, category, title, detail, date
const academicData: Array<{
  icon: string;
  category: string;
  title: string;
  detail: string;
  date: string;
}> = [
  {
    icon: "🏆",
    category: "Coming soon",
    title: "Awards",
    detail: "",
    date: "",
  },
  // { icon: "🌐", category: "Language",    title: "IELTS Academic",   detail: "Band —",   date: "—" },
  // { icon: "🏆", category: "Award",       title: "Award Name",       detail: "Details",  date: "Year" },
  // { icon: "📜", category: "Certificate", title: "Certificate Name", detail: "Issuer",   date: "Year" },
  // { icon: "🎓", category: "Education",   title: "School / Degree",  detail: "Details",  date: "Year" },
];

// ─── LEGACY (kept for compatibility) ─────────────────────────
const aboutMeData = aboutPlayerInfo.map((text) => ({ icon: "", text }));

const Projects = [
  {
    title: "Create Minecraft Bedrock CLI",
    short_info: "Node Module Package",
    description:
      "CLI tool to create Minecraft projects workspaces with structured folders and files. It includes Microsoft's Compiler",
    icon: "assets/Projs/bedrockcli/icon.webp",
    links: [
      {
        name: "Github",
        link: "https://github.com/Keyyard/create-mc-bedrock-cli",
      },
      {
        name: "NPM Package",
        link: "https://www.npmjs.com/package/create-mc-bedrock",
      },
      { name: "Website", link: "https://bedrockcli.keyyard.xyz" },
    ],
    imgs: ["assets/Projs/bedrockcli/gif.gif"],
    tags: ["Node.js", "CLI", "Minecraft", "Developer Tools", "Productivity"],
    status: "Live",
    featured: true,
  },
  {
    title: "Blockception's Minecraft Bedrock Development",
    short_info: "Contributed to VSCode Plugin",
    description:
      "An extension that provides code completion, validations, formatters, diagnostics, cheat-sheets, code-actions, creation of files, and development tools to help develop Minecraft Bedrock content.",
    icon: "https://blockceptionltd.gallerycdn.vsassets.io/extensions/blockceptionltd/blockceptionvscodeminecraftbedrockdevelopmentextension/8.0.39/1749586201427/Microsoft.VisualStudio.Services.Icons.Default",
    links: [
      {
        name: "Github",
        link: "https://github.com/Blockception/VSCode-Bedrock-Development-Extension",
      },
      {
        name: "VSCode Marketplace",
        link: "https://marketplace.visualstudio.com/items/?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension",
      },
    ],
    imgs: ["/assets/Projs/blockception/overview.gif"],
    tags: [
      "TypeScript",
      "VSCode",
      "Minecraft",
      "Developer Tools",
      "Productivity",
    ],
    status: "Live",
    featured: false,
  },
  {
    title: "Bedrock Wiki",
    short_info: "Contributed to Bedrock Wiki",
    description:
      "A knowledge-sharing website for Minecraft Bedrock Add-Ons, containing documentation, tutorials, and general how-to information.",
    icon: "/assets/Projs/wiki/logo.webp",
    links: [
      { name: "Github", link: "https://github.com/Bedrock-OSS/bedrock-wiki" },
      { name: "Wiki Website", link: "https://wiki.bedrock.dev/" },
    ],
    imgs: ["/assets/Projs/wiki/wiki.webp"],
    tags: ["Documentation", "Minecraft", "Community", "Education"],
    status: "Live",
    featured: false,
  },
  {
    title: "Today Notes",
    short_info: "Progressive Web App Project",
    description:
      "Today Notes helps you manage your daily tasks effortlessly. Stay focused on what matters today, complete tasks efficiently, and boost your productivity.",
    icon: "/assets/Projs/today/icon.webp",
    links: [
      { name: "Github", link: "https://github.com/Keyyard/today-notes" },
      { name: "Product", link: "https://today-notes.keyyard.xyz" },
    ],
    imgs: ["assets/Projs/today/4.webp"],
    tags: ["React", "PWA", "TypeScript", "Productivity"],
    status: "Inactive",
    featured: false,
  },
];

const startYear = 2018;
const currentYear = new Date().getFullYear();
const yearDifference = currentYear - startYear + 1;

const introductionText = [
  "Hi, I'm Keyyard, a developer with a passion for turning creative visions into scalable digital experiences.",
  `With ${yearDifference} years of expertise, I've delivered high-quality contents for big creators like Preston (30M+ subscribers), MrWoofless (1M+ subscribers), and many teams like Giggle Block Studios, FireGames, Mushco..`,
  "I had the privilege of working as a programmer on the official Minecraft x Cut the Rope DLC, a collaboration between Mush Co. (Minecraft's Official Partner @ Microsoft, Mojang), and ZeptoLab (CutTheRope).",
  "I specialize in Bedrock scripting, gameplay quality, and architecture, ensuring every project is optimized for performance and user engagement.",
];

export {
  experiences,
  experienceNodeStyles,
  experienceTiers,
  experienceLegend,
  mcProjects,
  mcCommunityProjects,
  Projects,
  navs,
  heroData,
  aboutMeData,
  aboutPlayerInfo,
  mcSkillsData,
  techStackData,
  academicData,
  trophiesData,
  introductionText,
};
