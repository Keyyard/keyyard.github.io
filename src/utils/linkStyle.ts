// ─── SHARED LINK-PILL COLORS ─────────────────────────────────
// Single source of truth for the colored link pills used across every
// project/software card. Previously this map was copy-pasted into three
// components with inconsistent keys ("Github" vs "GitHub"), so a link would
// get colored in one section and fall back to gray in another.
//
// Keys are matched case-insensitively, so both "Github" and "GitHub" resolve.
const LINK_COLORS: Record<string, { bg: string; color: string }> = {
  // Code / packages
  "github": { bg: "#3D2E55", color: "#E2D4F0" },
  "npm": { bg: "#5C1A1A", color: "#F5A0A0" },
  "npm package": { bg: "#5C1A1A", color: "#F5A0A0" },
  // Web / product
  "website": { bg: "#0D2A3D", color: "#7DD8F8" },
  "live app": { bg: "#0D2A3D", color: "#7DD8F8" },
  "product": { bg: "#0D2A3D", color: "#7DD8F8" },
  // Marketplaces / distribution
  "vscode marketplace": { bg: "#0C2640", color: "#4EA7E8" },
  "minecraft marketplace": { bg: "#0D2E22", color: "#4ECDC4" },
  "mcpedl": { bg: "#1E3D1E", color: "#A3D977" },
  "curseforge": { bg: "#6B3520", color: "#F5B89A" },
  "wiki website": { bg: "#1A2D0D", color: "#A3D977" },
};

const FALLBACK = { bg: "#252528", color: "#B8A88A" };

export function linkStyle(name: string) {
  return LINK_COLORS[name.toLowerCase()] ?? FALLBACK;
}
