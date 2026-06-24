"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await api.get("/events");

        const upcoming = data.events.filter(
          (item) => item.category === "upcoming",
        );

        setEvents(upcoming);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="relative px-6 md:px-16 py-20 overflow-hidden">
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,123,87,0.10),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Upcoming{" "}
            <span
              className="text-[#F5EBDD]"
              style={{
                textShadow: `
                  0 0 10px rgba(245,235,221,0.45),
                  0 0 28px rgba(232,216,195,0.25)
                `,
              }}
            >
              Events
            </span>
          </h2>

          <p className="mt-6 text-[#D9C7B2] text-base md:text-lg max-w-2xl mx-auto leading-8">
            Discover curated nights filled with music, celebration, premium
            hospitality, and unforgettable experiences.
          </p>

          <div className="w-24 h-[2px] bg-[#C8AE8D]/30 rounded-full mx-auto mt-8"></div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="text-center text-[#D9C7B2] py-20">
            Loading upcoming events...
          </div>
        )}

        {/* EMPTY */}
        {!loading && events.length === 0 && (
          <div className="text-center text-[#D9C7B2] py-20">
            No upcoming events available.
          </div>
        )}

        {/* EVENT CARDS */}
        {!loading && events.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event._id}
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.3,
                }}
                className="
                    relative overflow-hidden
                    rounded-[32px]
                    border border-[#E8D8C3]/10
                    bg-gradient-to-b
                    from-[#32251E]
                    via-[#241B17]
                    to-[#1A1411]
                    group
                    shadow-[0_20px_70px_rgba(0,0,0,0.3)]
                  "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="
                        h-72 w-full object-cover
                        group-hover:scale-110
                        transition duration-700
                      "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411]/90 via-transparent to-transparent" />

                  {/* DATE */}
                  <div
                    className="
                        absolute top-5 left-5
                        px-4 py-2 rounded-full
                        bg-[#241B17]/80
                        backdrop-blur-xl
                        border border-[#E8D8C3]/10
                        text-[#F5EBDD]
                        text-sm tracking-wide
                        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                      "
                  >
                    {event.eventDate
                      ? new Date(event.eventDate).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : "Upcoming"}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <h3 className="text-2xl font-semibold text-[#F8F1E7] mb-4">
                    {event.title}
                  </h3>

                  <div className="w-14 h-[2px] bg-[#C8AE8D]/30 rounded-full mb-5"></div>

                  <p className="text-[#D9C7B2] leading-8 text-sm line-clamp-4">
                    {event.description}
                  </p>
                </div>

                {/* GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.08),transparent_70%)] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
