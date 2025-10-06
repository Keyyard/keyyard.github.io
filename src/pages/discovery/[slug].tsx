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
        <title>{`${meta.title} — Discovery`}</title>
      </Head>
      <section className="section">
        {/* Breadcrumb */}
        <div className="mb-4 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-gray-400 flex items-center gap-3"
            >
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
        <div className="w-full flex justify-center py-12">
          <article className="w-full max-w-4xl px-4 lg:px-8 mx-auto">
            <header className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-center">
                {meta.title}
              </h1>
              {/* Tags + date row: tags on left, date on right. Top banner intentionally removed. */}
              <div className="mt-4 flex items-start justify-between">
                <div className="flex gap-3">
                  {meta.tags?.map((t: string) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-sm text-gray-400">{meta.date}</div>
                </div>
              </div>
            </header>

            {/* Strip a leading image paragraph from the rendered HTML so the inline banner (if present in markdown)
                doesn't duplicate or create a large top banner. */}
            {(() => {
              const rendered =
                typeof html === "string"
                  ? html.replace(/^\s*<p>\s*<img[^>]*>\s*<\/p>/i, "")
                  : html;
              return (
                <div
                  className="prose prose-invert mx-auto"
                  dangerouslySetInnerHTML={{ __html: rendered }}
                />
              );
            })()}

            {/* Downloads should be included in the markdown content if desired. */}
            {/* Downloads (multiple versions) */}
            {meta.downloads && meta.downloads.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Downloads</h3>
                <div className="flex flex-col gap-3">
                  {meta.downloads.map((d: any, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="font-medium">
                          {d.label || `Version ${i + 1}`}
                        </div>
                        {d.notes ? (
                          <div className="text-sm text-gray-400">{d.notes}</div>
                        ) : null}
                      </div>
                      <div>
                        <a
                          href={d.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded bg-green-600 hover:bg-green-800 text-white"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-8 flex justify-center gap-4">
              {meta.github ? (
                <a
                  href={meta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${meta.title} on GitHub`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-purple-600 hover:bg-purple-800 text-white font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  View on GitHub
                </a>
              ) : null}

              <a
                href={"https://discord.gg/s2VfQr69uz"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Join ${meta.title} Discord community`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#5865F2] hover:bg-[#4752c4] text-white font-medium"
              >
                <svg
                  viewBox="0 0 640 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                  />
                </svg>
                Join our Discord
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
