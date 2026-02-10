import BlogCard from "./BlogCard";

type Props = {
  posts: any[];
  activeCategory: string;
};

export default function BlogGrid({ posts, activeCategory }: Props) {
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <section
      id="blog-grid"
      className="dts-section-shell p-12 max-w-6xl mx-auto mb-20 mt-20"
    >
      <h2 className="text-3xl font-bold mb-10">
        {activeCategory === "All"
          ? "All Articles"
          : `${activeCategory} Articles`}
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
