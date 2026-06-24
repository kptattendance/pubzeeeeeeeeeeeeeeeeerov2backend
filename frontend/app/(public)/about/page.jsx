"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1A1411] via-[#241B17] to-[#1A1411] text-[#F8F1E7] px-6 md:px-16 pt-32 pb-32">
      {/* GLOBAL AMBIENT BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-[420px] h-[420px] bg-[#9C7B57]/15 blur-[160px]" />
        <div className="absolute bottom-20 right-1/4 w-[350px] h-[350px] bg-[#B08A61]/10 blur-[160px]" />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* GLOW */}
            <div className="absolute inset-0 rounded-[36px] bg-[#9C7B57]/10 blur-3xl scale-105" />

            <img
              src="/images/real/5.jpeg"
              alt="Zero Degree ambience"
              className="
                relative z-10
                rounded-[36px]
                shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                object-cover
                w-full
                h-[450px] md:h-[600px]
                border border-[#E8D8C3]/10
                hover:scale-[1.02]
                transition duration-700
              "
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-10">
              About{" "}
              <span
                className="text-[#F5EBDD]"
                style={{
                  textShadow: `
                    0 0 10px rgba(245,235,221,0.45),
                    0 0 28px rgba(232,216,195,0.25)
                  `,
                }}
              >
                Zero Degree
              </span>
            </h1>

            <p className="text-[#E6D5C3] leading-9 mb-7 text-lg">
              Zero Degree Brewery & Kitchen is designed as a refined destination
              where handcrafted brews, premium dining, and elevated nightlife
              experiences come together seamlessly.
            </p>

            <p className="text-[#D9C7B2] leading-9 mb-7">
              Inspired by modern brewery culture, the ambience blends warm
              interiors, elegant lighting, curated music, and signature flavors
              to create an atmosphere that feels vibrant yet sophisticated.
            </p>

            <p className="text-[#D9C7B2] leading-9 mb-12">
              From intimate evenings to lively celebrations, every experience at
              Zero Degree is crafted to leave a lasting impression.
            </p>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "🍺 Craft Brewing",
                  desc: "Freshly brewed signature beers with rich character.",
                },
                {
                  title: "🌍 Curated Cuisine",
                  desc: "Global flavors crafted with premium ingredients.",
                },
                {
                  title: "🎶 Live Experiences",
                  desc: "Immersive music and elevated nightlife energy.",
                },
                {
                  title: "🎉 Private Celebrations",
                  desc: "Elegant spaces for memorable gatherings.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="
                    p-6 rounded-[28px]
                    bg-[#2B211B]/75
                    backdrop-blur-xl
                    border border-[#E8D8C3]/10
                    hover:border-[#C8AE8D]/30
                    transition-all duration-300
                    shadow-[0_15px_45px_rgba(0,0,0,0.25)]
                  "
                >
                  <h4 className="text-[#F5EBDD] font-semibold mb-3 text-lg">
                    {item.title}
                  </h4>

                  <p className="text-[#D9C7B2] text-sm leading-7">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PHILOSOPHY */}
        <section
          className="
            relative overflow-hidden
            rounded-[40px]
            border border-[#E8D8C3]/10
            bg-gradient-to-br
            from-[#32251E]
            via-[#241B17]
            to-[#1A1411]
            py-28 px-8
            text-center
            shadow-[0_20px_70px_rgba(0,0,0,0.35)]
          "
        >
          {/* AMBIENT GLOW */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#9C7B57]/15 blur-[150px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-10">
              Our{" "}
              <span
                className="text-[#F5EBDD]"
                style={{
                  textShadow: `
                    0 0 10px rgba(245,235,221,0.35),
                    0 0 24px rgba(232,216,195,0.2)
                  `,
                }}
              >
                Philosophy
              </span>
            </h2>

            <p className="text-[#E6D5C3] leading-10 text-lg">
              At Zero Degree, nightlife is more than entertainment — it is an
              experience of connection, ambience, flavor, and celebration. Every
              detail is thoughtfully designed to create moments that feel warm,
              elevated, and unforgettable.
            </p>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="rounded-[40px] bg-[#1F1713]/60 backdrop-blur-xl py-20 px-6 border border-[#E8D8C3]/10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Signature Dishes" },
              { number: "20+", label: "Craft Beers" },
              { number: "1000+", label: "Happy Guests" },
              { number: "5★", label: "Premium Experience" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="
                  p-8 rounded-[28px]
                  text-center
                  bg-[#2B211B]/50
                  backdrop-blur-xl
                  border border-[#E8D8C3]/10
                  hover:border-[#C8AE8D]/30
                  transition-all duration-300
                  shadow-[0_15px_45px_rgba(0,0,0,0.2)]
                "
              >
                <h3 className="text-4xl font-bold text-[#F5EBDD] mb-3">
                  {item.number}
                </h3>

                <p className="text-[#D9C7B2] text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          className="
            rounded-[40px]
            bg-gradient-to-b
            from-[#241B17]
            to-[#1A1411]
            p-10
            border border-[#E8D8C3]/10
            shadow-[0_20px_70px_rgba(0,0,0,0.25)]
          "
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Elegant Ambience",
                desc: "Warm interiors with premium brewery aesthetics.",
                img: "/images/gallery/1.png",
              },
              {
                title: "Curated Music",
                desc: "Live DJs and immersive nightlife experiences.",
                img: "/images/gallery/8.png",
              },
              {
                title: "Signature Dining",
                desc: "Crafted cuisine paired with premium beverages.",
                img: "/images/gallery/6.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="
                  relative overflow-hidden rounded-[32px]
                  border border-[#E8D8C3]/10
                  group
                  shadow-[0_15px_45px_rgba(0,0,0,0.25)]
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    h-80 w-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411] via-[#1A1411]/40 to-transparent flex flex-col justify-end p-7">
                  <h3 className="text-2xl font-semibold text-[#F8F1E7] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[#D9C7B2] text-sm leading-7">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section
          className="
            rounded-[40px]
            border border-[#E8D8C3]/10
            bg-gradient-to-r
            from-[#2B211B]
            via-[#3A2B22]
            to-[#2B211B]
            py-28 px-8
            text-center
            shadow-[0_20px_70px_rgba(0,0,0,0.35)]
          "
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            Why Choose{" "}
            <span
              className="text-[#F5EBDD]"
              style={{
                textShadow: `
                  0 0 10px rgba(245,235,221,0.35),
                  0 0 24px rgba(232,216,195,0.2)
                `,
              }}
            >
              Zero Degree
            </span>
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Hospitality",
                desc: "Every experience is designed to feel warm, refined, and memorable.",
              },
              {
                title: "Elevated Nightlife",
                desc: "A perfect blend of music, ambience, and social energy.",
              },
              {
                title: "Exceptional Quality",
                desc: "Crafted food and beverages with uncompromising standards.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="
                  p-8 rounded-[28px]
                  bg-[#2B211B]/60
                  border border-[#E8D8C3]/10
                  hover:border-[#C8AE8D]/30
                  transition-all duration-300
                  shadow-[0_15px_45px_rgba(0,0,0,0.2)]
                "
              >
                <h3 className="text-2xl font-semibold mb-5 text-[#F5EBDD]">
                  {item.title}
                </h3>

                <p className="text-[#D9C7B2] leading-8 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
