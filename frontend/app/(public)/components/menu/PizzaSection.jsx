"use client";

import { motion } from "framer-motion";

const pizzas = [
  {
    name: "Margherita",
    desc: "Classic pizza with basil, mozzarella, and rich tomato sauce.",
    price: 280,
    type: "veg",
    spicy: false,
  },
  {
    name: "Fungi Mushroom",
    desc: "Loaded with sautéed mushrooms and creamy mozzarella.",
    price: 320,
    type: "veg",
    spicy: false,
  },
  {
    name: "Paneer 65 Pizza",
    desc: "Spicy paneer topping layered with premium cheese.",
    price: 360,
    type: "veg",
    spicy: true,
  },
  {
    name: "Peri Peri Veggie",
    desc: "Loaded with roasted vegetables and peri peri seasoning.",
    price: 340,
    type: "veg",
    spicy: true,
  },
  {
    name: "Chicken 65 Pizza",
    desc: "Fiery chicken topping on a cheesy wood-fired crust.",
    price: 380,
    type: "nonveg",
    spicy: true,
  },
  {
    name: "BBQ Chicken Pizza",
    desc: "Smoky barbecue chicken with mozzarella and herbs.",
    price: 400,
    type: "nonveg",
    spicy: false,
  },
  {
    name: "Meat Madness",
    desc: "Loaded with assorted premium meats and cheese.",
    price: 420,
    type: "nonveg",
    spicy: false,
  },
  {
    name: "Pepperoni Feast",
    desc: "Classic pepperoni layered with rich mozzarella cheese.",
    price: 440,
    type: "nonveg",
    spicy: true,
  },
];

export default function PizzaSection({ filter, search }) {
  const filteredItems = pizzas.filter((item) => {
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
      id="pizza"
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
            Wood Fire{" "}
            <span
              className="text-[#F5EBDD]"
              style={{
                textShadow: `
                  0 0 10px rgba(245,235,221,0.45),
                  0 0 28px rgba(232,216,195,0.25)
                `,
              }}
            >
              Pizza
            </span>
          </h2>

          <p className="mt-6 text-[#D9C7B2] text-base md:text-lg leading-8 max-w-2xl mx-auto">
            Experience handcrafted wood-fired pizzas layered with premium
            ingredients, bold flavors, and signature culinary artistry.
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
    rounded-[30px]
    p-6
    bg-gradient-to-br
    from-[#32251E]
    via-[#241B17]
    to-[#1A1411]
    border border-[#E8D8C3]/10
    backdrop-blur-xl
    shadow-[0_15px_50px_rgba(0,0,0,0.25)]
    hover:border-[#C8AE8D]/30
    transition-all duration-300
    group
    flex flex-col
  "
>
  {/* CARD GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

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
  <div className="relative z-10 flex flex-col flex-1">
    <h3 className="text-2xl font-semibold text-[#F8F1E7] mb-4 leading-tight">
      {item.name}
    </h3>

    {/* LINE */}
    <div className="w-14 h-[2px] bg-[#C8AE8D]/30 rounded-full mb-5"></div>

    <p className="text-[#D9C7B2] text-sm md:text-base leading-7">
      {item.desc}
    </p>

    {/* PUSH PRICE TO BOTTOM */}
    <div className="mt-8 flex items-center justify-between">
      {/* PRICE */}
      <div
        className="
          px-5 py-2 rounded-full
          bg-[#241B17]/80
          border border-[#E8D8C3]/10
          text-[#F5EBDD]
          text-lg font-bold
          shadow-[0_10px_30px_rgba(0,0,0,0.2)]
        "
      >
        ₹{item.price}
      </div>

      {/* BUTTON */}
      <button
        className="
          px-5 py-2 rounded-full
          bg-[#9C7B57]
          hover:bg-[#B08A61]
          text-[#F8F1E7]
          text-sm font-medium
          transition-all duration-300
          shadow-[0_0_18px_rgba(156,123,87,0.25)]
        "
      >
        Order
      </button>
    </div>
  </div>
</motion.div>
         
          ))}
        </div>
      </div>
    </section>
  );
}
