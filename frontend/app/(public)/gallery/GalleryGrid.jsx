"use client";

import { useEffect, useMemo, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import api from "@/services/api";

import { Loader2, CalendarDays } from "lucide-react";

export default function GalleryGrid() {
  const [gallery, setGallery] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selected, setSelected] = useState(null);

  const [activeFilter, setActiveFilter] = useState("all");

  // ==========================================
  // FETCH GALLERY
  // ==========================================
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);

        const { data } = await api.get("/gallery");

        setGallery(data.items || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // ==========================================
  // DYNAMIC FILTERS
  // ==========================================
  const filters = useMemo(() => {
    const unique = [...new Set(gallery.map((item) => item.category))];

    return ["all", ...unique];
  }, [gallery]);

  // ==========================================
  // FILTERED ITEMS
  // ==========================================
  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return gallery;
    }

    return gallery.filter((item) => item.category === activeFilter);
  }, [gallery, activeFilter]);

  return (
    <section
      className="
        relative px-6 md:px-16
        py-28 overflow-hidden
      "
    >
      {/* AMBIENT BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(156,123,87,0.08),transparent_70%)]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2
            className="
              text-4xl md:text-6xl
              font-extrabold leading-tight
            "
          >
            Gallery{" "}
            <span
              className="
                text-[#F5EBDD]
              "
              style={{
                textShadow: `
                  0 0 10px rgba(245,235,221,0.45),
                  0 0 28px rgba(232,216,195,0.25)
                `,
              }}
            >
              Moments
            </span>
          </h2>

          <p
            className="
              mt-6 text-[#D9C7B2]
              text-base md:text-lg
              max-w-2xl mx-auto
              leading-8
            "
          >
            Explore the ambience, curated cuisine, signature events, and premium
            nightlife experiences that define Zero Degree.
          </p>

          <div
            className="
              w-24 h-[2px]
              bg-[#C8AE8D]/30
              rounded-full
              mx-auto mt-8
            "
          />
        </div>

        {/* FILTER BAR */}
        <div
          className="
            flex justify-center
            gap-4 mb-14 flex-wrap
          "
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`
                px-6 py-3 rounded-full
                text-sm uppercase
                tracking-wide
                transition-all duration-300
                border

                ${
                  activeFilter === f
                    ? `
                      bg-[#9C7B57]
                      border-[#B08A61]
                      text-[#F8F1E7]
                      shadow-[0_0_20px_rgba(156,123,87,0.35)]
                    `
                    : `
                      bg-[#2B211B]/70
                      border-[#E8D8C3]/10
                      text-[#D9C7B2]
                      hover:bg-[#32251E]
                      hover:border-[#C8AE8D]/20
                    `
                }
              `}
            >
              {f.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {loading ? (
          <div
            className="
              flex justify-center
              py-24
            "
          >
            <Loader2
              size={42}
              className="
                animate-spin
                text-[#C7B299]
              "
            />
          </div>
        ) : filteredItems.length === 0 ? (
          <div
            className="
              text-center py-24
              text-[#C7B299]
            "
          >
            No gallery items found.
          </div>
        ) : (
          <motion.div
            layout
            className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  gap-6
"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item._id}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                      relative cursor-pointer
                      overflow-hidden
                      rounded-[28px]
                      group
                      border border-[#E8D8C3]/10
                      shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                      bg-[#241B17]
                    "
                  onClick={() => setSelected(item)}
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
  w-full
  h-[320px]
  object-cover
  rounded-[28px]
  group-hover:scale-110
  transition duration-700
"
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-[#1A1411]/95
                        via-[#1A1411]/30
                        to-transparent

                        opacity-0
                        group-hover:opacity-100

                        transition duration-500

                        flex flex-col
                        justify-end
                        p-5
                      "
                  >
                    {/* CATEGORY */}
                    <div
                      className="
                          mb-3
                        "
                    >
                      <span
                        className="
                            px-4 py-2 rounded-full
                            bg-[#241B17]/80
                            backdrop-blur-xl
                            border border-[#E8D8C3]/10
                            text-[#F5EBDD]
                            text-xs uppercase
                            tracking-wide
                          "
                      >
                        {item.category.replace("-", " ")}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                          text-xl font-bold
                          text-[#F8F1E7]
                          mb-2
                        "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                          text-[#D9C7B2]
                          text-sm
                          leading-7
                          line-clamp-3
                          mb-4
                        "
                    >
                      {item.description}
                    </p>

                    {/* DATE */}
                    <div
                      className="
                          flex items-center
                          gap-2
                          text-[#C7B299]
                          text-xs
                        "
                    >
                      <CalendarDays size={14} />

                      {item.galleryDate
                        ? new Date(item.galleryDate).toLocaleDateString("en-IN")
                        : "Gallery"}
                    </div>
                  </div>

                  {/* CARD GLOW */}
                  <div
                    className="
                        absolute inset-0
                        bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.08),transparent_70%)]
                        opacity-0
                        group-hover:opacity-100
                        transition duration-500
                        pointer-events-none
                      "
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* LIGHTBOX */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="
                fixed inset-0 z-50
                bg-[#0E0B09]/95
                backdrop-blur-xl
                flex justify-center items-center
                p-6
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setSelected(null)}
            >
              {/* CONTENT */}
              <motion.div
                initial={{
                  scale: 0.9,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  relative max-w-6xl
                  w-full
                  grid lg:grid-cols-2
                  gap-10
                  items-center
                "
                onClick={(e) => e.stopPropagation()}
              >
                {/* IMAGE */}
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="
                    w-full
                    max-h-[85vh]
                    object-cover
                    rounded-[32px]
                    border border-[#E8D8C3]/10
                    shadow-[0_25px_80px_rgba(0,0,0,0.5)]
                  "
                />

                {/* DETAILS */}
                <div>
                  <span
                    className="
                      inline-block
                      px-5 py-2
                      rounded-full
                      mb-6

                      bg-[#241B17]/80
                      border border-[#E8D8C3]/10

                      text-[#F5EBDD]
                      uppercase
                      tracking-widest
                      text-xs
                    "
                  >
                    {selected.category.replace("-", " ")}
                  </span>

                  <h2
                    className="
                      text-4xl font-bold
                      text-[#F8F1E7]
                      mb-6
                    "
                  >
                    {selected.title}
                  </h2>

                  <p
                    className="
                      text-[#D9C7B2]
                      leading-9
                      mb-8
                    "
                  >
                    {selected.description}
                  </p>

                  <div
                    className="
                      flex items-center gap-3
                      text-[#C7B299]
                    "
                  >
                    <CalendarDays size={18} />

                    {selected.galleryDate
                      ? new Date(selected.galleryDate).toLocaleDateString(
                          "en-IN",
                        )
                      : "Gallery"}
                  </div>
                </div>
              </motion.div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="
                  absolute top-6 right-6
                  w-12 h-12
                  rounded-full

                  bg-[#241B17]/80
                  border border-[#E8D8C3]/10

                  text-[#F8F1E7]
                  text-xl

                  hover:bg-[#32251E]

                  transition duration-300

                  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                "
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
