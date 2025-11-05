import Link from "next/link";
import React, { memo } from "react";
import { PostMeta } from "../../utils/markdown";
import SafeImage from "../ui/SafeImage";

type Props = {
  post: PostMeta;
};

const DiscoveryCard = memo(({ post }: Props) => {
  return (
    <article className="group h-full">
      <Link
        href={`/discovery/${post.slug}`}
        className="project-card discovery-card block h-full flex flex-col"
      >
        {/* Fixed-height image area so cards align evenly */}
        <div className="w-full h-56 overflow-hidden rounded-t">
          {post.image ? (
            <SafeImage
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="project-title">
            <span className="text-lg font-semibold">{post.title}</span>
          </h3>
          <p className="project-subtitle">{post.description}</p>
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
});

DiscoveryCard.displayName = "DiscoveryCard";

export default DiscoveryCard;
