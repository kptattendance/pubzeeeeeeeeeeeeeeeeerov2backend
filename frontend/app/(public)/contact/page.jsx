"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { SITE, whatsappLink } from "@/lib/site";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim().length < 2 || form.message.trim().length < 5) {
      Swal.fire({
        icon: "warning",
        title: "Almost there",
        text: "Please add your name and a short message",
        background: "#241B17",
        color: "#F8F1E7",
        confirmButtonColor: "#9C7B57",
      });
      return;
    }

    const text = `👋 *Website Enquiry*

Name: ${form.name.trim()}${form.email.trim() ? `
Email: ${form.email.trim()}` : ""}

${form.message.trim()}`;

    // same-tab navigation opens the WhatsApp app on phones and is never popup-blocked
    window.location.href = whatsappLink(text);
  };

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
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6">
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
              min-h-[560px] md:min-h-[650px]
            "
          >
            {/* MAP */}
            <iframe
              className="absolute inset-0 w-full h-full opacity-70"
              frameBorder="0"
              title="Map showing Zero Degree Brewery & Kitchen location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.1385927646497!2d77.52065461574493!3d12.917595622894094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3face64ecd29%3A0x59a7f7f88ae47b89!2sBEML%20Layout%2C%20Rajarajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560098!5e1!3m2!1sen!2sin!4v1776354220621!5m2!1sen!2sin"
              style={{
                filter:
                  "grayscale(1) contrast(1.1) brightness(0.5) sepia(0.25)",
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411]/95 via-[#1A1411]/50 to-transparent" />

            {/* INFO CARD */}
            <div className="relative z-10 h-full flex items-end p-3 sm:p-8">
              <div
                className="
                  w-full
                  rounded-[28px]
                  bg-[#2B211B]/75
                  backdrop-blur-2xl
                  border border-[#E8D8C3]/10
                  p-6 sm:p-8
                  shadow-[0_15px_50px_rgba(0,0,0,0.3)]
                "
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* ADDRESS */}
                  <div>
                    <h2 className="text-sm tracking-[0.25em] text-[#BCA894] mb-4 uppercase">
                      Address
                    </h2>

                    <address className="not-italic text-[#F8F1E7] leading-8">
                      Zero Degree Brewery & Kitchen,
                      <br />
                      BEML Layout, Rajarajeshwari Nagar,
                      <br />
                      Bengaluru, Karnataka - 560098
                    </address>
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#9C7B57] hover:bg-[#B08A61] px-5 py-2.5 text-sm font-semibold text-[#F8F1E7] transition"
                    >
                      Get Directions →
                    </a>
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

                        <a href={`mailto:${SITE.email}`} className="text-[#F5EBDD] hover:text-white underline-offset-4 hover:underline break-all">
                          {SITE.email}
                        </a>
                      </div>

                      <div>
                        <p className="text-[#BCA894] text-xs uppercase mb-1">
                          Phone
                        </p>

                        <a href={`tel:${SITE.phoneTel}`} className="text-[#F5EBDD] hover:text-white underline-offset-4 hover:underline">
                          {SITE.phoneDisplay}
                        </a>
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
              p-6 sm:p-8 md:p-10
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
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={update}
                  required
                  maxLength={60}
                  autoComplete="name"
                  aria-label="Your name"
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
                  name="email"
                  value={form.email}
                  onChange={update}
                  maxLength={100}
                  autoComplete="email"
                  aria-label="Your email (optional)"
                  placeholder="Your Email (optional)"
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
                  name="message"
                  value={form.message}
                  onChange={update}
                  required
                  maxLength={1000}
                  aria-label="Your message"
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
                  type="submit"
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
                  Send via WhatsApp
                </button>
              </form>

              <p className="text-xs text-[#BCA894] mt-5 text-center">
                We typically respond within a few hours. Prefer a call?{" "}
                <a href={`tel:${SITE.phoneTel}`} className="underline hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
