export default function BlogNewsletter() {
  return (
    <section className="dts-section-shell p-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">
        Get Free Event & Brand Planning Checklist
      </h2>

      <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
        A practical checklist used by DTS for managing guests, celebrities,
        events, PR campaigns and brand marketing.
      </p>

      <div className="flex justify-center gap-4">
       <input
  suppressHydrationWarning
  placeholder="Enter your email"
  className="px-4 py-3 bg-black border border-gray-700 rounded w-72"
/>
        <button className="dts-animated-border">
          <span>Get Free Guide</span>
        </button>
      </div>
    </section>
  );
}
