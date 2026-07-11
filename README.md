# Keyyard Portfolio

Welcome to the **Keyyard Portfolio** — my personal portfolio site, showcasing my work as an Official Minecraft Marketplace developer, iOS engineer, and researcher. It highlights my projects across game development, software, and creative design, built as an interactive, Minecraft-themed single-page experience.

## Table of Contents

- [Live Website](#live-website)
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Editing Content](#editing-content)
- [License](#license)

## Live Website

Check out the live portfolio at **[https://keyyard.xyz](https://keyyard.xyz)**.

## About the Project

This portfolio showcases my journey as a developer specializing in **Minecraft Add-on Development**, **Software / Web Development**, and **iOS Development**. It features an interactive 3D avatar, smooth animations, and a pixel-art Minecraft aesthetic to deliver an engaging experience. It also highlights my technical skills, published research, shipped projects, and collaborations with notable partners like **PrestonPlayz** and official Minecraft Marketplace studios (including the **Cut the Rope × Minecraft** DLC).

## Features

- **Interactive 3D Avatar** — a fully interactive 3D model of my Minecraft head that reacts to mouse input, powered by Three.js / React Three Fiber.
- **Minecraft-themed UI** — pixel fonts, block motifs, and an RPG "character sheet" for skills, all with smooth `Framer Motion` animations.
- **Career Timeline** — an expandable, color-tiered timeline of experiences.
- **Project Showcases** — Minecraft projects, community dev tools, iOS apps, and a dedicated [`/software`](https://keyyard.xyz/software) page.
- **Trophy Cabinet** — milestone achievements at [`/trophies`](https://keyyard.xyz/trophies).
- **Discovery / Blog** — markdown-driven content pages under [`/discovery`](https://keyyard.xyz/discovery) with an RSS feed.
- **Responsive Design** — optimized for desktop, tablet, and mobile.
- **Easter Eggs** — a Konami-code achievement and a birthday "level up" toast. 🎮

## Tech Stack

### Framework & Language

- **[Next.js 16](https://nextjs.org/)** (Pages Router, Turbopack) — statically exported
- **React 18** + **TypeScript**

### 3D & Animations

- **Three.js** with **@react-three/fiber**, **drei**, and **postprocessing**
- **Framer Motion** for animations and transitions

### Styling

- **Tailwind CSS** (+ `@tailwindcss/typography`)
- Custom CSS for the pixel/Minecraft theme

### Content & Utilities

- **marked** + **gray-matter** + **sanitize-html** — markdown content for the Discovery pages
- **feed** — RSS generation
- **react-hot-toast** — toasts / easter eggs
- **react-responsive-carousel** — project image carousels

### Tooling & Deployment

- **Vercel** — hosting and CI/CD
- **@vercel/analytics** — privacy-friendly analytics
- **ESLint** — linting

## Project Structure

```
src/
├── components/
│   ├── layout/        # Nav, Background, MyHead (3D avatar)
│   ├── sections/      # Hero, About, Experiences, Minecraft/Community/Apps, Contact
│   ├── discovery/     # Blog/discovery cards & list
│   ├── trophies/      # Trophy cabinet
│   └── ui/            # SafeImage, SafeCarousel
├── data/              # All site content, split by domain (see below)
│   ├── nav.ts
│   ├── hero.ts
│   ├── experiences.ts
│   ├── projects.ts        # Minecraft projects
│   ├── software.ts        # dev tools, /software projects, iOS apps
│   ├── about.ts           # bio, skill classes, tech stack
│   ├── trophies.ts        # trophies + credentials
│   ├── research.ts        # shared source for published research
│   └── index.ts           # barrel re-export
├── pages/             # Next.js pages (/, /software, /trophies, /discovery, ...)
└── utils/             # birthday XP, link styling, markdown, RSS
```

Content lives in **`src/data/`**, organized by domain and re-exported through `src/data/index.ts`, so components import from a single `../../data` entry point.

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Lint
npm run lint
```

## Editing Content

Most updates are data-only — no component changes needed:

- **Experiences / career** → `src/data/experiences.ts` (each entry carries its own `tier` for timeline color)
- **Minecraft projects** → `src/data/projects.ts`
- **Community dev tools, /software projects, iOS apps** → `src/data/software.ts`
- **About bio, skills, tech stack** → `src/data/about.ts`
- **Trophies & credentials** → `src/data/trophies.ts`
- **Published research** → `src/data/research.ts` (feeds both the Researcher card and the Credentials list)
- **Blog / discovery posts** → markdown files in `content/discovery/`

## License

See [LICENSE](./LICENSE) for details.

## Inspired?

Feel free to explore the code! If you like the project, consider giving it a star ⭐️ on GitHub — it means a lot to me.
