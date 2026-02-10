import BlogCard from "./BlogCard";

export default function BlogFeatured({ posts }: any) {
  const featured = posts.filter((p: any) => p.featured);

  return (
    <section className="dts-section-shell p-12 max-w-6xl mx-auto mt-18 mb-18">
      <h2 className="text-3xl font-bold mb-10">Featured Blogs</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {featured.map((post: any) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
