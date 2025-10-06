import fs from "fs";
import path from "path";
import { Feed } from "feed";
import { PostMeta } from "./markdown";

export function generateRss(posts: PostMeta[]) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://keyyard.xyz";
  const feed = new Feed({
    title: "Keyyard — Community",
    description: "Community projects and downloads",
    id: siteUrl,
    link: siteUrl,
    language: "en",
    updated: posts.length ? new Date(posts[0].date || Date.now()) : new Date(),
    feedLinks: {
      rss: `${siteUrl}/community/rss.xml`,
    },
    author: {
      name: "Keyyard",
    },
  });

  posts.forEach((post) => {
    const url = `${siteUrl}/community/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description || "",
      date: post.date ? new Date(post.date) : new Date(),
    });
  });

  const rss = feed.rss2();
  const outDir = path.join(process.cwd(), "public", "community");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "rss.xml"), rss);
}
