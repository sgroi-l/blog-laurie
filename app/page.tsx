import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { TagList } from "@/components/tag-list";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts
        .map((post) => (
          <article key={post._id}>
            <h2 className="mb-0">
              <Link href={post.slug}>{post.title}</Link>
            </h2>
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-xs">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <TagList tags={post.tags} />
            </div>
            {post.description && <p>{post.description}</p>}
          </article>
        ))
        .reverse()}
    </div>
  );
}
