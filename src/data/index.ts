// ─── DATA BARREL ─────────────────────────────────────────────
// Domain data used to live in one 969-line `data.ts` plus a separate
// `softwareData.ts`. It is now split by domain across this folder; this barrel
// re-exports everything so `import { ... } from "../../data"` keeps working.
export { navs } from "./nav";
export { heroData } from "./hero";
export {
  experiences,
  experienceNodeStyles,
  experienceLegend,
  type Experience,
  type ExperienceTier,
} from "./experiences";
export { mcProjects } from "./projects";
export {
  mcCommunityProjects,
  softwareProjects,
  softwarePageMeta,
  iosApps,
  type SoftwareProject,
  type IosApp,
} from "./software";
export { aboutPlayerInfo, skillClasses, techStackData, type SkillClass } from "./about";
export { trophiesData, academicData, type Trophy, type Credential } from "./trophies";
export { researchPapers, type ResearchPaper } from "./research";
