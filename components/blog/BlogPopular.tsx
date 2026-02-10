import Link from "next/link";

export default function BlogPopular({ posts }: any) {
  const popular = posts.slice(0, 5);

  return (
    <section className="dts-section-shell p-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Most Read</h2>
      <ul className="space-y-6">
        {popular.map((p: any, i: number) => (
          <li key={p.slug} className="flex gap-4">
            <span className="text-dts-neon font-bold">{i + 1}</span>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
