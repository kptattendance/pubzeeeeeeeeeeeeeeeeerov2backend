"use client";

import Link from "next/link";

export default function StickyBooking() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 md:hidden">
      <div
        className="
          relative overflow-hidden
          bg-[#241B17]/95
          backdrop-blur-2xl
          border-t border-[#E8D8C3]/10
          px-4 py-3
          flex justify-between items-center
          shadow-[0_-10px_40px_rgba(0,0,0,0.35)]
        "
      >
        {/* AMBIENT GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,123,87,0.12),transparent_70%)] pointer-events-none" />

        {/* TEXT */}
        <span className="relative z-10 text-sm text-[#D9C7B2] leading-6">
          Reserve your table for an unforgettable night 🍻
        </span>

        {/* BUTTON */}
        <Link href="/book" className="relative z-10">
          <button
            className="
              px-5 py-2.5 rounded-full
              bg-[#9C7B57]
              hover:bg-[#B08A61]
              text-[#F8F1E7]
              font-semibold
              transition-all duration-300
              shadow-[0_0_18px_rgba(156,123,87,0.35)]
            "
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}
