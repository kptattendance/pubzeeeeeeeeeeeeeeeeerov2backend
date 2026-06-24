"use client";

const weekly = [
  { day: "Monday", event: "Chill Acoustic Night" },
  { day: "Wednesday", event: "Ladies Night" },
  { day: "Friday", event: "Live Band Experience" },
  { day: "Saturday", event: "Signature DJ Night" },
];

export default function WeeklyEvents() {
  return (
    <section className="relative px-6 md:px-16 py-2 overflow-hidden">
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,123,87,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Weekly{" "}
            <span
              className="text-[#F5EBDD]"
              style={{
                textShadow: `
                  0 0 10px rgba(245,235,221,0.45),
                  0 0 28px rgba(232,216,195,0.25)
                `,
              }}
            >
              Highlights
            </span>
          </h2>

          <p className="mt-6 text-[#D9C7B2] text-base md:text-lg leading-8 max-w-2xl mx-auto">
            Experience curated evenings crafted with music, ambience, premium
            hospitality, and unforgettable nightlife energy throughout the week.
          </p>

          {/* SEPARATOR */}
          <div className="w-24 h-[2px] bg-[#C8AE8D]/30 rounded-full mx-auto mt-8"></div>
        </div>

        {/* EVENT LIST */}
        <div className="space-y-6">
          {weekly.map((item, i) => (
            <div
              key={i}
              className="
                relative overflow-hidden
                flex flex-col md:flex-row
                md:items-center md:justify-between
                gap-4
                rounded-[28px]
                border border-[#E8D8C3]/10
                bg-gradient-to-r
                from-[#32251E]
                via-[#241B17]
                to-[#1A1411]
                p-6 md:p-7
                shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                hover:border-[#C8AE8D]/30
                transition-all duration-300
              "
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(156,123,87,0.08),transparent_70%)] pointer-events-none" />

              {/* DAY */}
              <div className="relative z-10">
                <span
                  className="
                    inline-flex items-center
                    px-5 py-2 rounded-full
                    bg-[#2B211B]/70
                    border border-[#E8D8C3]/10
                    text-[#F5EBDD]
                    text-sm md:text-base
                    font-semibold
                    tracking-wide
                    shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                  "
                >
                  {item.day}
                </span>
              </div>

              {/* EVENT */}
              <div className="relative z-10 text-left md:text-right">
                <h3 className="text-xl md:text-2xl font-semibold text-[#F8F1E7]">
                  {item.event}
                </h3>

                <p className="mt-2 text-[#C5B19A] text-sm md:text-base">
                  Crafted experiences with premium vibes & live entertainment.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
