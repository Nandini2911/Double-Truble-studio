type Props = {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
};

export const serviceCategories = [
  "All",
  "Guest Management",
  "Celebrity Management",
  "Events & Weddings",
  "PR, Media & Digital Marketing",
  "Web Development & Marketing",
  "AI Video & VFX",
  "Strategic Road Map",
];

export default function BlogCategories({
  activeCategory,
  setActiveCategory,
}: Props) {
  const handleClick = (cat: string) => {
    setActiveCategory(cat);

    setTimeout(() => {
      const el = document.getElementById("blog-grid");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <section className="dts-section-shell p-14 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Explore by Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {serviceCategories.map((cat) => {
          const isActive = activeCategory === cat;

          return (
            <div
              key={cat}
              onClick={() => handleClick(cat)}
              className={`cursor-pointer dts-card-3d text-center transition-all duration-500
                ${isActive ? "ring-2 ring-dts-neon scale-[1.04]" : ""}
              `}
            >
              <div className="dts-pill mb-6">Category</div>

              <h3 className="text-xl font-semibold mb-3">{cat}</h3>

              <p className="text-gray-400 text-sm">
                Explore articles and insights related to {cat}.
              </p>

              <div className="mt-6 text-dts-neon text-sm tracking-widest">
                EXPLORE →
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
