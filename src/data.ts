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
    imgs: [
      "/assets/mcProjs/tc.png",
      "https://i.ytimg.com/vi/lze7XP_hMio/maxresdefault.jpg",
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
      "/assets/mcProjs/smm.png",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/1510cab7-b0b3-4896-8c71-86b5e44ea6af/fg_screenshot_1.jpg",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/76faee75-a4a2-43ff-9efc-f2fa97b2f5ce/fg_screenshot_2.jpg",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/369417ac-b8ba-435d-99c5-7c08f593c2a3/fg_screenshot_0.jpg",
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
      "/assets/mcProjs/wc/keyart.png",
      "/assets/mcProjs/wc/wc1.jpg",
      "/assets/mcProjs/wc/wc2.jpg",
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
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/cf9d5fc7-5c1f-4e80-947f-8449fc501150/Thumbnail_0.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/9cffecb4-b96b-41e4-9c20-8f3eabf6af66/Screenshot_2.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/e9cb51f3-27e0-4361-a2b6-4ab14255d2ce/Screenshot_3.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/919968d3-9ca9-45f2-84c5-d095013bdfe1/Screenshot_4.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/3b600886-e238-4ed7-9084-a12c82f2ff11/Screenshot_0.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/0abe1765-b4b9-4ee6-87ee-7f1847eaf2ef/Screenshot_1.jpg",
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
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/14693ee6-8d89-4b1d-b98a-8bffd53b2b23/Thumbnail_0.jpg",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/ac877822-2a4f-46d6-8663-7f4f4b80b0b1/Screenshot_2.jpg",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/3e61a475-c7e5-4557-b2c7-d0e1a1a31b38/Screenshot_3.jpg",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/d670b857-6bf5-4bd1-b04b-8cde622d222f/Screenshot_4.jpg",
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/b4b201bc-b20a-4ad7-9804-bc400c2c5c54/Screenshot_1.jpg",
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
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/596d31ac-c845-4a65-9fde-021af4fa675f/Thumbnail_0.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/e22f04d7-4397-4f1d-b949-d7a6c33c6b2c/Screenshot_2.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/1969fb00-d0b5-450c-96c0-2d4cb2e3fc00/Screenshot_3.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/91c62a91-84b3-4fb2-be44-d7b913e6a45b/Screenshot_4.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/bad47484-bcef-4dce-bac3-cac9567938ba/Screenshot_0.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/c1a9b4d7-b347-429d-b52c-a6c079eaabb9/Screenshot_1.jpg",
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
      "https://images.bedrockexplorer.com/minecraft-marketplace-content/g2crafted-3d-medieval-experience-thumbnail-ea2dbbec5214a3c4-800.jpg",
      "https://media-cdn.bedrockexplorer.com/OYHa744eNPhWP45JkrSxRzDMUsbpl53L6uOLSpt6kQo/fill/800/450/ce/1/aHR0cHM6Ly94Zm9yZ2Vhc3NldHMwMDEueGJveGxpdmUuY29tL3BmLXRpdGxlLWI2M2EwODAzZDM2NTM2NDMtMjBjYTIvYTEwMGM0ZDktNDhlNi00NGUxLTk1YzMtMDk0YzFjN2MzYWIwLzNEX01lZGlldmFsX0V4cGVyaWVuY2VfTWFya2V0aW5nU2NyZWVuc2hvdF8xLmpwZw/minecraft-marketplace-content-by-g2crafted-3d-medieval-experience.png",
      "https://media-cdn.bedrockexplorer.com/AI7wrYVmwTkiK9-a_g0A9gP_VTi_dX7iAMlTKmFuS3w/fill/800/450/ce/1/aHR0cHM6Ly94Zm9yZ2Vhc3NldHMwMDEueGJveGxpdmUuY29tL3BmLXRpdGxlLWI2M2EwODAzZDM2NTM2NDMtMjBjYTIvOGIxMGJhYTMtM2NkNC00YmM1LWFmNTAtMWI0MjJlN2Y0NDEyLzNEX01lZGlldmFsX0V4cGVyaWVuY2VfTWFya2V0aW5nU2NyZWVuc2hvdF8yLmpwZw/minecraft-marketplace-content-by-g2crafted-3d-medieval-experience.png",
      "https://media-cdn.bedrockexplorer.com/oGGTiPxK7H9m4RCbiXFeg2UXNij6ejnI9ddb9eMTy4Q/fill/800/450/ce/1/aHR0cHM6Ly94Zm9yZ2Vhc3NldHMwMDEueGJveGxpdmUuY29tL3BmLXRpdGxlLWI2M2EwODAzZDM2NTM2NDMtMjBjYTIvNjU1YzIwZTMtZmY2Ny00YWQ5LWI4NTctODllMGJlY2MxMjM3LzNEX01lZGlldmFsX0V4cGVyaWVuY2VfTWFya2V0aW5nU2NyZWVuc2hvdF80LmpwZw/minecraft-marketplace-content-by-g2crafted-3d-medieval-experience.png",
      "https://media-cdn.bedrockexplorer.com/OYHa744eNPhWP45JkrSxRzDMUsbpl53L6uOLSpt6kQo/fill/800/450/ce/1/aHR0cHM6Ly94Zm9yZ2Vhc3NldHMwMDEueGJveGxpdmUuY29tL3BmLXRpdGxlLWI2M2EwODAzZDM2NTM2NDMtMjBjYTIvYTEwMGM0ZDktNDhlNi00NGUxLTk1YzMtMDk0YzFjN2MzYWIwLzNEX01lZGlldmFsX0V4cGVyaWVuY2VfTWFya2V0aW5nU2NyZWVuc2hvdF8xLmpwZw/minecraft-marketplace-content-by-g2crafted-3d-medieval-experience.png",
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
    imgs: [
      "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/82fb9eac-c719-40be-affd-315560116328/Demonic_Legends_Thumbnail.jpg",
    ],
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
    imgs: [
      "https://xforgeassets001.xboxlive.com/pf-title-b63a0803d3653643-20ca2/a3492053-54af-4730-aff7-91d4ba374bcb/FrightNight_Thumbnail.jpg",
    ],
  },
];

const Projects = [
  {
    title: "Create Minecraft Bedrock CLI",
    short_info: "Node Module Package",
    description:
      "CLI tool to create Minecraft projects workspaces with structured folders and files. It includes Microsoft's Compiler",
    icon: "https://raw.githubusercontent.com/Keyyard/create-mc-bedrock-cli/refs/heads/website/public/icon.ico",
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
    imgs: [
      "https://github.com/Keyyard/create-mc-bedrock-cli/blob/main/medias/gif.gif?raw=true",
    ],
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
    imgs: [
      "https://github.com/Blockception/VSCode-Bedrock-Development-Extension/raw/HEAD/documentation/resources/overview.gif",
    ],
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
    icon: "https://wiki.bedrock.dev/assets/images/icons/logo.png",
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
    imgs: ["/assets/Projs/wiki.png"],
    tags: ["Documentation", "Minecraft", "Community", "Education"],
    status: "Live",
    featured: false,
  },
  {
    title: "Today Notes",
    short_info: "Progressive Web App Project",
    description:
      "Today Notes helps you manage your daily tasks effortlessly. Stay focused on what matters today, complete tasks efficiently, and boost your productivity.",
    icon: "https://github.com/Keyyard/today-notes/blob/main/public/icons/196.png?raw=true",
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
    imgs: [
      "https://github.com/Keyyard/today-notes/blob/main/public/medias/4.png?raw=true",
    ],
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
