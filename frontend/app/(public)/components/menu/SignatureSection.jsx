"use client";

import { motion } from "framer-motion";

const specials = [
  {
    name: "Chicken Ghee Roast",
    desc: "A coastal Karnataka specialty crafted with bold spices and rich aromatic ghee.",
    price: 360,
    tag: "Chef Special",
  },
  {
    name: "Kodi Karavepaku Vapudu",
    desc: "Andhra-style spicy chicken fry infused with curry leaves and roasted spices.",
    price: 340,
    tag: "Spicy Hit 🌶",
  },
  {
    name: "Malabar Prawns Ghee Roast",
    desc: "Juicy prawns roasted in signature Malabar masala with flavorful ghee.",
    price: 420,
    tag: "Must Try",
  },
];

export default function SignatureSection() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b
        from-[#1A1411]
        via-[#241B17]
        to-[#1A1411]
        text-[#F8F1E7]
        py-28 px-6 md:px-16
      "
    >
      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,123,87,0.10),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Signature{" "}
            <span
              className="text-[#F5EBDD]"
              style={{
                textShadow: `
                  0 0 10px rgba(245,235,221,0.45),
                  0 0 28px rgba(232,216,195,0.25)
                `,
              }}
            >
              Specials
            </span>
          </h2>

          <p className="mt-6 text-[#D9C7B2] text-base md:text-lg leading-8 max-w-3xl mx-auto">
            Discover our chef-curated signature creations crafted with bold
            regional flavors, premium ingredients, and unforgettable culinary
            experiences.
          </p>

          {/* SEPARATOR */}
          <div className="w-24 h-[2px] bg-[#C8AE8D]/30 rounded-full mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="
        relative overflow-hidden
        rounded-[30px]
        p-7
        bg-gradient-to-br
        from-[#32251E]
        via-[#241B17]
        to-[#1A1411]
        border border-[#E8D8C3]/10
        backdrop-blur-xl
        shadow-[0_15px_50px_rgba(0,0,0,0.28)]
        hover:border-[#C8AE8D]/30
        transition-all duration-300
        group
      "
            >
              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* TOP */}
              <div className="relative z-10 flex items-start justify-between gap-4 mb-5">
                <h3 className="text-2xl leading-tight font-bold text-[#F8F1E7] max-w-[70%]">
                  {item.name}
                </h3>

                <div
                  className="
            px-4 py-2 rounded-full
            bg-[#9C7B57]
            text-[#F8F1E7]
            text-[11px]
            uppercase tracking-wide
            font-semibold
            whitespace-nowrap
            shadow-[0_10px_30px_rgba(0,0,0,0.2)]
          "
                >
                  {item.tag}
                </div>
              </div>

              {/* LINE */}
              <div className="w-14 h-[2px] bg-[#C8AE8D]/30 rounded-full mb-5"></div>

              {/* DESCRIPTION */}
              <p className="text-[#D9C7B2] text-sm md:text-base leading-8">
                {item.desc}
              </p>

              {/* PRICE */}
              <div className="mt-8 flex justify-end">
                <div
                  className="
            px-6 py-3 rounded-full
            bg-[#241B17]/80
            border border-[#E8D8C3]/10
            text-[#F5EBDD]
            text-xl font-bold
            shadow-[0_10px_30px_rgba(0,0,0,0.2)]
          "
                >
                  ₹{item.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
