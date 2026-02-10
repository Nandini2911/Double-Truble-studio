type Props = {
  setActiveCategory: (cat: string) => void;
};

export default function BlogTools({ setActiveCategory }: Props) {
  const resources = [
    {
      title: "Guest & Celebrity Handling Guides",
      category: "Guest Management",
      desc: "Practical insights on managing VIP guests and celebrities in events.",
    },
    {
      title: "PR, Media & Digital Playbooks",
      category: "PR, Media & Digital Marketing",
      desc: "Frameworks and strategies for brand visibility and growth.",
    },
    {
      title: "Web & Marketing Systems",
      category: "Web Development & Marketing",
      desc: "How websites and funnels are built to convert visitors.",
    },
    {
      title: "AI Video & Creative Tech",
      category: "AI Video & VFX",
      desc: "How AI videos and VFX are changing brand storytelling.",
    },
  ];

  const handleClick = (cat: string) => {
    setActiveCategory(cat);

    setTimeout(() => {
      const el = document.getElementById("blog-grid");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <section className="dts-section-shell p-14 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Resources to Explore
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {resources.map((r) => (
          <div
            key={r.title}
            onClick={() => handleClick(r.category)}
            className="dts-card-3d cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-4">{r.title}</h3>
            <p className="text-gray-400 text-sm">{r.desc}</p>

            <div className="mt-6 text-dts-neon text-sm tracking-widest">
              EXPLORE ARTICLES →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
