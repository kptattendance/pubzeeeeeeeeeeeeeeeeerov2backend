"use client";

import { motion } from "framer-motion";

export default function DisclaimerPage() {
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
          Website{" "}
          <span
            className="text-[#F5EBDD]"
            style={{
              textShadow: `
                0 0 10px rgba(245,235,221,0.45),
                0 0 28px rgba(232,216,195,0.25)
              `,
            }}
          >
            Disclaimer
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
    title: "1. General Information",
    content:
      "The information provided on this website is for general informational purposes only. While we strive to keep all details accurate and up to date, Zero Degree Brewery & Kitchen makes no warranties regarding completeness, reliability, or accuracy.",
  },
  {
    title: "2. Food & Beverage Disclaimer",
    content:
      "Menu items, ingredients, and availability may change without prior notice. Customers are advised to inform staff about any allergies or dietary restrictions before ordering.\n\nWe are not responsible for adverse reactions caused due to undisclosed allergies.",
  },
  {
    title: "3. Events & Promotions",
    content:
      "All events, offers, and promotions displayed on the website are subject to change or cancellation without prior notice. Entry to events may be subject to terms, availability, and venue policies.",
  },
  {
    title: "4. External Links Disclaimer",
    content:
      "This website may contain links to third-party websites or services. We do not control or guarantee the accuracy or reliability of content on external platforms and are not responsible for any damages arising from their use.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "Under no circumstances shall Zero Degree Brewery & Kitchen be liable for any loss or damage arising from the use of this website or reliance on its content.",
  },
  {
    title: "6. Professional Disclaimer",
    content:
      "The content on this website does not constitute professional advice of any kind. Any decisions made based on the information provided are at the user's own discretion and risk.",
  },
  {
    title: "7. Consent",
    content:
      "By using our website, you hereby consent to this disclaimer and agree to its terms.",
  },
  {
    title: "8. Updates",
    content:
      "We reserve the right to update, amend, or make changes to this disclaimer at any time without prior notice. Changes will be reflected on this page.",
  },
  {
    title: "9. Contact Us",
    content:
      "If you have any questions regarding this disclaimer, you may contact us:\n\nEmail: info@zerodegree.com\nPhone: +91 8159919085",
  },
];
