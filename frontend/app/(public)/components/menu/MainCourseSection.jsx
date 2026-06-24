"use client";

import { motion } from "framer-motion";

const mains = [
  {
    name: "Paneer Tikka Masala",
    desc: "Paneer cooked in rich tomato gravy.",
    price: 280,
    type: "veg",
    spicy: false,
  },
  {
    name: "Kadai Paneer",
    desc: "Paneer tossed in spicy masala.",
    price: 260,
    type: "veg",
    spicy: true,
  },
  {
    name: "Veg Kolhapuri",
    desc: "Mixed vegetables cooked in spicy Kolhapuri gravy.",
    price: 290,
    type: "veg",
    spicy: true,
  },
  {
    name: "Dal Tadka",
    desc: "Yellow lentils tempered with aromatic spices.",
    price: 220,
    type: "veg",
    spicy: false,
  },
  {
    name: "Butter Chicken",
    desc: "Creamy tomato-based chicken curry.",
    price: 320,
    type: "nonveg",
    spicy: false,
  },
  {
    name: "Chicken Tikka Masala",
    desc: "Grilled chicken in spiced gravy.",
    price: 300,
    type: "nonveg",
    spicy: true,
  },
  {
    name: "Mutton Rogan Josh",
    desc: "Slow-cooked aromatic mutton curry.",
    price: 380,
    type: "nonveg",
    spicy: true,
  },
  {
    name: "Pepper Chicken",
    desc: "South Indian style pepper chicken masala.",
    price: 340,
    type: "nonveg",
    spicy: true,
  },
  {
    name: "Fish Curry",
    desc: "Traditional coastal style fish curry.",
    price: 360,
    type: "nonveg",
    spicy: true,
  },
  {
    name: "Chicken Stew",
    desc: "Mildly spiced creamy chicken stew.",
    price: 310,
    type: "nonveg",
    spicy: false,
  },
];

export default function MainCourseSection({ filter, search }) {
  const filteredItems = mains.filter((item) => {
    const matchesFilter =
      filter === "Veg"
        ? item.type === "veg"
        : filter === "Non-Veg"
          ? item.type === "nonveg"
          : filter === "Spicy"
            ? item.spicy
            : true;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section
      id="main"
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
            Main{" "}
            <span
              className="text-[#F5EBDD]"
              style={{
                textShadow: `
                  0 0 10px rgba(245,235,221,0.45),
                  0 0 28px rgba(232,216,195,0.25)
                `,
              }}
            >
              Course
            </span>
          </h2>

          <p className="mt-6 text-[#D9C7B2] text-base md:text-lg leading-8 max-w-2xl mx-auto">
            Discover signature mains crafted with bold flavors, premium
            ingredients, and rich culinary experiences.
          </p>

          {/* SEPARATOR */}
          <div className="w-24 h-[2px] bg-[#C8AE8D]/30 rounded-full mx-auto mt-8"></div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="
                relative overflow-hidden
                p-7 rounded-[30px]
                bg-gradient-to-br
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.08),transparent_70%)] pointer-events-none" />

              {/* BADGES */}
              <div className="relative z-10 flex gap-3 mb-5 flex-wrap">
                <span
                  className={`
                    text-xs px-4 py-2 rounded-full
                    border
                    shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                    ${
                      item.type === "veg"
                        ? "bg-green-500/10 text-green-300 border-green-500/20"
                        : "bg-red-500/10 text-red-300 border-red-500/20"
                    }
                  `}
                >
                  {item.type === "veg" ? "Veg 🌱" : "Non-Veg 🍗"}
                </span>

                {item.spicy && (
                  <span
                    className="
                      text-xs px-4 py-2 rounded-full
                      bg-orange-500/10
                      text-orange-300
                      border border-orange-500/20
                      shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                    "
                  >
                    Spicy 🌶
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <div className="flex justify-between items-start gap-5 mb-4">
                  <h3 className="text-2xl font-semibold text-[#F8F1E7] leading-snug">
                    {item.name}
                  </h3>

                  {/* PRICE */}
                  <div
                    className="
                      px-5 py-2 rounded-full
                      bg-[#241B17]/80
                      border border-[#E8D8C3]/10
                      text-[#F5EBDD]
                      text-lg font-bold
                      whitespace-nowrap
                      shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                    "
                  >
                    ₹{item.price}
                  </div>
                </div>

                {/* LINE */}
                <div className="w-16 h-[2px] bg-[#C8AE8D]/30 rounded-full mb-5"></div>

                {/* DESCRIPTION */}
                <p className="text-[#D9C7B2] text-sm md:text-base leading-8">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
