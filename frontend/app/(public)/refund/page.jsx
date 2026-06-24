"use client";

import { motion } from "framer-motion";

export default function RefundPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1A1411] via-[#241B17] to-[#1A1411] text-[#F8F1E7]">
      {/* GLOBAL AMBIENT BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-[420px] h-[420px] bg-[#9C7B57]/15 blur-[160px]" />

        <div className="absolute bottom-20 right-1/4 w-[350px] h-[350px] bg-[#B08A61]/10 blur-[160px]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 pt-36 pb-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Refund{" "}
          <span
            className="text-[#F5EBDD]"
            style={{
              textShadow: `
                0 0 10px rgba(245,235,221,0.45),
                0 0 28px rgba(232,216,195,0.25)
              `,
            }}
          >
            Policy
          </span>
        </motion.h1>

        <p className="mt-6 text-[#C5B19A] text-sm tracking-wide">
          Effective Date: {new Date().toLocaleDateString()}
        </p>
      </section>

      {/* CONTENT */}
      <section className="relative z-10 px-6 md:px-16 pb-32">
        <div className="max-w-5xl mx-auto space-y-10">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`
                relative overflow-hidden
                rounded-[32px]
                border border-[#E8D8C3]/10
                backdrop-blur-2xl
                shadow-[0_20px_70px_rgba(0,0,0,0.25)]
                p-8 md:p-10
                ${
                  i % 2 === 0
                    ? "bg-gradient-to-br from-[#32251E] via-[#241B17] to-[#1A1411]"
                    : "bg-gradient-to-br from-[#241B17] via-[#2B211B] to-[#1A1411]"
                }
              `}
            >
              {/* SECTION GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.08),transparent_70%)] pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-[#F5EBDD]">
                  {sec.title}
                </h2>

                {/* SEPARATOR */}
                <div className="w-16 h-[2px] bg-[#C8AE8D]/30 rounded-full mb-6"></div>

                <p className="text-[#D9C7B2] leading-9 text-sm md:text-base whitespace-pre-line">
                  {sec.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

const sections = [
  {
    title: "1. General Policy",
    content:
      "Currently, Zero Degree Brewery & Kitchen does not process online payments through this website. All payments are made at the venue unless otherwise specified.",
  },
  {
    title: "2. Reservations",
    content:
      "Table reservations are free of charge. In case of special bookings or event reservations requiring advance payment, refund eligibility will be communicated at the time of booking.",
  },
  {
    title: "3. Event Bookings",
    content:
      "For ticketed or paid events, refunds may not be applicable unless the event is cancelled by the venue. In such cases, refunds or rescheduling options will be provided.",
  },
  {
    title: "4. Cancellations",
    content:
      "Customers are encouraged to cancel reservations in advance. Repeated no-shows may result in restricted booking privileges.",
  },
  {
    title: "5. Future Payments",
    content:
      "If online payments are introduced in the future, this policy will be updated to include detailed refund timelines, eligibility, and processing methods.",
  },
  {
    title: "6. Contact",
    content:
      "For any queries regarding refunds or cancellations:\n\nEmail: info@zerodegree.com\nPhone: +91 8159919085",
  },
];
