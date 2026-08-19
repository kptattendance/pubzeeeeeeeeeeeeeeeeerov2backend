"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#2B211B] via-[#241B17] to-[#1A1411] text-[#F8F1E7] border-t border-[#E8D8C3]/10 overflow-hidden">
      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.18),transparent_60%)]" />

      {/* MAIN FOOTER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
        {/* BRAND */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <h2 className="text-3xl font-extrabold mb-5 tracking-wide">
              <span
                className="text-[#F5EBDD]"
                style={{
                  textShadow: `
                    0 0 8px rgba(245,235,221,0.45),
                    0 0 18px rgba(232,216,195,0.25)
                  `,
                }}
              >
                Zero
              </span>{" "}
              <span className="text-[#FFFFFF]">Degree</span>
            </h2>
          </Link>

          <p className="text-[#D9C7B2] text-sm leading-8 mb-5 max-w-xs">
            Where craft brews meet unforgettable nights. Experience the perfect
            blend of taste, music, and ambience.
          </p>

          <div className="space-y-2 text-[#E6D5C3] text-sm">
            <p>📧 info@zerodegreebreweryandkitchen.com</p>
            <p>📞 +91 99864 66266</p>
            <p>📍 Bengaluru, Karnataka</p>
          </div>
        </div>

        {/* LEGAL */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-5 text-[#F5EBDD]">Legal</h3>

          <ul className="space-y-3 text-[#D9C7B2] text-sm">
            <li>
              <Link
                href="/terms"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link
                href="/privacy"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/refund"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Refund Policy
              </Link>
            </li>

            <li>
              <Link
                href="/disclaimer"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div className="hidden md:flex flex-col">
          <h3 className="text-xl font-semibold mb-5 text-[#F5EBDD]">Explore</h3>

          <ul className="space-y-3 text-[#D9C7B2] text-sm">
            <li>
              <Link
                href="/menu"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                href="/events"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-5 text-[#F5EBDD]">
            Stay Connected
          </h3>

          <p className="text-[#D9C7B2] text-sm mb-5">
            Follow us for latest events & offers
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mb-6 justify-center md:justify-start text-2xl">
            <span className="cursor-pointer hover:scale-110 hover:text-[#F5EBDD] transition duration-300">
              🌐
            </span>

            <span className="cursor-pointer hover:scale-110 hover:text-[#F5EBDD] transition duration-300">
              📸
            </span>

            <span className="cursor-pointer hover:scale-110 hover:text-[#F5EBDD] transition duration-300">
              🎵
            </span>
          </div>

          {/* BUTTON */}
          <Link
            href="/book"
            scroll={true}
            className="
              px-7 py-3 rounded-full
              bg-[#9C7B57]
              hover:bg-[#B08A61]
              text-[#F8F1E7]
              text-sm font-semibold
              transition-all duration-300
              hover:scale-105
              shadow-[0_0_22px_rgba(156,123,87,0.35)]
              inline-block text-center
            "
          >
            Book a Table
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-[#E8D8C3]/10 py-6 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-[#C5B19A] text-center">
        <p>© {new Date().getFullYear()} Zero Degree. All rights reserved.</p>

        <p className="mt-2 md:mt-0">
          Designed with 🍻 for unforgettable nights
        </p>
      </div>
    </footer>
  );
}
