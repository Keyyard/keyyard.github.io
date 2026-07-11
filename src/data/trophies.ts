import { researchPapers } from "./research";

// ─── TROPHIES ─────────────────────────────────────────────────
// Each trophy is a milestone displayed as a 2D image on /trophies.
// image: path to the PNG trophy image in /public/assets/trophies/
//        Replace these placeholder PNGs with final artwork as needed.
// glowColor: hex color for the outline glow
export interface Trophy {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  glowColor: string;
  link?: string;
  tags?: string[];
  press?: { name: string; headline: string; url: string }[];
}

export const trophiesData: Trophy[] = [
  {
    id: "cut-the-rope-dlc",
    name: "DLC Developer",
    subtitle: "Cut the Rope × Minecraft",
    date: "Jul 2025",
    description:
      "Long before I even knew what Minecraft was, I was obsessed with Cut the Rope. I remember constantly borrowing my parents' phone every chance I got, completely hooked by the tricky puzzles and cute graphics.\n\nAs the years passed and I transitioned from player to developer, I eventually moved on from those early gaming memories. However, life has a funny way of coming full circle. Recently, the most surreal thing happened: I found myself working on the official Om Nom x Minecraft DLC crossover.\n\nIf you had told my younger self, the kid who was struggling with cutting ropes to feed Om Nom that I would one day be developing the collaboration of this scale, I wouldn't have believed it. It’s an incredible honor to bridge two of the most iconic pillars of my childhood into one massive project.",
    image: "/assets/trophies/omnom_trophy.png",
    glowColor: "#42f45d",
    link: "https://www.minecraft.net/en-us/marketplace/pdp/mush-co/cut-the-rope/b5c52ceb-8b81-4f97-9aae-f5fa668c0278",
    tags: [
      "Official DLC",
      "Microsoft",
      "Mojang",
      "ZeptoLab",
      "Cut the Rope",
      "Minecraft",
      "Om Nom",
    ],
    press: [
      {
        name: "GamesPress",
        headline:
          "ZeptoLab announces the release of a Minecraft experience: the Cut the Rope add-on",
        url: "https://www.gamespress.com/ZeptoLab-announces-the-release-of-a-Minecraft-experience-the-Cut-the-R",
      },
      {
        name: "Pocket Gamer",
        headline: "Cut the Rope x Minecraft add-on coverage",
        url: "https://www.pocketgamer.com/minecraft/cut-the-rope-add-on/",
      },
      {
        name: "GamingOnPhone",
        headline: "Cut the Rope expands into Minecraft with a new add-on",
        url: "https://gamingonphone.com/news/cut-the-rope-expands-into-minecraft-with-a-new-add-on-arriving-on-the-marketplace-this-december/",
      },
      {
        name: "Static Multimedia",
        headline:
          "ZeptoLab brings Om Nom to Minecraft with the Cut the Rope add-on",
        url: "https://staticmultimedia.com/zeptolab-brings-om-nom-to-minecraft-with-the-cut-the-rope-add-on/",
      },
      {
        name: "Total Licensing",
        headline:
          "Om Nom expands into Minecraft Marketplace with Cut the Rope add-on",
        url: "https://www.totallicensing.com/om-nom-expands-into-minecraft-marketplace-with-cut-the-rope-add-on/",
      },
      {
        name: "Gamelade.vn",
        headline: "Cut the Rope chính thức bước vào thế giới Minecraft",
        url: "https://gamelade.vn/cut-the-rope-chinh-thuc-buoc-vao-the-gioi-minecraft/",
      },
    ],
  },
  {
    id: "mc-partner",
    name: "Microsoft Partner",
    subtitle: "Official Marketplace Partner",
    description:
      "I have been passionate about Minecraft since childhood. I remember the old days of port forwarding and leaving my iPad running all day so others could join my world. Time flies; my curiosity and passion eventually led me to create content for the game, starting with maps and texture packs created by modifying file systems via jailbreaking.\n\nIn 2018, when Add-ons were released, I was blown away by the possibilities. I started learning how to manipulate JSONs by copying and pasting components, changing stats, and feeling frustrated when things wouldn't compile. I want to give a shout-out to @solvedDev for helping me so much at the start; he explained data structures and how things were supposed to work. That mix of logical thinking and creativity got me hooked on making increasingly complex content.\n\nAfter gaining significant recognition in the community, I had the opportunity to join G2Crafted, an official Microsoft Partner studio. This launched my professional career in Minecraft development. Although the business side was tough and some content flopped on the marketplace, I am grateful for the chance to learn teamwork, client communication, and how to meet deadlines. It was a huge step up from community projects to official work, and it set the foundation for everything that followed.",
    date: "Aug 2021",
    image: "/assets/trophies/mc_partner.png",
    glowColor: "#F5C542",
    link: "https://www.bedrockexplorer.com/@g2crafted",
    tags: ["Microsoft", "Official Partner", "Marketplace", "Minecraft"],
  },
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

// ─── ABOUT: CREDENTIALS & AWARDS ─────────────────────────────
// The published-research entries are derived from the shared `researchPapers`
// source (also powering the Researcher skill card) so they never drift apart.
// Add non-research credentials (awards, certs, education) to `extraCredentials`.
export interface Credential {
  icon: string;
  category: string;
  title: string;
  detail: string;
  date: string;
  link?: string;
}

const extraCredentials: Credential[] = [
  // { icon: "", category: "Language",    title: "IELTS Academic",   detail: "Band -",   date: "-" },
  // { icon: "", category: "Award",       title: "Award Name",       detail: "Details",  date: "Year" },
  // { icon: "", category: "Certificate", title: "Certificate Name", detail: "Issuer",   date: "Year" },
  // { icon: "", category: "Education",   title: "School / Degree",  detail: "Details",  date: "Year" },
];

export const academicData: Credential[] = [
  ...researchPapers.map((p) => ({
    icon: "",
    category: p.category,
    title: p.title,
    detail: p.detail,
    date: p.date,
    link: p.link,
  })),
  ...extraCredentials,
];
