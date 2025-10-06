import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

export type PostMeta = {
  title: string;
  slug: string;
  tags?: string[];
  description?: string;
  date?: string;
  image?: string;
  download?: string;
};

const CONTENT_PATH = path.join(process.cwd(), "content", "community");

export async function renderMarkdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
}

export async function getAllCommunityPosts(): Promise<PostMeta[]> {
  if (!fs.existsSync(CONTENT_PATH)) return [];
  const files = fs.readdirSync(CONTENT_PATH).filter((f) => f.endsWith(".md"));
  const posts: PostMeta[] = files.map((file) => {
    const full = path.join(CONTENT_PATH, file);
    const raw = fs.readFileSync(full, "utf8");
    const { data } = matter(raw);
    const slug = data.slug || file.replace(/\.md$/, "");
    return {
      title: data.title || slug,
      slug,
      tags: data.tags || [],
      description: data.description || "",
      date: data.date || "",
      image: data.image || "",
      download: data.download || "",
    };
  });

  posts.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return posts;
}

export async function getCommunityPost(slug: string) {
  const filenameCandidates = [
    `${slug}.md`,
    path.join(slug, "index.md"),
  ];

  for (const candidate of filenameCandidates) {
    const full = path.join(CONTENT_PATH, candidate);
    if (fs.existsSync(full)) {
      const raw = fs.readFileSync(full, "utf8");
      const { data, content } = matter(raw);
      const html = await renderMarkdownToHtml(content);
      const meta: PostMeta = {
        title: data.title || slug,
        slug: data.slug || slug,
        tags: data.tags || [],
        description: data.description || "",
        date: data.date || "",
        image: data.image || "",
        download: data.download || "",
      };
      return { meta, html };
    }
  }
  return null;
}
