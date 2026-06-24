"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
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
          Terms &{" "}
          <span
            className="text-[#F5EBDD]"
            style={{
              textShadow: `
                0 0 10px rgba(245,235,221,0.45),
                0 0 28px rgba(232,216,195,0.25)
              `,
            }}
          >
            Conditions
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
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using the Zero Degree Brewery & Kitchen website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use this website.",
  },
  {
    title: "2. Use of Website",
    content:
      "This website is intended to provide information about our menu, events, and services. You agree not to misuse the website, attempt unauthorized access, or engage in any activity that may harm the platform or its users.",
  },
  {
    title: "3. Reservations & Bookings",
    content:
      "Table reservations and event bookings are subject to availability. We reserve the right to modify or cancel reservations in case of unforeseen circumstances.\n\nGuests are expected to arrive on time. Delays may result in cancellation or reassignment of the table.",
  },
  {
    title: "4. Payments & Pricing",
    content:
      "All prices listed on the website are subject to change without prior notice. Any applicable taxes and service charges will be added as per regulations.\n\nCurrently, online payments may not be enabled. Payments are typically collected at the venue.",
  },
  {
    title: "5. User Conduct",
    content:
      "Users are expected to behave responsibly while interacting with the website or visiting the venue. Any inappropriate behavior, misuse, or violation of rules may result in denial of service.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "All content on this website, including text, images, logos, and design, is the property of Zero Degree Brewery & Kitchen and may not be copied, reproduced, or used without permission.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "We strive to keep the website accurate and up to date, but we do not guarantee completeness or accuracy at all times.\n\nZero Degree Brewery & Kitchen shall not be held liable for any direct or indirect damages arising from the use of this website.",
  },
  {
    title: "8. Third-Party Links",
    content:
      "This website may contain links to third-party platforms such as social media or maps. We are not responsible for the content or policies of those platforms.",
  },
  {
    title: "9. Privacy",
    content:
      "Any personal information shared through forms on this website will be handled with care and used only for communication or service-related purposes.",
  },
  {
    title: "10. Modifications",
    content:
      "We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website implies acceptance of the updated terms.",
  },
  {
    title: "11. Contact Information",
    content:
      "For any questions regarding these Terms & Conditions, you may contact us at:\n\nEmail: info@zerodegree.com\nPhone: +91 8159919085",
  },
];
