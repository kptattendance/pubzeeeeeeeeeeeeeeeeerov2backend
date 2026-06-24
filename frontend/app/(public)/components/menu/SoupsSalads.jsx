"use client";

import { motion } from "framer-motion";

const soups = [
  {
    name: "Broccoli Almond Soup",
    desc: "Creamy broccoli soup infused with roasted almonds.",
    price: 180,
    type: "veg",
    spicy: false,
  },
  {
    name: "Tomato Basil Soup",
    desc: "Classic tomato soup flavored with fresh basil.",
    price: 160,
    type: "veg",
    spicy: false,
  },
  {
    name: "Lemon Coriander Soup",
    desc: "Light and refreshing soup with herbs and lime.",
    price: 170,
    type: "veg",
    spicy: false,
  },
  {
    name: "Hot & Sour Soup",
    desc: "Bold Indo-Chinese soup with spicy flavors.",
    price: 190,
    type: "veg",
    spicy: true,
  },
];

const salads = [
  {
    name: "Waldorf Salad",
    desc: "Apples, nuts, and creamy dressing.",
    price: 240,
    type: "veg",
    spicy: false,
  },
  {
    name: "Avocado Pesto Salad",
    desc: "Fresh avocado tossed with basil pesto.",
    price: 260,
    type: "veg",
    spicy: false,
  },
  {
    name: "Watermelon Feta Salad",
    desc: "Sweet watermelon paired with feta cheese.",
    price: 220,
    type: "veg",
    spicy: false,
  },
  {
    name: "Mexican Taco Salad",
    desc: "Crunchy tortilla with vegetables and spicy dressing.",
    price: 280,
    type: "veg",
    spicy: true,
  },
];

export default function SoupsSalads({ filter, search }) {
  const applyFilter = (items) => {
    return items.filter((item) => {
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
  };

  const filteredSoups = applyFilter(soups);
  const filteredSalads = applyFilter(salads);

  return (
    <section
      id="soups"
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

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Fresh &{" "}
            <span
              className="text-[#F5EBDD]"
              style={{
                textShadow: `
                  0 0 10px rgba(245,235,221,0.45),
                  0 0 28px rgba(232,216,195,0.25)
                `,
              }}
            >
              Light
            </span>
          </h2>

          <p className="mt-6 text-[#D9C7B2] text-base md:text-lg leading-8 max-w-2xl mx-auto">
            Explore handcrafted soups and refreshing salads prepared with fresh
            ingredients and elegant flavors.
          </p>

          {/* SEPARATOR */}
          <div className="w-24 h-[2px] bg-[#C8AE8D]/30 rounded-full mx-auto mt-8"></div>
        </div>

        {/* SOUPS */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#F5EBDD] mb-10">Soups</h3>

          <div className="space-y-7">
            {filteredSoups.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="
                  relative overflow-hidden
                  rounded-[28px]
                  p-6 md:p-7
                  bg-gradient-to-r
                  from-[#32251E]
                  via-[#241B17]
                  to-[#1A1411]
                  border border-[#E8D8C3]/10
                  shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                  hover:border-[#C8AE8D]/30
                  transition-all duration-300
                "
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(156,123,87,0.08),transparent_70%)] pointer-events-none" />

                {/* BADGES */}
                <div className="relative z-10 flex gap-3 mb-5 flex-wrap">
                  <span
                    className="
                      text-xs px-4 py-2 rounded-full
                      bg-green-500/10
                      text-green-300
                      border border-green-500/20
                    "
                  >
                    Veg 🌱
                  </span>

                  {item.spicy && (
                    <span
                      className="
                        text-xs px-4 py-2 rounded-full
                        bg-orange-500/10
                        text-orange-300
                        border border-orange-500/20
                      "
                    >
                      Spicy 🌶
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex justify-between gap-6 items-start">
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-[#F8F1E7] mb-4">
                      {item.name}
                    </h4>

                    <div className="w-14 h-[2px] bg-[#C8AE8D]/30 rounded-full mb-5"></div>

                    <p className="text-[#D9C7B2] leading-8 text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div
                    className="
                      px-5 py-3 rounded-full
                      bg-[#241B17]/80
                      border border-[#E8D8C3]/10
                      text-[#F5EBDD]
                      text-lg font-bold
                      whitespace-nowrap
                    "
                  >
                    ₹{item.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SALADS */}
        <div>
          <h3 className="text-3xl font-bold text-[#F5EBDD] mb-10">Salads</h3>

          <div className="space-y-7">
            {filteredSalads.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="
                  relative overflow-hidden
                  rounded-[28px]
                  p-6 md:p-7
                  bg-gradient-to-r
                  from-[#32251E]
                  via-[#241B17]
                  to-[#1A1411]
                  border border-[#E8D8C3]/10
                  shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                  hover:border-[#C8AE8D]/30
                  transition-all duration-300
                "
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(156,123,87,0.08),transparent_70%)] pointer-events-none" />

                {/* BADGES */}
                <div className="relative z-10 flex gap-3 mb-5 flex-wrap">
                  <span
                    className="
                      text-xs px-4 py-2 rounded-full
                      bg-green-500/10
                      text-green-300
                      border border-green-500/20
                    "
                  >
                    Veg 🌱
                  </span>

                  {item.spicy && (
                    <span
                      className="
                        text-xs px-4 py-2 rounded-full
                        bg-orange-500/10
                        text-orange-300
                        border border-orange-500/20
                      "
                    >
                      Spicy 🌶
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex justify-between gap-6 items-start">
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-[#F8F1E7] mb-4">
                      {item.name}
                    </h4>

                    <div className="w-14 h-[2px] bg-[#C8AE8D]/30 rounded-full mb-5"></div>

                    <p className="text-[#D9C7B2] leading-8 text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div
                    className="
                      px-5 py-3 rounded-full
                      bg-[#241B17]/80
                      border border-[#E8D8C3]/10
                      text-[#F5EBDD]
                      text-lg font-bold
                      whitespace-nowrap
                    "
                  >
                    ₹{item.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
