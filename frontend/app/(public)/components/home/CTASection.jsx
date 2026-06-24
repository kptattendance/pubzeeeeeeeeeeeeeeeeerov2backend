"use client";

export default function CTASection() {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden bg-[#1F1713]">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8A7356]/15 via-[#3B2E2A]/40 to-transparent" />

      {/* SOFT AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,216,195,0.08),transparent_55%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#F5EBDD]">
          Ready for an{" "}
          <span
            className="text-[#E8D8C3]"
            style={{
              textShadow: `
                0 0 6px rgba(245,235,221,0.35),
                0 0 14px rgba(232,216,195,0.25)
              `,
            }}
          >
            Unforgettable Night?
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-[#CDBBA5] text-base md:text-lg leading-relaxed">
          Reserve your table now and experience the perfect blend of craft
          brews, global flavors, and premium nightlife.
        </p>

        {/* BUTTON */}
        <button className="mt-10 px-8 py-3 rounded-full bg-[#8A7356] hover:bg-[#735F47] text-[#F5EBDD] font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(138,115,86,0.35)]">
          Book a Table
        </button>
      </div>
    </section>
  );
}
