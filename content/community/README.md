# Community Authoring Guide

Where to put posts
- Place markdown files under `content/community/`. A post may be either `content/community/<slug>.md` or `content/community/<slug>/index.md`.
- Store images and small assets under `public/community/<slug>/` (e.g. `public/community/super-tool/hero.png`).

Required frontmatter
```
---
title: "My Project"
slug: "my-project"       # optional (defaults to filename)
tags: ["tag1","tag2"]
description: "One-line summary used in the index and RSS"
date: "2025-10-06"       # ISO YYYY-MM-DD
image: "/community/my-project/hero.png"
download: "https://cdn.example.com/my-project/my-project.zip"  # external URL recommended for paid/large files
---
```

Content
- Use normal Markdown (GFM supported). Images should reference files in `public/community/<slug>/`.
- Keep the first paragraph short — it will be used as the summary in the listing and RSS feed.

Previewing and building
- Run `npm run dev` to preview locally at `/community` and `/community/<slug>`.
- RSS is generated at build time and written to `public/community/rss.xml` during `next build` or when the site is deployed.

Hosting assets & downloads
- Store images in `public/community/<slug>/` — these are static and served by the site.
- For free/small downloads you may place small archives in `public/community/<slug>/`, but avoid committing large or paid content to the repository.
- For paid or large downloads, host the file externally (S3, CDN, Gumroad, etc.) and set the `download:` frontmatter to the external URL.

Best practices
- Use lowercase slugs with hyphens.
- Include at least one `image` for the listing thumbnail.
- Keep `description` concise (one or two sentences) — this is used in index cards and RSS summaries.
