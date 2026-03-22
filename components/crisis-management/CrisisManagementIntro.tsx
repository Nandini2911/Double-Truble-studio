export default function CrisisManagementIntro() {
  return (
    <section className="relative px-4 py-20 md:px-6 md:py-16">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-dts-neon/10 via-transparent to-dts-neon-pink/10 blur-2xl" />

      {/* Grid Overlay */}
      <div className="dts-grid-overlay" />

      <div className="mx-auto max-w-6xl">
        
        {/* HEADER */}
        <div className="text-center flex flex-col items-center">
  <span className="dts-pill mb-6 text-xs tracking-widest">
    Understanding Crisis Management
  </span>

          <h2 className="dts-heading-3d font-heading text-3xl leading-tight text-dts-fog sm:text-4xl md:text-5xl">
            What is Crisis Management?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-body text-sm leading-7 text-dts-fog/75 sm:text-base md:text-lg md:leading-8">
            Crisis management is the strategic process of identifying,
            responding to, and recovering from unexpected events that can
            disrupt operations, damage reputation, or threaten business
            continuity. It ensures organizations stay in control during
            high-pressure situations.
          </p>
        </div>

        {/* TYPES GRID (STRUCTURED BLOCKS) */}
        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
  {[
    "Reputation Crises",
    "PR Disasters",
    "Operational Disruptions",
    "Cyber Incidents",
    "Legal / Public Issues",
    "Financial Crises",
  ].map((item, index) => (
    <div
      key={index}
      className="group text-center px-4 max-w-[240px] mx-auto"
    >
      {/* Title */}
      <p className="font-heading text-lg md:text-xl text-dts-fog/90 transition duration-300 group-hover:text-dts-neon">
        {item}
      </p>

      {/* Underline */}
      <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-300 group-hover:via-dts-neon" />
    </div>
  ))}
</div>
        </div>

    
    </section>
  );
}