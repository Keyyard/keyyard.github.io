import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { getAllCommunityPosts, getCommunityPost } from "../../utils/markdown";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllCommunityPosts();
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug || "");
  const post = await getCommunityPost(slug);
  if (!post) return { notFound: true };
  return { props: { post } };
};

export default function CommunityPost({ post }: any) {
  const { meta, html } = post;
  return (
    <>
      <Head>
        <title>{meta.title} — Community</title>
      </Head>
      <main className="container mx-auto p-6">
        <article>
          <h1 className="text-3xl font-bold">{meta.title}</h1>
          <p className="text-sm text-gray-400">{meta.date}</p>
          <div className="mt-4">
            {meta.image ? <img src={meta.image} alt={meta.title} className="w-full max-h-72 object-cover" /> : null}
          </div>
          <div className="mt-4 flex gap-2">
            {meta.tags?.map((t: string) => (
              <span key={t} className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6">
            {meta.download ? (
              <a href={meta.download} className="px-4 py-2 bg-green-600 rounded text-white inline-block" target="_blank" rel="noreferrer">
                Download
              </a>
            ) : null}
          </div>

          <div className="prose max-w-none mt-8" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
    </>
  );
}
