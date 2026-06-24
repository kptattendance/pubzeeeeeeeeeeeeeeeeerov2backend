"use client";

import Link from "next/link";

const items = [
  { name: "Chicken Ghee Roast", price: 360 },
  { name: "Paneer Tikka", price: 280 },
  { name: "Butter Chicken", price: 320 },
];

export default function FeaturedMenu() {
  return (
    <section className="relative bg-[#1F1713] py-20 px-6 md:px-16 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(138,115,86,0.15),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl text-[#F5EBDD] font-bold mb-12">
          Featured{" "}
          <span
            className="text-[#E8D8C3]"
            style={{
              textShadow: `
                0 0 6px rgba(245,235,221,0.35),
                0 0 14px rgba(232,216,195,0.25)
              `,
            }}
          >
            Dishes
          </span>
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                p-6 rounded-2xl
                bg-[#2B211B]/70
                border border-[#E8D8C3]/10
                backdrop-blur-md
                hover:scale-105
                hover:border-[#C8AE8D]/30
                transition-all duration-300
                shadow-[0_0_20px_rgba(0,0,0,0.25)]
              "
            >
              <h3 className="text-lg text-[#F5EBDD] font-semibold">
                {item.name}
              </h3>

              <p className="text-[#C8AE8D] mt-3 text-lg font-medium">
                ₹{item.price}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <Link href="/menu">
          <button className="mt-10 px-7 py-3 rounded-full bg-[#8A7356] hover:bg-[#735F47] text-[#F5EBDD] font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(138,115,86,0.35)]">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
}
