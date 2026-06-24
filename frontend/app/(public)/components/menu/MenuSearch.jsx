"use client";

const filters = ["All", "Veg", "Non-Veg", "Spicy"];

const categories = [
  { name: "Soups / Salads", id: "soups" },
  { name: "Starters", id: "starters" },
  { name: "Main Course", id: "main" },
  { name: "Pizza", id: "pizza" },
  { name: "Desserts", id: "desserts" },
];

export default function MenuSearch({
  search,
  setSearch,
  filter,
  setFilter,
  active,
  setActive,
}) {
  return (
    <div
      className="
        sticky top-[78px] z-40
        overflow-hidden
        bg-[#1A1411]/92
        backdrop-blur-2xl
        border-b border-[#E8D8C3]/10
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      "
    >
      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,123,87,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-5">
        {/* SEARCH */}
        <div className="relative">
          {/* SEARCH ICON */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#BCA894] text-lg">
            🔍
          </div>

          {/* INPUT */}
          <input
            type="text"
            placeholder="Search signature dishes, desserts, drinks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-full
              bg-[#2B211B]/80
              border border-[#E8D8C3]/10
              pl-14 pr-6 py-4
              text-[#F8F1E7]
              placeholder:text-[#BCA894]
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(0,0,0,0.2)]
              focus:outline-none
              focus:border-[#C8AE8D]/30
              focus:shadow-[0_0_24px_rgba(156,123,87,0.2)]
              transition-all duration-300
            "
          />
        </div>

        {/* FILTERS + TABS */}
        <div className="flex flex-col xl:flex-row gap-4 mt-5">
          {/* FILTERS */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`
                  px-5 py-2.5 rounded-full
                  text-sm whitespace-nowrap
                  transition-all duration-300
                  border
                  ${
                    filter === item
                      ? `
                        bg-[#9C7B57]
                        border-[#B08A61]
                        text-[#F8F1E7]
                        shadow-[0_0_20px_rgba(156,123,87,0.3)]
                      `
                      : `
                        bg-[#241B17]
                        border-[#E8D8C3]/10
                        text-[#D9C7B2]
                        hover:bg-[#32251E]
                        hover:border-[#C8AE8D]/20
                      `
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>

          {/* TABS */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActive(cat.name);

                  const el = document.getElementById(cat.id);

                  if (el) {
                    const yOffset = -220;

                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;

                    window.scrollTo({
                      top: y,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`
                  px-5 py-2.5 rounded-full
                  text-sm whitespace-nowrap
                  transition-all duration-300
                  border
                  ${
                    active === cat.name
                      ? `
                        bg-[#C8AE8D]
                        border-[#D9C7B2]
                        text-[#1A1411]
                        shadow-[0_0_20px_rgba(200,174,141,0.3)]
                      `
                      : `
                        bg-[#241B17]
                        border-[#E8D8C3]/10
                        text-[#D9C7B2]
                        hover:bg-[#32251E]
                        hover:border-[#C8AE8D]/20
                      `
                  }
                `}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
