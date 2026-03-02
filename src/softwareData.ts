// Software portfolio data — edit this file to update /software page

export const softwareProjects = [
  {
    title: "Today Notes",
    short_info: "Progressive Web App",
    description:
      "A minimal daily task manager built as a PWA. Helps you focus on what matters today — no accounts, no sync, just a fast local-first experience with clean UX.",
    icon: "/assets/Projs/today/icon.webp",
    links: [
      { name: "GitHub",  link: "https://github.com/Keyyard/today-notes" },
      { name: "Live App", link: "https://today-notes.keyyard.xyz" },
    ],
    imgs: ["assets/Projs/today/4.webp"],
    tags: ["React", "TypeScript", "PWA", "Productivity"],
    status: "Live" as const,
  },
  // Add more software projects here
];

export const softwarePageMeta = {
  title: "Software Projects",
  subtitle: "Web apps, tools, and experiments outside the Minecraft ecosystem.",
  githubUrl: "https://github.com/Keyyard",
};
