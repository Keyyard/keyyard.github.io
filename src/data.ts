const navs = [
  {
    name: "Hero",
    link: "/",
  },
  {
    name: "About Me",
    link: "/#about",
  },
  {
    name: "Experiences",
    link: "/#experiences",
  },
  {
    name: "Projects",
    link: "/#projects",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

const experiences = [
  {
    title: "Legendary Creator",
    company_name: "MCPEDL",
    date: "Feb 2018 - Present",
    details: [
      "Started creating community addons on 11 February, 2018.",
      "Developed Tree Capitator and Vein Miner, one of the top popular addons of all time.",
      "Created Redstone Mechanic Addon, which was the top popular addon in 2018 and 2019.",
      "Co-founded Actual Guns, one of the first and largest gun addons in Minecraft Bedrock. Later on, the project was taken over by Azoz and Jun.",
    ],
  },
  {
    title: "Entrepreneur",
    company_name:
      "Keyyard Studio - G2crafted Partnership | Official Minecraft Marketplace",
    date: "Aug 2021 - 2023",
    details: [
      "Developed and delivered Minecraft Creations for Official Minecraft Marketplace and the community.",
      "Designed and developed innovative Minecraft Marketplace content to enhance the player experience.",
      "Managed full project lifecycle from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Contract Developer",
    company_name: "Giggle Block Studios Ltd | Official Minecraft Marketplace",
    date: "Apr 2022 - Jan 2023",
    details: [
      "Developed entities, behaviors and gameplays.",
      "Maintain animations, renders and animation controllers.",
    ],
  },
  {
    title: "Contract Developer",
    company_name: "MELONBP | Official Minecraft Marketplace",
    date: "Mar 2023 - Jul 2024",
    details: [
      "Engineered complex mob behaviors, allowing dynamic and responsive gameplay interactions.",
      "Designed and implemented new features, including custom mechanics and interactive objects.",
    ],
  },
  {
    title: "Contract Developer",
    company_name: "Fire Games | Official Minecraft Marketplace",
    date: "Jul 2024 - Present",
    details: [
      "Developing advanced JavaScript and TypeScript scripting for dynamic behavior and custom mechanics.",
      "Enhancing player interaction and immersion by integrating new gameplay features and animation improvements.",
      "Refactoring game logic to improve performance, maintainability, and scalability.",
      "Worked for PrestonPlayz, one of the top Minecraft YouTubers. Some of the projects are still not presented to the public.",
    ],
  },
];

const projects = [
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
    imgs: [
      "/assets/projs/tc.png",
      "https://i.ytimg.com/vi/lze7XP_hMio/maxresdefault.jpg",
      "https://github.com/Keyyard/Minecraft-Tree-Capitator-and-Vein-Miner-Addon/raw/main/imgs/img5.png",
      "https://github.com/Keyyard/Minecraft-Tree-Capitator-and-Vein-Miner-Addon/raw/main/imgs/img4.png",
      "https://github.com/Keyyard/Minecraft-Tree-Capitator-and-Vein-Miner-Addon/raw/main/imgs/img3.png",
      "https://github.com/Keyyard/Minecraft-Tree-Capitator-and-Vein-Miner-Addon/raw/main/imgs/img2.png",
    ],
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
      "/assets/projs/smm.png",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/1510cab7-b0b3-4896-8c71-86b5e44ea6af/fg_screenshot_1.jpg",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/76faee75-a4a2-43ff-9efc-f2fa97b2f5ce/fg_screenshot_2.jpg",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/369417ac-b8ba-435d-99c5-7c08f593c2a3/fg_screenshot_0.jpg",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/7b3b3b3b-3b3b-3b3b-3b3b-3b3b3b3b3b3b/fg_screenshot_3.jpg",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/3b3b3b3b-3b3b-3b3b-3b3b-3b3b3b3b3b3b/fg_screenshot_4.jpg",
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
      "https://github.com/Keyyard/dynamic-torchlight/raw/main/medias/torch.gif",
      "https://github.com/Keyyard/dynamic-torchlight/raw/main/medias/torch2.gif",
      "https://github.com/Keyyard/dynamic-torchlight/raw/main/medias/image1.png",
      "https://github.com/Keyyard/dynamic-torchlight/raw/main/medias/image2.png",
      "https://github.com/Keyyard/dynamic-torchlight/raw/main/medias/image3.png",
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
    imgs: [
      "https://github.com/Keyyard/PortalGunsAddon-ScriptingAPI/raw/main/medias/portal-appears.gif",
      "https://github.com/Keyyard/PortalGunsAddon-ScriptingAPI/raw/main/medias/portals.gif",
    ],
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
      "/assets/projs/wc/keyart.png",
      "/assets/projs/wc/wc1.jpg",
      "/assets/projs/wc/wc2.jpg",
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
      "https://pbs.twimg.com/media/GTqwM7SWQAAIEVq?format=jpg&name=large",
      "https://pbs.twimg.com/media/GWFjLdgWgAAVYUq?format=jpg&name=large",
      "https://pbs.twimg.com/media/GLZezFubUAA4E5O?format=jpg&name=large",
      "https://pbs.twimg.com/media/GGFd4o_W0AA5A_n?format=jpg&name=large",
      "https://pbs.twimg.com/media/GDl2vZhXQAAU-8H?format=jpg&name=large",
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
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/ba27f9a3-6b02-49a3-85a7-91f311240a2e/Trains_Thumbnail_0.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/a8fa42ce-c57a-4566-8057-fce0fdbcf665/Trains_MarketingScreenshot_2.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/05e286fb-2e1a-40b5-ad1e-2217ac1afa05/Trains_MarketingScreenshot_0.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/d7e0d146-9f83-4f3f-9e25-9d4a64780221/Trains_MarketingScreenshot_1.jpg",
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
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/9ddd017d-cab7-4265-9113-ad3f6c5bf0bb/One_Block_Thumbnail_0.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/adc467e8-813c-4c53-98d1-93ce2df6382e/One_Block_Screenshot_3.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/c5019b04-27f0-483a-950a-0f90deafad2a/One_Block_Screenshot_0.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/db0defc4-dc8b-4173-92fb-5b93111fa8c8/One_Block_Screenshot_2.jpg",
    ],
  },
];

const aboutMeData = [
  {
    icon: "🔨",
    text: "Developer specializing in Web, Native, and Minecraft Add-on Development.",
  },
  {
    icon: "🎮",
    text: "Minecraft Add-on Developer (Bedrock Engine) since 2019.",
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
    title: "Web Development",
    items: [
      { label: "Frontend", value: "Vanilla JavaScript, React" },
      { label: "Backend", value: "FastAPI, Flask, Next.js, Prisma ORM" },
      { label: "Databases", value: "PostgreSQL, SQLite, JSON" },
    ],
  },
  {
    title: "Styling",
    items: [{ value: "TailwindCSS" }, { value: "Bootstrap" }],
  },
  {
    title: "Native Development",
    items: [{ value: "React Native" }, { value: "Expo" }, { value: "Lynx.JS" }],
  },
  {
    title: "Programming Languages",
    items: [
      { value: "TypeScript" },
      { value: "JavaScript" },
      { value: "Python" },
    ],
  },
  {
    title: "Game Development",
    items: [{ value: "Minecraft Add-on Development (Bedrock Engine)" }],
  },
];

const startYear = 2019;
const currentYear = new Date().getFullYear();
const yearDifference = currentYear - startYear + 1;

const introductionText = [
  "Hi, I'm Keyyard. Nice to meet you!",
  `Since beginning my journey as a Minecraft Add-on Developer ${yearDifference} years ago`,
  "I've worked for agencies, start-ups, and talented KOLs like PrestonPlayz, ranging from community to Official Minecraft Marketplace projects.",
  "I'm quietly confident, naturally curious, and perpetually working on improving my skills.",
];

export {
  experiences,
  projects,
  navs,
  aboutMeData,
  techStackData,
  introductionText,
};
