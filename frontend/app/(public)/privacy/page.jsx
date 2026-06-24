"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
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
          Privacy{" "}
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
    title: "1. Introduction",
    content:
      "At Zero Degree Brewery & Kitchen, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or interact with our services.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We may collect personal information such as your name, email address, and phone number when you fill out contact forms, make reservations, or communicate with us.\n\nWe may also collect non-personal data such as browser type, device information, and website usage patterns.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "Your information is used to:\n\n• Respond to inquiries and provide customer support\n• Manage reservations and bookings\n• Improve our website and services\n• Send updates or promotional information (only if you opt in)",
  },
  {
    title: "4. Data Protection",
    content:
      "We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is completely secure.",
  },
  {
    title: "5. Sharing of Information",
    content:
      "We do not sell, rent, or trade your personal information. Your data may be shared only with trusted service providers who assist in operating the website or delivering services, and only when necessary.",
  },
  {
    title: "6. Cookies & Tracking",
    content:
      "Our website may use cookies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings if preferred.",
  },
  {
    title: "7. Third-Party Services",
    content:
      "We may use third-party services such as Google Maps or social media integrations. These platforms have their own privacy policies, and we are not responsible for their practices.",
  },
  {
    title: "8. Your Rights",
    content:
      "You have the right to request access to your personal data, request corrections, or ask for deletion of your data. You may contact us to exercise these rights.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us:\n\nEmail: info@zerodegree.com\nPhone: +91 8159919085",
  },
];
