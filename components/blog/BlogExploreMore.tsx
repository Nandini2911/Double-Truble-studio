import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export default function BlogExploreMore({
  posts,
  currentSlug,
}: {
  posts: Post[];
  currentSlug: string;
}) {
  // ✅ Works for 1 blog or many blogs
  const morePosts =
    posts.length > 1
      ? posts.filter((p) => p.slug !== currentSlug).slice(0, 3)
      : posts.slice(0, 1);

  return (
    <section className="mt-24">
      <div className="dts-section-shell p-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore More Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {morePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="dts-card-3d block overflow-hidden"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover rounded-md mb-5"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
