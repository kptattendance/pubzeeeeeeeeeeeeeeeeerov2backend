"use client";

export default function PrivateEvents() {
  return (
    <section className="relative px-6 md:px-16 py-24 overflow-hidden">
      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,123,87,0.12),transparent_70%)]" />

      <div
        className="
          relative z-10
          max-w-5xl mx-auto
          rounded-[36px]
          border border-[#E8D8C3]/10
          bg-gradient-to-br
          from-[#32251E]
          via-[#241B17]
          to-[#1A1411]
          p-10 md:p-16
          text-center
          overflow-hidden
          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "
      >
        {/* INNER GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.12),transparent_65%)] pointer-events-none" />

        {/* TITLE */}
        <h2 className="relative z-10 text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Host Your Own{" "}
          <span
            className="text-[#F5EBDD]"
            style={{
              textShadow: `
                0 0 10px rgba(245,235,221,0.45),
                0 0 28px rgba(232,216,195,0.25)
              `,
            }}
          >
            Event
          </span>
        </h2>

        {/* SUBTEXT */}
        <p
          className="
            relative z-10
            text-[#D9C7B2]
            text-base md:text-lg
            leading-9
            max-w-3xl
            mx-auto
            mb-10
          "
        >
          Celebrate birthdays, corporate gatherings, private parties, and
          unforgettable special occasions in an ambience crafted for elevated
          nightlife and premium hospitality.
        </p>

        {/* SEPARATOR */}
        <div className="relative z-10 w-24 h-[2px] bg-[#C8AE8D]/30 rounded-full mx-auto mb-10"></div>

        {/* BUTTON */}
        <button
          className="
            relative z-10
            px-8 py-4 rounded-full
            bg-[#9C7B57]
            hover:bg-[#B08A61]
            text-[#F8F1E7]
            font-semibold text-lg
            transition-all duration-300
            hover:scale-105
            shadow-[0_0_24px_rgba(156,123,87,0.35)]
          "
        >
          Book Your Event
        </button>

        {/* SMALL TAGLINE */}
        <p className="relative z-10 mt-8 text-[#BCA894] text-xs md:text-sm uppercase tracking-[0.25em]">
          Premium Ambience • Curated Experiences • Unforgettable Celebrations
        </p>
      </div>
    </section>
  );
}
