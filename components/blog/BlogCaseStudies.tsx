import BlogCard from "./BlogCard";

export default function BlogCaseStudies({ posts }: any) {
  const caseStudies = posts.filter((p: any) => p.caseStudy);

  if (caseStudies.length === 0) return null;

  return (
    <section className="dts-section-shell p-14 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Real Results & Case Studies
      </h2>

      <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
        Real campaigns, real execution, real results from DTS projects.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {caseStudies.map((post: any) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
