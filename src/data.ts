const navs = [
  {
    name: "Hero",
    link: "/#hero",
    sectionId: "hero",
  },
  {
    name: "About",
    link: "/#about",
    sectionId: "about",
  },
  {
    name: "Experiences",
    link: "/#experiences",
    sectionId: "experiences",
  },
  {
    name: "Projects",
    link: "/#projects",
    sectionId: "projects",
  },
  {
    name: "Contact",
    link: "/#contact",
    sectionId: "contact",
  },
];

const experiences = [
  {
    title: "Legendary Creator",
    company_name: "MCPEDL",
    company_url: "https://mcpedl.com/user/keyyard/",
    date: "Feb 2018 - Present",
    details: [
      "Architected Tree Capitator and Vein Miner with optimized algorithms, proving my ability to create solutions that scale to millions of users.",
      "Dominated the addon market in 2018-2019 with Redstone Mechanic, demonstrating my expertise in creating trend-setting content.",
      "Co-founded and launched Actual Guns addon, establishing one of the most successful Minecraft Bedrock projects with 3M+ downloads.",
    ],
  },
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
    date: "April 2025 - Present",
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
      "New Developer at Mushco, still learning and adapting to the company's development practices and culture.",
    ],
  },
];

const mcProjects = [
  {
    title: "Tree Capitator and Vein Miner Addon",
    short_info: "Community Project",
    description:
      "Designed an optimized scripting system that accelerates resource gathering. Features dynamic block breaking, enchantment support, and durability tracking, improving vanilla gameplay with minified performance loss.",
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
    downloads: "2.0M+",
    imgs: ["/assets/mcProjs/tc.webp", "/assets/mcProjs/tc/maxresdefault.webp"],
  },
  {
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
    title: "Dynamic Torchlighting",
    short_info: "Community Project",
    description:
      "Implemented real-time dynamic lighting for torches, allowing off-hand illumination. Optimized for performance while maintaining a seamless experience.",
    links: [
      {
        name: "Github",
        link: "https://github.com/Keyyard/dynamic-torchlight",
      },
      {
        name: "MCPEDL",
        link: "https://mcpedl.com/dynamic-torchlight-addon/",
      },
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
    title: "Weapon Combiner",
    short_info: "Community Project",
    description:
      "Developed a custom crafting block that allows players to fuse weapons with unique abilities. Introduced new enchanting table with randomized enchantments and skill-based upgrades, enhancing weapon customization.",
    links: [
      {
        name: "MCPEDL",
        link: "https://mcpedl.com/weapon-combiner/",
      },
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
    title: "Actual Guns MCBE",
    short_info: "Community Project",
    description:
      "Help creating the add-on in early stages with UI & Gun Shooting mechanic via Animation Controller & Snowball run identifer, and later on, the project was taken over by Azoz and Jun.",
    links: [
      {
        name: "MCPEDL",
        link: "https://mcpedl.com/actual-guns-addon/",
      },
    ],
    downloads: "3.0M+",
    imgs: [
      "/assets/mcProjs/ag/GWFjLdgWgAAVYUq.webp",
      "/assets/mcProjs/ag/GLZezFubUAA4E5O.webp",
      "/assets/mcProjs/ag/GDl2vZhXQAAU-8H.webp",
    ],
  },
  {
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
    title: "Crossbow Expansion",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Craft the most overpowered crossbows in Minecraft! Perfect for survival, PvP, hunting, and anything else your mind can think of! Features Auto, Modified, Lighting, TNT, Ender, Apocalyptic, and Fire Crossbows. All craftable with much more!",
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
    title: "Redstone Expansion",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Tinker with brand new redstone tech! Features 11 NEW Redstone Components with brand new machines and mechanisms to be made. Includes interactive demonstrations at spawn to help you get started.",
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
    title: "TNT Experiments",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Ready to blow your world into pieces? Explore the biggest and baddest TNT explosions in TNT EXPERIMENTS. Try and pass all 21 TNT levels and create your own TNT experiment with the Custom TNT Sandbox Editor. It's all you could ever want to fulfill your TNT needs!",
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
      "assets/mcProjs/tnt/Screenshot_4.webp",
      "assets/mcProjs/tnt/Screenshot_0.webp",
      "assets/mcProjs/tnt/Screenshot_1.webp",
    ],
  },
  {
    title: "3D Medieval Experience",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Step into a medieval world filled with side quests to enhance your gameplay! Features 7 3D items, medieval cannon with unique behaviors, 4 custom NPCs, and a medieval castle at spawn. Developed by Keyyard Studio in partnership with G2Crafted.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=7f3ced8b-5d8c-483b-a516-05aff064231d",
      },
    ],
    imgs: [
      "/assets/mcProjs/3dme/g2crafted-3d-medieval-experience-thumbnail-ea2dbbec5214a3c4-800.webp",
      "/assets/mcProjs/3dme/3D_Medieval_Experience_MarketingScreenshot_1.webp",
      "/assets/mcProjs/3dme/3D_Medieval_Experience_MarketingScreenshot_2.webp",
      "/assets/mcProjs/3dme/3D_Medieval_Experience_MarketingScreenshot_4.webp",
    ],
  },
  {
    title: "Demonic Legends",
    short_info: "Official Minecraft Marketplace Skin Pack",
    description:
      "Embrace the legend of demons! This skin pack features fun-loving and cute demon friends that aren't as scary as they seem. Features 12 devil skins with unique horn accessories. Developed by Keyyard Studio in partnership with G2Crafted.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=47c862c8-98c1-497c-94a5-3959eea3fec5",
      },
    ],
    imgs: ["/assets/mcProjs/dl/Demonic_Legends_Thumbnail.webp"],
  },
  {
    title: "Fright Night",
    short_info: "Official Minecraft Marketplace Skin Pack",
    description:
      "Suit up for the annual scare-fest Halloween with our Fright Night pack. Play as frightening characters including Clown, Demon, Ghost, Jack O' Lantern, Ogre, Vampire, Scarecrow, Skeleton, and more! Features 12 spooky skins. Developed by Keyyard Studio in partnership with G2Crafted.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=7ddad910-7c39-46c0-8e6d-8ed38f870d04",
      },
    ],
    imgs: ["/assets/mcProjs/fn/FrightNight_Thumbnail.webp"],
  },
];

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
      {
        name: "Website",
        link: "https://bedrockcli.keyyard.xyz",
      },
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
      {
        name: "Github",
        link: "https://github.com/Bedrock-OSS/bedrock-wiki",
      },
      {
        name: "Wiki Website",
        link: "https://wiki.bedrock.dev/",
      },
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
      {
        name: "Github",
        link: "https://github.com/Keyyard/today-notes",
      },
      {
        name: "Product",
        link: "https://today-notes.keyyard.xyz",
      },
    ],
    imgs: ["assets/Projs/today/4.webp"],
    tags: ["React", "PWA", "TypeScript", "Productivity"],
    status: "Inactive",
    featured: false,
  },
];

