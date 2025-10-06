import React from "react";
import { PostMeta } from "../../utils/markdown";
import DiscoveryCard from "./DiscoveryCard";

type Props = {
  posts: PostMeta[];
};

export default function DiscoveryList({ posts }: Props) {
  if (!posts.length)
    return (
      <p className="text-center text-gray-400">
        No posts yet, come back later?
      </p>
    );
  // Ensure posts are sorted by date (newest first). Some posts may omit dates.
  const sorted = [...posts].sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da; //db - da for descending order (newest first)
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 pb-32">
      {sorted.map((p) => (
        <div key={p.slug} className="group">
          <DiscoveryCard post={p} />
        </div>
      ))}
    </div>
  );
}
