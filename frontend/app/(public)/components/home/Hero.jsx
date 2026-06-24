"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1F1713]">
      {/* BACKGROUND IMAGE */}
      <img
        src="/images/hero.png"
        alt="background"
        className="absolute w-full h-full object-cover"
      />

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute w-full h-full object-cover z-0 scale-110 animate-slowZoom"
      >
        <source src="/videos/2.mp4" type="video/mp4" />
      </video>

      {/* WARM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2B211B]/80 via-[#3B2E2A]/65 to-[#1F1713]/90" />

      {/* SOFT LIGHT EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(232,216,195,0.08),transparent_40%)]" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide text-[#F5EBDD]"
        >
          Crafted Nights at <br />
          <span className="relative inline-block mt-3">
            {/* MAIN TEXT */}

            <span className="relative inline-block mt-3">
              {/* SOFT BACK GLOW */}
              <span className="absolute inset-0 bg-[#C8AE8D]/20 blur-3xl rounded-full scale-125"></span>

              {/* MAIN TEXT */}
              <span
                className="
      relative z-10
      text-[#F5EBDD]
      font-extrabold
      tracking-wider
    "
                style={{
                  textShadow: `
        0 0 6px rgba(245,235,221,0.45),
        0 0 14px rgba(232,216,195,0.35),
        0 0 24px rgba(138,115,86,0.25)
      `,
                }}
              >
                Zero Degree
              </span>
            </span>

            {/* SOFT AMBIENT GLOW */}
            <span className="absolute inset-0 bg-[#C8AE8D]/40 blur-3xl rounded-full scale-150"></span>

            {/* EXTRA LIGHT EFFECT */}
            <span className="absolute inset-0 bg-[#F5EBDD]/20 blur-2xl rounded-full scale-125 animate-pulse"></span>
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-[#D8C7B3] text-base md:text-lg leading-relaxed"
        >
          Craft brews, global flavors, and electrifying vibes — your perfect
          destination for unforgettable nights.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          {/* MENU BUTTON */}
          <Link href="/menu">
            <button className="relative px-7 py-3 rounded-full font-semibold text-white bg-[#8A7356] hover:bg-[#735F47] transition-all duration-300 shadow-lg overflow-hidden group">
              <span className="relative z-10">Explore Menu</span>

              {/* subtle glow */}
              <span className="absolute inset-0 bg-[#E8D8C3] blur-md opacity-20 group-hover:opacity-30 transition duration-300"></span>
            </button>
          </Link>

          {/* BOOK BUTTON */}
          <Link
            href="/book"
            className="px-7 py-3 rounded-full border border-[#E8D8C3]/40 text-[#F5EBDD] backdrop-blur-md hover:bg-[#E8D8C3]/10 transition-all duration-300 hover:scale-105"
          >
            Book a Table
          </Link>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-[#E8D8C3]/40 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-[#F5EBDD] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
