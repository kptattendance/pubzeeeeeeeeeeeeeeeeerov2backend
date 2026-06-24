"use client";

import Link from "next/link";

export default function GalleryPreview() {
  const images = [
    "/images/real/1.jpeg",
    // "/images/real/3.jpeg",
    "/images/real/4.jpeg",
    "/images/real/5.jpeg",
    "/images/real/6.jpeg",
  ];

  return (
    <section className="relative bg-[#1F1713] py-20 px-6 md:px-16 overflow-hidden">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,115,86,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl text-[#F5EBDD] font-bold mb-12 text-center">
          Our{" "}
          <span
            className="text-[#E8D8C3]"
            style={{
              textShadow: `
                0 0 6px rgba(245,235,221,0.35),
                0 0 14px rgba(232,216,195,0.25)
              `,
            }}
          >
            Vibe
          </span>
        </h2>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="
                overflow-hidden
                rounded-2xl
                border border-[#E8D8C3]/10
                bg-[#2B211B]/40
                backdrop-blur-md
                hover:border-[#C8AE8D]/30
                transition-all duration-300
              "
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="
                  rounded-2xl
                  object-cover
                  h-40
                  w-full
                  hover:scale-110
                  transition duration-500
                "
              />
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-10">
          <Link href="/gallery">
            <button className="px-7 py-3 rounded-full border border-[#C8AE8D]/40 text-[#F5EBDD] hover:bg-[#8A7356] hover:border-[#8A7356] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(138,115,86,0.2)]">
              Explore Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
