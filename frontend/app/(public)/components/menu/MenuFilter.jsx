"use client";

export default function MenuFilter({ filter, setFilter }) {
  const filters = ["All", "Veg", "Non-Veg", "Spicy"];

  return (
    <div
      className="
        sticky top-[80px] z-40
        bg-[#1A1411]/90
        backdrop-blur-2xl
        border-b border-[#E8D8C3]/10
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      "
    >
      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,123,87,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-5 flex gap-4 overflow-x-auto scrollbar-hide">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`
              px-6 py-3 rounded-full
              text-sm uppercase tracking-wide
              border whitespace-nowrap
              transition-all duration-300
              shadow-[0_10px_30px_rgba(0,0,0,0.15)]
              ${
                filter === item
                  ? `
                    bg-[#9C7B57]
                    border-[#B08A61]
                    text-[#F8F1E7]
                    shadow-[0_0_22px_rgba(156,123,87,0.35)]
                  `
                  : `
                    bg-[#241B17]/70
                    border-[#E8D8C3]/10
                    text-[#D9C7B2]
                    hover:bg-[#32251E]
                    hover:border-[#C8AE8D]/20
                    hover:text-[#F5EBDD]
                  `
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
