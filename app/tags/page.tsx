import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function TagsPage() {
  const tagCounts = allPosts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const sortedTags = Object.entries(tagCounts).sort(([, a], [, b]) => b - a);

  return (
    <div className="prose dark:prose-invert">
      <h1>Tags</h1>
      <div className="grid gap-4">
        {sortedTags.map(([tag, count]) => (
          <div key={tag} className="border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="mb-2 text-lg font-medium">{tag} ({count})</h2>
            <div className="space-y-2">
              {allPosts
                .filter((post) => post.tags.includes(tag))
                .map((post) => (
                  <div key={post._id} className="text-sm">
                    <Link href={post.slug} className="hover:underline">
                      {post.title}
                    </Link>
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}