"use client";

import { motion } from "framer-motion";

export default function MenuHero() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src="/images/menu-banner.jpg"
        alt="Menu Background"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1411]/70 via-[#1A1411]/50 to-[#1A1411]/95" />

      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,123,87,0.18),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Our{" "}
          <span
            className="text-[#F5EBDD]"
            style={{
              textShadow: `
                0 0 10px rgba(245,235,221,0.45),
                0 0 28px rgba(232,216,195,0.25)
              `,
            }}
          >
            Menu
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            mt-6
            max-w-3xl
            text-[#D9C7B2]
            text-base md:text-lg
            leading-8
          "
        >
          Explore a refined culinary journey featuring handcrafted flavors,
          signature dishes, global inspirations, and elevated dining experiences
          curated for unforgettable nights.
        </motion.p>

        {/* SEPARATOR */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 120 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="h-[2px] bg-[#C8AE8D]/40 rounded-full mt-10"
        />

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="
            mt-6
            text-[#BCA894]
            uppercase
            tracking-[0.3em]
            text-xs md:text-sm
          "
        >
          Crafted Flavors • Premium Dining • Elevated Experiences
        </motion.p>
      </div>
    </section>
  );
}
