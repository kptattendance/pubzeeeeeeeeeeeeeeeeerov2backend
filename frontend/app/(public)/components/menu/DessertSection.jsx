"use client";

import { motion } from "framer-motion";

const desserts = [
  {
    name: "Sizzling Brownie",
    desc: "Warm brownie served with vanilla ice cream & rich chocolate sauce.",
    price: 180,
    type: "veg",
    spicy: false,
  },
  {
    name: "Blueberry Cheesecake",
    desc: "Creamy baked cheesecake topped with blueberry compote.",
    price: 220,
    type: "veg",
    spicy: false,
  },
  {
    name: "Mango Panna Cotta",
    desc: "Smooth mango-infused Italian dessert with tropical flavors.",
    price: 200,
    type: "veg",
    spicy: false,
  },
  {
    name: "Gulab Jamun",
    desc: "Soft dumplings soaked in aromatic sugar syrup.",
    price: 140,
    type: "veg",
    spicy: false,
  },
];

export default function DessertSection({ filter, search }) {
  const filteredItems = desserts.filter((item) => {
    const matchesFilter =
      filter === "Veg"
        ? true
        : filter === "Non-Veg"
          ? false
          : filter === "Spicy"
            ? false
            : true;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section
      id="desserts"
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

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* TITLE */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Sweet{" "}
            <span
              className="text-[#F5EBDD]"
              style={{
                textShadow: `
                  0 0 10px rgba(245,235,221,0.45),
                  0 0 28px rgba(232,216,195,0.25)
                `,
              }}
            >
              Delights
            </span>
          </h2>

          <p className="mt-6 text-[#D9C7B2] text-base md:text-lg leading-8 max-w-2xl mx-auto">
            Indulge in handcrafted desserts curated to perfectly complement your
            premium dining and nightlife experience.
          </p>

          {/* SEPARATOR */}
          <div className="w-24 h-[2px] bg-[#C8AE8D]/30 rounded-full mx-auto mt-8"></div>
        </div>

        {/* DESSERT LIST */}
        <div className="space-y-7">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="
                relative overflow-hidden
                flex flex-col md:flex-row
                md:items-center md:justify-between
                gap-5
                p-6 md:p-7
                rounded-[30px]
                bg-gradient-to-r
                from-[#32251E]
                via-[#241B17]
                to-[#1A1411]
                border border-[#E8D8C3]/10
                backdrop-blur-xl
                shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                hover:border-[#C8AE8D]/30
                transition-all duration-300
              "
            >
              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(156,123,87,0.08),transparent_70%)] pointer-events-none" />

              {/* LEFT CONTENT */}
              <div className="relative z-10 flex items-start gap-5 flex-1">
                {/* VEG BADGE */}
                <div
                  className="
                    mt-1 px-4 py-2 rounded-full
                    bg-[#2B211B]/70
                    border border-[#E8D8C3]/10
                    text-[#F5EBDD]
                    text-xs uppercase tracking-wide
                    whitespace-nowrap
                    shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                  "
                >
                  Veg 🌱
                </div>

                {/* TEXT */}
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-[#F8F1E7] mb-3">
                    {item.name}
                  </h3>

                  <div className="w-14 h-[2px] bg-[#C8AE8D]/30 rounded-full mb-4"></div>

                  <p className="text-[#D9C7B2] text-sm md:text-base leading-8">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* PRICE */}
              <div className="relative z-10">
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
