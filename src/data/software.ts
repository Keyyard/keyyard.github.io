// ─── SOFTWARE ────────────────────────────────────────────────
// Everything non-Minecraft-content lives here: dev tools (Community Software
// section), the standalone /software page projects, and the iOS apps (Apps
// section). Previously split between data.ts and a separate softwareData.ts
// with two near-identical shapes; unified under `SoftwareProject`.

export interface SoftwareLink {
  name: string;
  link: string;
}

export interface SoftwareProject {
  title: string;
  short_info: string;
  description: string;
  icon?: string;
  links: SoftwareLink[];
  imgs: string[];
  tags: string[];
  status?: "Live" | "WIP";
}

// ─── COMMUNITY SOFTWARE (dev tools for Minecraft Bedrock) ─────
export const mcCommunityProjects: SoftwareProject[] = [
  {
    title: "Create Minecraft Bedrock CLI",
    short_info: "Open-source Node.js CLI Tool",
    description:
      "CLI tool to scaffold Minecraft Bedrock add-on workspaces in seconds. Generates structured folders, manifests, and includes Microsoft's official compiler. Used by developers to skip boilerplate and jump straight into scripting.",
    icon: "/assets/Projs/bedrockcli/icon.webp",
    links: [
      { name: "Github", link: "https://github.com/Keyyard/create-mc-bedrock-cli" },
      { name: "NPM Package", link: "https://www.npmjs.com/package/create-mc-bedrock" },
      { name: "Website", link: "https://bedrockcli.keyyard.xyz" },
    ],
    imgs: ["/assets/Projs/bedrockcli/gif.gif"],
    tags: ["TypeScript", "Node.js", "CLI", "Developer Tools"],
  },
  {
    title: "Blockception's VSCode Extension",
    short_info: "Contributed: VSCode Extension",
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
    title: "Lantern for Minecraft Bedrock",
    short_info: "Contributed: VSCode Extension",
    description:
      "A VS Code extension that gives Bedrock add-on developers a proper IDE experience by grouping the files related to each entity and item together, cutting out time spent scrolling through folders and juggling files.",
    icon: "https://Hatchibombotar.gallerycdn.vsassets.io/extensions/hatchibombotar/bedrock-file-grouper/0.4.1/1782856836125/Microsoft.VisualStudio.Services.Icons.Default",
    links: [
      { name: "Github", link: "https://github.com/Hatchibombotar/lantern" },
      {
        name: "VSCode Marketplace",
        link: "https://marketplace.visualstudio.com/items?itemName=Hatchibombotar.bedrock-file-grouper",
      },
    ],
    imgs: [
      "https://Hatchibombotar.gallerycdn.vsassets.io/extensions/hatchibombotar/bedrock-file-grouper/0.4.1/1782856836125/Microsoft.VisualStudio.Services.Icons.Default",
    ],
    tags: ["TypeScript", "VSCode", "Developer Tools"],
  },
  {
    title: "Bedrock Wiki",
    short_info: "Contributed: Knowledge Base",
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

// ─── STANDALONE SOFTWARE (/software page) ────────────────────
export const softwareProjects: SoftwareProject[] = [
  {
    title: "Today Notes",
    short_info: "Progressive Web App",
    description:
      "A minimal daily task manager built as a PWA. Helps you focus on what matters today. No accounts, no sync, just a fast local-first experience with clean UX.",
    icon: "/assets/Projs/today/icon.webp",
    links: [
      { name: "GitHub", link: "https://github.com/Keyyard/today-notes" },
      { name: "Live App", link: "https://today-notes.keyyard.xyz" },
    ],
    imgs: ["/assets/Projs/today/4.webp"],
    tags: ["React", "TypeScript", "PWA", "Productivity"],
    status: "Live",
  },
  // Add more standalone software projects here
];

export const softwarePageMeta = {
  title: "Software Projects",
  subtitle: "Web apps, tools, and experiments outside the Minecraft ecosystem.",
  githubUrl: "https://github.com/Keyyard",
};

// ─── iOS / CONSUMER APPS (Apps section) ──────────────────────
export interface IosApp {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  banner?: string;
  appStoreUrl: string;
  landingUrl: string;
  platform: "iOS";
}

export const iosApps: IosApp[] = [
  {
    title: "No Doomscrolling",
    tagline: "Take Back Your Time",
    description:
      "Block distracting apps, complete a 4-7-8 breathing ritual before unlocking them, and track your willpower over time. Built for creators who refuse to let their attention be stolen.",
    icon: "/assets/Projs/nd/icon.png",
    appStoreUrl: "https://apps.apple.com/vn/app/nodoomscrolling/id6762450161",
    landingUrl: "https://keyyard.xyz/no-doomscrolling",
    platform: "iOS",
  },
  {
    title: "Productivitism: Life RPG",
    tagline: "Pixel RPG for Habits & Focus",
    description:
      "Turn your real-life goals into pixel-art characters. Build habits, crush quests, and focus deeper, all in one cozy 16-bit RPG. Your party is waiting.",
    icon: "/assets/Projs/productivitism/icon.png",
    banner: "/assets/Projs/productivitism/banner.png",
    appStoreUrl: "https://apps.apple.com/us/app/productivitism-life-rpg/id6761625990",
    landingUrl: "https://productivitism.com",
    platform: "iOS",
  },
];
