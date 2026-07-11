// ─── MINECRAFT PROJECTS ──────────────────────────────────────
// category: 'featured' = 1 large card per row
//           'highlight' = 3-column grid
//           'normal'    = compact expandable list
export const mcProjects = [
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
    title: "Holiday Helpers",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "Celebrate the holiday cheer with Holiday Helpers! Summon mini Santa, receive presents every Minecraft day, and discover festive blocks & items!",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp/mush-co/holiday-helpers/f97721c3-fc7d-40ad-918b-43d2aae1bb46",
      },
    ],
    imgs: ["/assets/mcProjs/hh/hh.jpg"],
  },
  {
    category: "highlight" as const,
    title: "BlockPack",
    short_info: "Official Minecraft Marketplace Project",
    description:
      "BlockPack Add-on adds +1000 CRAFTABLE & 50 unique FUNCTIONAL new blocks",
    links: [
      {
        name: "Minecraft Marketplace",
        link: "https://www.minecraft.net/en-us/marketplace/pdp/block-factory/block-pack-add--on/8970dbd7-a3e1-4fc9-b74a-05e6acc6830f",
      },
    ],
    imgs: ["/assets/mcProjs/bp/bp.jpg"],
  },
  {
    category: "normal" as const,
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
    category: "normal" as const,
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
      "/assets/mcProjs/tnt/Thumbnail_0.webp",
      "/assets/mcProjs/tnt/Screenshot_2.webp",
      "/assets/mcProjs/tnt/Screenshot_3.webp",
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
