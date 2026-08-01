import { getBirthdayXP } from "../utils/birthday";

// ─── HERO DATA ───────────────────────────────────────────────
const _birthdayXP = getBirthdayXP();

const _startYear = 2018;
const _currentYear = new Date().getFullYear();
const _yearsXp = _currentYear - _startYear;

export const heroData = {
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
  pixelName: "KEYYARD", // display name kept; SEO H1 handled via aria-label in Hero.tsx
  roleBadge: "Official Minecraft Partner & Developer",
  storyHook: `In 2018, I started modding Minecraft from scratch - no tutorials, just curiosity and a text editor.<br/>By 2026, <strong>I contributed to over 20 official Microsoft Partners projects, including the official <span class="hl-diamond">Minecraft × Cut The Rope crossover DLC</span></strong>. I worked with <a href="https://www.youtube.com/@PrestonYT" style="color: #d50b34" target="_blank" rel="noopener noreferrer">Preston - a 31M subscribers YouTuber</a> on a Minecraft Marketplace content as well.`,
  statCards: [
    {
      cssClass: "gold",
      blockBg: "var(--gold)",
      blockShadow:
        "inset -2px -2px 0 rgba(0,0,0,0.4), inset 2px 2px 0 rgba(255,255,255,0.3)",
      num: "10M+",
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
    description: `Shipped as an official DLC in partnership with <strong style="color:var(--diamond)">Mush Co., Microsoft, Mojang &amp; ZeptoLab</strong>. Available on the Minecraft Marketplace worldwide.`,
  },
  ctaButtons: [
    { text: "View My Work", action: "projects", variant: "primary" },
    { text: "Contact Me", action: "contact", variant: "secondary" },
  ] as { text: string; action: string; variant: "primary" | "secondary" }[],
  xpPercent: _birthdayXP.xpPercent,
  xpBar: {
    label: `LVL ${_birthdayXP.age} · KEYYARD`,
    progressText: _birthdayXP.isBirthday
      ? `HAPPY BIRTHDAY! LVL UP!`
      : `${_birthdayXP.xpPercent}% to LVL ${_birthdayXP.nextLevel}`,
  },
};
