"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1A1411] via-[#241B17] to-[#1A1411] text-[#F8F1E7] pt-32 pb-24 px-6 md:px-16">
      {/* GLOBAL AMBIENT GLOW */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-[420px] h-[420px] bg-[#9C7B57]/15 blur-[160px]" />

        <div className="absolute bottom-20 right-1/4 w-[350px] h-[350px] bg-[#B08A61]/10 blur-[160px]" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto">
        {/* PAGE TITLE */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Contact{" "}
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

          <p className="text-[#D9C7B2] max-w-2xl mx-auto leading-8 text-lg">
            Connect with us for reservations, private events, collaborations, or
            unforgettable nightlife experiences.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {/* MAP + INFO */}
          <div
            className="
              lg:col-span-2
              relative overflow-hidden
              rounded-[36px]
              border border-[#E8D8C3]/10
              bg-gradient-to-b
              from-[#32251E]
              via-[#241B17]
              to-[#1A1411]
              shadow-[0_25px_80px_rgba(0,0,0,0.4)]
              min-h-[650px]
            "
          >
            {/* MAP */}
            <iframe
              className="absolute inset-0 w-full h-full opacity-70"
              frameBorder="0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.1385927646497!2d77.52065461574493!3d12.917595622894094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3face64ecd29%3A0x59a7f7f88ae47b89!2sBEML%20Layout%2C%20Rajarajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560098!5e1!3m2!1sen!2sin!4v1776354220621!5m2!1sen!2sin"
              style={{
                filter:
                  "grayscale(1) contrast(1.1) brightness(0.5) sepia(0.25)",
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411]/95 via-[#1A1411]/50 to-transparent" />

            {/* INFO CARD */}
            <div className="relative z-10 h-full flex items-end p-8">
              <div
                className="
                  w-full
                  rounded-[28px]
                  bg-[#2B211B]/75
                  backdrop-blur-2xl
                  border border-[#E8D8C3]/10
                  p-8
                  shadow-[0_15px_50px_rgba(0,0,0,0.3)]
                "
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* ADDRESS */}
                  <div>
                    <h2 className="text-sm tracking-[0.25em] text-[#BCA894] mb-4 uppercase">
                      Address
                    </h2>

                    <p className="text-[#F8F1E7] leading-8">
                      Zero Degree Brewery & Kitchen,
                      <br />
                      BEML Layout, Rajarajeshwari Nagar,
                      <br />
                      Bengaluru, Karnataka - 560098
                    </p>
                  </div>

                  {/* CONTACT */}
                  <div>
                    <h2 className="text-sm tracking-[0.25em] text-[#BCA894] mb-4 uppercase">
                      Contact
                    </h2>

                    <div className="space-y-5">
                      <div>
                        <p className="text-[#BCA894] text-xs uppercase mb-1">
                          Email
                        </p>

                        <p className="text-[#F5EBDD]">
                          info@zerodegreebreweryandkitchen.com
                        </p>
                      </div>

                      <div>
                        <p className="text-[#BCA894] text-xs uppercase mb-1">
                          Phone
                        </p>

                        <p className="text-[#F5EBDD]">+91 99864 66266</p>
                      </div>

                      <div>
                        <p className="text-[#BCA894] text-xs uppercase mb-1">
                          Timings
                        </p>

                        <p className="text-[#F5EBDD]">12:00 PM — 1:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              relative overflow-hidden
              rounded-[36px]
              border border-[#E8D8C3]/10
              bg-gradient-to-b
              from-[#32251E]
              via-[#241B17]
              to-[#1A1411]
              p-8 md:p-10
              backdrop-blur-2xl
              shadow-[0_25px_80px_rgba(0,0,0,0.4)]
            "
          >
            {/* GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.12),transparent_60%)] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in{" "}
                <span
                  className="text-[#F5EBDD]"
                  style={{
                    textShadow: `
                      0 0 10px rgba(245,235,221,0.35),
                      0 0 24px rgba(232,216,195,0.2)
                    `,
                  }}
                >
                  Touch
                </span>
              </h2>

              <p className="text-[#D9C7B2] leading-7 mb-8">
                Have a question, event inquiry, or reservation request? We’d
                love to hear from you.
              </p>

              {/* FORM */}
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    w-full p-4 rounded-2xl
                    bg-[#2B211B]/70
                    border border-[#E8D8C3]/10
                    text-[#F8F1E7]
                    placeholder:text-[#BCA894]
                    focus:border-[#C8AE8D]/40
                    focus:outline-none
                    transition-all duration-300
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    w-full p-4 rounded-2xl
                    bg-[#2B211B]/70
                    border border-[#E8D8C3]/10
                    text-[#F8F1E7]
                    placeholder:text-[#BCA894]
                    focus:border-[#C8AE8D]/40
                    focus:outline-none
                    transition-all duration-300
                  "
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="
                    w-full p-4 rounded-2xl
                    bg-[#2B211B]/70
                    border border-[#E8D8C3]/10
                    text-[#F8F1E7]
                    placeholder:text-[#BCA894]
                    focus:border-[#C8AE8D]/40
                    focus:outline-none
                    transition-all duration-300
                    resize-none
                  "
                />

                {/* BUTTON */}
                <button
                  className="
                    w-full py-4 rounded-full
                    bg-[#9C7B57]
                    hover:bg-[#B08A61]
                    text-[#F8F1E7]
                    font-semibold text-lg
                    transition-all duration-300
                    hover:scale-[1.02]
                    shadow-[0_0_24px_rgba(156,123,87,0.35)]
                  "
                >
                  Send Message
                </button>
              </div>

              <p className="text-xs text-[#BCA894] mt-5 text-center">
                We typically respond within a few hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
