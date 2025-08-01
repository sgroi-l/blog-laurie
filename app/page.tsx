import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <h2 className="mb-0">
            <Link href={post.slug}>{post.title}</Link>
          </h2>
          <span className="text-xs">
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