const aboutMeData = [
  {
    icon: "🔨",
    text: "Developer specializing in Web, Native, and Minecraft Add-on Development.",
  },
  {
    icon: "🎮",
    text: "Minecraft Add-on Developer (Bedrock Engine) since 2018.",
  },
  {
    icon: "🚀",
    text: "Passionate about performance, optimizations, and scalable systems.",
  },
  {
    icon: "🤝",
    text: "Open to collaborations on challenging projects that push technical and creative limits.",
  },
];

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
      { label: "Database", value: "PostgreSQL, SQLite, Prisma ORM" },
      { label: "Authentication", value: "OAuth, JWT, Clerk" },
    ],
  },
  {
    title: "Mobile Development",
    items: [{ value: "React Native" }, { value: "Expo" }, { value: "Lynx.JS" }],
  },
  {
    title: "Game Development",
    items: [
      {
        label: "Minecraft Bedrock",
        value: "Add-on Development, Scripting API",
      },
    ],
  },
  {
    title: "Development Tools & Workflow",
    items: [
      { value: "Git & GitHub" },
      { value: "VS Code Extensions" },
      { value: "CLI Development" },
      { value: "npm/Package Management" },
    ],
  },
];

const startYear = 2018;
const currentYear = new Date().getFullYear();
const yearDifference = currentYear - startYear + 1;

const introductionText = [
  "Hi, I'm Keyyard, a developer with a passion for turning creative visions into scalable digital experiences.",
  `With ${yearDifference} years of expertise, I've delivered high-quality contents for big creators like Preston (30M+ subscribers), MrWoofless (1M+ subscribers), and many teams like Giggle Block Studios, FireGames, Mushco,..`,
  "I specialize in Bedrock scripting, gameplay quality, and architecture, ensuring every project is optimized for performance and user engagement.",
];

export {
  experiences,
  mcProjects,
  Projects,
  navs,
  aboutMeData,
  techStackData,
  introductionText,
};
