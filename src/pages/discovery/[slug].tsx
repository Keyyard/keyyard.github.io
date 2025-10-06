import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAllDiscoveryPosts, getDiscoveryPost } from "../../utils/markdown";
import SafeImage from "../../components/ui/SafeImage";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllDiscoveryPosts();
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug || "");
  const post = await getDiscoveryPost(slug);
  if (!post) return { notFound: true };
  return { props: { post } };
};

export default function DiscoveryPost({ post }: any) {
  const { meta, html } = post;
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{meta.title} — Discovery</title>
      </Head>
      <section className="section">
        <div className="w-full flex justify-center py-12">
          <article className="w-full max-w-4xl px-4 lg:px-8 mx-auto">
            {/* Breadcrumb + Back */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => router.back()}
                  className="text-sm px-3 py-1 rounded bg-gray-800 hover:bg-gray-700"
                  aria-label="Go back"
                >
                  ← Back
                </button>
                <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
                  <Link href="/discovery" className="hover:underline">
                    Discovery
                  </Link>
                  <span className="mx-2">/</span>
                  <span aria-current="page" className="text-gray-200">
                    {meta.title}
                  </span>
                </nav>
              </div>
            </div>

            <header className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-center">
                {meta.title}
              </h1>
              <p className="text-sm text-gray-400 mt-2 text-center">
                {meta.date}
              </p>

              {/* Image */}
              <div className="mt-6 flex justify-center">
                {meta.image ? (
                  <SafeImage
                    src={meta.image}
                    alt={meta.title}
                    className="w-full max-w-3xl max-h-64 object-cover rounded"
                  />
                ) : null}
              </div>

              {/* Tags: aligned left like a blog meta row */}
              <div className="mt-4">
                <div className="flex justify-start gap-2">
                  {meta.tags?.map((t: string) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            <div
              className="prose prose-invert mx-auto"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Downloads should be included in the markdown content if desired. */}
          </article>
        </div>
      </section>
    </>
  );
}
