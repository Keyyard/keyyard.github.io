import Link from "next/link";
import React from "react";
import { PostMeta } from "../../utils/markdown";
import SafeImage from "../ui/SafeImage";

type Props = {
  post: PostMeta;
};

export default function DiscoveryCard({ post }: Props) {
  return (
    <article className="group">
      <Link
        href={`/discovery/${post.slug}`}
        className="project-card discovery-card block"
      >
        {post.image ? (
          <SafeImage
            src={post.image}
            alt={post.title}
            className="w-full h-44 object-cover rounded"
          />
        ) : (
          <div className="w-full h-44 bg-gray-800 flex items-center justify-center text-gray-400 rounded">
            No Image
          </div>
        )}

        <div className="p-4">
          <h3 className="project-title">
            <span className="text-lg font-semibold">{post.title}</span>
          </h3>
          <h4 className="project-subtitle">{post.description}</h4>
          <p className="discovery-description mt-2">{post.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags?.map((t) => (
              <span
                key={t}
                className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
