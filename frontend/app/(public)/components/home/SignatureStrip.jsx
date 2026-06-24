"use client";

export default function SignatureStrip() {
  const items = [
    { title: "Craft Beers", icon: "🍺" },
    { title: "Live Music", icon: "🎶" },
    { title: "Global Cuisine", icon: "🌍" },
    { title: "Nightlife", icon: "🌃" },
  ];

  return (
    <section className="relative bg-[#1F1713] py-14 border-y border-[#E8D8C3]/10 overflow-hidden">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,115,86,0.12),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              p-6 rounded-2xl
              bg-[#2B211B]/60
              backdrop-blur-lg
              border border-[#E8D8C3]/10
              hover:border-[#C8AE8D]/30
              hover:bg-[#3B2E2A]/70
              transition-all duration-300
              hover:scale-105
              shadow-[0_0_20px_rgba(0,0,0,0.25)]
            "
          >
            {/* ICON */}
            <div className="text-4xl mb-3 drop-shadow-[0_0_10px_rgba(232,216,195,0.15)]">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-sm md:text-base font-semibold text-[#F5EBDD] tracking-wide">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
