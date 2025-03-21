const navs = [
  {
    name: "Hero",
    link: "/",
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
      "Developed mob ai-behaviors, and enhance player gameplays.",
      "Maintain and improve existing models, animations, controllers and renders.",
      "Design concepts and implement new features for the game.",
    ],
  },
  {
    title: "Contract Developer",
    company_name: "Fire Games | Official Minecraft Marketplace",
    date: "Jul 2024 - Present",
    details: [
      "Develop javascript, typescript scripting, mob ai-behaviors, and enhance player gameplays.",
      "Maintain and improve existing models, animations, controllers and renders.",
      "Design concepts and implement new features for the game.",
    ],
  },
];

const projects = [
  {
    title: "Tree Capitator and Vein Miner Addon",
    date: "Scripting API Project",
    description:
      "Gathering resources more efficiently and conveniently, optimized and allowing enchantments, durability, and more.",
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
    date: "Official Minecraft Marketplace Project",
    description:
      "Custom weapons (boomerang-like weapon,..), custom mechanic on entities via scripting (Jumpscare..).",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=aa1a855c-628e-48f2-bfdb-174bb25c45ab",
      },
    ],
    imgs: ["/assets/projs/smm.png"],
  },
  {
    title: "Dynamic Torchlighting",
    date: "Community Project",
    description:
      "Lighting up the area around while holding torches, and allowing off-hand torches.",
    links: [
      {
        name: "Github",
        link: "https://github.com/Keyyard/dynamic-torchlight",
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
    date: "Community Project",
    description:
      "Adds the Portal Gun, which shoot portals allowing instant travel between two places.",
    links: [
      {
        name: "Github",
        link: "https://github.com/Keyyard/PortalGunsAddon-ScriptingAPI",
      },
    ],
    imgs: [
      "https://github.com/Keyyard/PortalGunsAddon-ScriptingAPI/raw/main/medias/portal-appears.gif",
      "https://github.com/Keyyard/PortalGunsAddon-ScriptingAPI/raw/main/medias/portals.gif"
    ],
  },
  {
    title: "Weapon Combiner",
    date: "Community Project",
    description:
      "Allows players to infuse weapons with powerful abilities using a custom crafting block. Create new enchantments and randomized abilities for weapons.",
    links: [
      {
        name: "MCPEDL",
        link: "https://mcpedl.com/weapon-combiner/",
      },
    ],
    imgs: [
      "https://r2.mcpedl.com/submissions/244479/images/weapon-combiner_2.png",
      "https://r2.mcpedl.com/submissions/244479/images/weapon-combiner_3.png",
    ],
  },
  {
    title: "Actual Guns MCBE",
    date: "Community Project",
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
    date: "Official Minecraft Marketplace Project",
    description:
      "Deeply made Entities and Animation Controllers for attachable trains.",
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
    date: "Official Minecraft Marketplace Project",
    description:
      "Full gameplay development with custom entities, weapons, boss fighting, and more.",
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
    title: "TNT Experiments",
    date: "Official Minecraft Marketplace Project",
    description: "Deeply command block mechanics.",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp?id=YOUR_TNT_EXPERIMENTS_ID",
      },
    ],
    imgs: [
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/596d31ac-c845-4a65-9fde-021af4fa675f/Thumbnail_0.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/e22f04d7-4397-4f1d-b949-d7a6c33c6b2c/Screenshot_2.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/c1a9b4d7-b347-429d-b52c-a6c079eaabb9/Screenshot_1.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/1969fb00-d0b5-450c-96c0-2d4cb2e3fc00/Screenshot_3.jpg",
      "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/91c62a91-84b3-4fb2-be44-d7b913e6a45b/Screenshot_4.jpg",
    ],
  },
];

export { experiences, projects, navs };
