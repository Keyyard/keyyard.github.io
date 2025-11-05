import Head from "next/head";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import DiscoveryList from "../../components/discovery/DiscoveryList";
import { getAllDiscoveryPosts } from "../../utils/markdown";
import { generateRss } from "../../utils/rss";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllDiscoveryPosts();
  // generate RSS at build time
  try {
    generateRss(posts);
  } catch (e) {
    // fail silently during generation so build doesn't crash in edge cases
    // console.error(e);
  }
  return { props: { posts } };
};

export default function DiscoveryIndex({ posts }: { posts: any[] }) {
  const [filter, setFilter] = useState<string | null>(null);
  const [q, setQ] = useState("");

  const tags = useMemo(() => {
    const s = new Set<string>();
    posts.forEach((p: any) => (p.tags || []).forEach((t: string) => s.add(t)));
    return Array.from(s).sort();
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((p: any) => {
      if (filter && !(p.tags || []).includes(filter)) return false;
      if (
        q &&
        !(p.title + p.description).toLowerCase().includes(q.toLowerCase())
      )
        return false;
      return true;
    });
  }, [posts, filter, q]);

  return (
    <>
      <Head>
        <title>Keyyard Discovery</title>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Discovery RSS"
          href="/discovery/rss.xml"
        />
      </Head>
      <section id="discovery" className="section">
        <div className="px-4 mx-auto w-full">
          <div className="mb-4 p-4 flex items-center justify-between">
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-gray-400 flex items-center gap-3"
            >
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-200">Discovery</span>
            </nav>
          </div>
          <h2 className="section-title pb-2">Keyyard Discovery</h2>
          <div className="flex gap-4 mb-6 items-center">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects..."
              className="flex-1 p-2 border rounded bg-[#111] text-gray-100"
            />
            <div className="flex gap-2 items-center">
              <label htmlFor="tag-select" className="sr-only">
                Filter by tag
              </label>
              <select
                id="tag-select"
                value={filter || ""}
                onChange={(e) => setFilter(e.target.value || null)}
                className="p-2 rounded bg-[#111] text-gray-100 border"
                aria-label="Filter discovery projects by tag"
              >
                <option value="">All</option>
                {tags.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <DiscoveryList posts={filtered} />
        </div>
      </section>
    </>
  );
}
