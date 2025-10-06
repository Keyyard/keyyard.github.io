import Head from "next/head";
import React, { useMemo, useState } from "react";
import { GetStaticProps } from "next";
import CommunityList from "../../components/community/CommunityList";
import { getAllCommunityPosts } from "../../utils/markdown";
import { generateRss } from "../../utils/rss";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllCommunityPosts();
  // generate RSS at build time
  try {
    generateRss(posts);
  } catch (e) {
    // fail silently during generation so build doesn't crash in edge cases
    // console.error(e);
  }
  return { props: { posts } };
};

export default function CommunityIndex({ posts }: { posts: any[] }) {
  const [filter, setFilter] = useState<string | null>(null);
  const [q, setQ] = useState("");

  const tags = useMemo(() => {
    const s = new Set<string>();
    posts.forEach((p: any) => (p.tags || []).forEach((t: string) => s.add(t)));
    return Array.from(s).sort();
  }, [posts]);

  const filtered = posts.filter((p: any) => {
    if (filter && !(p.tags || []).includes(filter)) return false;
    if (q && !(p.title + p.description).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <Head>
        <title>Community — Keyyard</title>
        <link rel="alternate" type="application/rss+xml" title="Community RSS" href="/community/rss.xml" />
      </Head>
      <main className="container mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Community</h1>
          <p className="text-gray-400">Free community projects, tools, and downloads.</p>
        </header>

        <div className="flex gap-4 mb-6 items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects..."
            className="flex-1 p-2 border rounded bg-[#111] text-gray-100"
          />
          <div className="flex gap-2">
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-1 rounded ${filter ? "bg-gray-700" : "bg-green-600"}`}>
              All
            </button>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter((f) => (f === t ? null : t))}
                className={`px-3 py-1 rounded ${filter === t ? "bg-green-600" : "bg-gray-700"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <CommunityList posts={filtered} />
      </main>
    </>
  );
}
