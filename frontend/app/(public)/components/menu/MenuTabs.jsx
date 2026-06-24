"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "Soups / Salads", id: "soups" },
  { name: "Starters", id: "starters" },
  { name: "Main Course", id: "main" },
  { name: "Pizza", id: "pizza" },
  { name: "Desserts", id: "desserts" },
];

export default function MenuTabs({ active, setActive }) {
  return (
    <div
      className="
        sticky top-20 z-40
        bg-[#1A1411]/92
        backdrop-blur-2xl
        border-b border-[#E8D8C3]/10
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      "
    >
      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,123,87,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-5 flex gap-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActive(cat.name);

              const el = document.getElementById(cat.id);

              if (el) {
                const yOffset = -120;

                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({
                  top: y,
                  behavior: "smooth",
                });
              }
            }}
            className={`
              relative px-6 py-3 rounded-full
              text-sm md:text-base
              whitespace-nowrap
              transition-all duration-300
              border
              overflow-hidden
              ${
                active === cat.name
                  ? `
                    bg-[#9C7B57]
                    border-[#B08A61]
                    text-[#F8F1E7]
                    shadow-[0_0_24px_rgba(156,123,87,0.35)]
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
            {/* ACTIVE GLOW */}
            {active === cat.name && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,235,221,0.08),transparent_70%)]"
              />
            )}

            {/* LABEL */}
            <span className="relative z-10 tracking-wide">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
