import Link from "next/link";
import React from "react";
import { PostMeta } from "../../utils/markdown";

type Props = {
  post: PostMeta;
};

export default function CommunityCard({ post }: Props) {
  return (
    <article className="border rounded-md overflow-hidden shadow-sm hover:shadow-md">
      <Link href={`/community/${post.slug}`}>
        <a className="block">
          {post.image ? (
            <img src={post.image} alt={post.title} className="w-full h-44 object-cover" />
          ) : (
            <div className="w-full h-44 bg-gray-800 flex items-center justify-center text-gray-400">No Image</div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{post.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags?.map((t) => (
                <span key={t} className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}
