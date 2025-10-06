import React from "react";
import { PostMeta } from "../../utils/markdown";
import CommunityCard from "./CommunityCard";

type Props = {
  posts: PostMeta[];
};

export default function CommunityList({ posts }: Props) {
  if (!posts.length)
    return <p className="text-center text-gray-400">No community posts yet.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((p) => (
        <CommunityCard key={p.slug} post={p} />
      ))}
    </div>
  );
}
