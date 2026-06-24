"use client";

import { motion } from "framer-motion";

const starters = [
  {
    name: "Paneer Popcorn",
    desc: "Crispy fried paneer cubes coated with herbs and spices.",
    img: "/images/food/1.png",
    price: 220,
    type: "veg",
    spicy: false,
  },
  {
    name: "Chicken Popcorn",
    desc: "Golden fried chicken bites served with signature dip.",
    img: "/images/food/2.png",
    price: 260,
    type: "nonveg",
    spicy: false,
  },
  {
    name: "Chicken Strips Peri Peri",
    desc: "Crispy strips tossed in fiery peri peri seasoning.",
    img: "/images/food/3.png",
    price: 280,
    type: "nonveg",
    spicy: true,
  },
  {
    name: "Corn Cheese Balls",
    desc: "Cheesy corn bites with crispy golden coating.",
    img: "/images/food/2.png",
    price: 240,
    type: "veg",
    spicy: false,
  },
  {
    name: "Dragon Chicken",
    desc: "Spicy Indo-Chinese chicken tossed in bold sauces.",
    img: "/images/food/3.png",
    price: 320,
    type: "nonveg",
    spicy: true,
  },
  {
    name: "Mushroom Pepper Fry",
    desc: "Pepper-spiced mushrooms sautéed with herbs.",
    img: "/images/food/1.png",
    price: 260,
    type: "veg",
    spicy: true,
  },
];

export default function StartersSection({ filter, search }) {
  const filteredItems = starters.filter((item) => {
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
      id="starters"
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
            Delicious{" "}
            <span
              className="text-[#F5EBDD]"
              style={{
                textShadow: `
                  0 0 10px rgba(245,235,221,0.45),
                  0 0 28px rgba(232,216,195,0.25)
                `,
              }}
            >
              Starters
            </span>
          </h2>

          <p className="mt-6 text-[#D9C7B2] text-base md:text-lg leading-8 max-w-2xl mx-auto">
            Begin your culinary journey with handcrafted starters infused with
            bold flavors, premium ingredients, and unforgettable textures.
          </p>

          {/* SEPARATOR */}
          <div className="w-24 h-[2px] bg-[#C8AE8D]/30 rounded-full mx-auto mt-8"></div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="
                relative overflow-hidden
                rounded-[32px]
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
              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411]/95 via-[#1A1411]/20 to-transparent" />

                {/* BADGES */}
                <div className="absolute top-5 left-5 flex gap-3 flex-wrap z-10">
                  <span
                    className={`
                      text-xs px-4 py-2 rounded-full
                      border
                      backdrop-blur-xl
                      shadow-[0_10px_30px_rgba(0,0,0,0.25)]
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
                        backdrop-blur-xl
                        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                      "
                    >
                      Spicy 🌶
                    </span>
                  )}
                </div>

                {/* PRICE */}
                <div
                  className="
                    absolute top-5 right-5
                    px-5 py-2 rounded-full
                    bg-[#241B17]/80
                    border border-[#E8D8C3]/10
                    text-[#F5EBDD]
                    text-lg font-bold
                    backdrop-blur-xl
                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    z-10
                  "
                >
                  ₹{item.price}
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-7">
                <h3 className="text-2xl font-semibold text-[#F8F1E7] mb-4">
                  {item.name}
                </h3>

                {/* LINE */}
                <div className="w-14 h-[2px] bg-[#C8AE8D]/30 rounded-full mb-5"></div>

                <p className="text-[#D9C7B2] text-sm md:text-base leading-8">
                  {item.desc}
                </p>
              </div>

              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
