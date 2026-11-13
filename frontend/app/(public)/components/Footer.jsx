"use client";

import Link from "next/link";
import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#2B211B] via-[#241B17] to-[#1A1411] text-[#F8F1E7] border-t border-[#E8D8C3]/10 overflow-hidden">
      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.18),transparent_60%)]" />

      {/* MAIN FOOTER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">

        {/* BRAND */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="inline-block">
            
            {/* BRAND NAME */}
            <div className="flex flex-col items-center md:items-start mb-5">
              <h2 className="text-3xl font-extrabold tracking-wide leading-none">
                <span
                  className="text-[#F5EBDD]"
                  style={{
                    textShadow: `
                      0 0 8px rgba(245,235,221,0.45),
                      0 0 18px rgba(232,216,195,0.25)
                    `,
                  }}
                >
                  Zero
                </span>{" "}
                <span
                  className="text-[#FFFFFF]"
                  style={{
                    textShadow: `
                      0 0 8px rgba(255,255,255,0.25),
                      0 0 16px rgba(255,255,255,0.12)
                    `,
                  }}
                >
                  Degree
                </span>
              </h2>

              {/* COMPANY NAME */}
              <span
                className="
                  mt-2
                  text-[8px]
                  md:text-[9px]
                  tracking-[0.13em]
                  uppercase
                  font-semibold
                  text-[#F5EBDD]
                  whitespace-nowrap
                  leading-tight
                "
                style={{
                  textShadow: `
                    0 1px 4px rgba(0,0,0,0.8),
                    0 0 8px rgba(245,235,221,0.15)
                  `,
                }}
              >
                Six Sigma Brew and Hospitality LLP
              </span>
            </div>

          </Link>

          <p className="text-[#D9C7B2] text-sm leading-8 mb-5 max-w-xs">
            Where craft brews meet unforgettable nights. Experience the perfect
            blend of taste, music, and ambience.
          </p>

          <address className="not-italic space-y-3 text-[#E6D5C3] text-sm">
            <a href={`mailto:${SITE.email}`} className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition break-all">
              <Mail size={16} className="shrink-0" /> {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
              <Phone size={16} className="shrink-0" /> {SITE.phoneDisplay}
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start justify-center md:justify-start gap-2 hover:text-white transition">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>{SITE.address.line1}, {SITE.address.city} - {SITE.address.pincode}</span>
            </a>
            <p className="text-[#BCA894]">Open {SITE.hoursDisplay}</p>
          </address>
        </div>

        {/* LEGAL */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-5 text-[#F5EBDD]">
            Legal
          </h3>

          <ul className="space-y-3 text-[#D9C7B2] text-sm">
            <li>
              <Link
                href="/terms"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link
                href="/privacy"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/refund"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Refund Policy
              </Link>
            </li>

            <li>
              <Link
                href="/disclaimer"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-5 text-[#F5EBDD]">
            Explore
          </h3>

          <ul className="space-y-3 text-[#D9C7B2] text-sm">
            <li>
              <Link
                href="/menu"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                href="/events"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-5 text-[#F5EBDD]">
            Stay Connected
          </h3>

          <p className="text-[#D9C7B2] text-sm mb-5">
            Reach us instantly for bookings, events & offers
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mb-6 justify-center md:justify-start">
            <a href={whatsappLink("Hi Zero Degree!")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-11 w-11 rounded-full border border-[#E8D8C3]/15 bg-[#241B17] flex items-center justify-center hover:bg-[#32251E] hover:text-white transition">
              <MessageCircle size={20} />
            </a>
            <a href={`tel:${SITE.phoneTel}`} aria-label="Call us" className="h-11 w-11 rounded-full border border-[#E8D8C3]/15 bg-[#241B17] flex items-center justify-center hover:bg-[#32251E] hover:text-white transition">
              <Phone size={20} />
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Get directions" className="h-11 w-11 rounded-full border border-[#E8D8C3]/15 bg-[#241B17] flex items-center justify-center hover:bg-[#32251E] hover:text-white transition">
              <MapPin size={20} />
            </a>
            <a href={`mailto:${SITE.email}`} aria-label="Email us" className="h-11 w-11 rounded-full border border-[#E8D8C3]/15 bg-[#241B17] flex items-center justify-center hover:bg-[#32251E] hover:text-white transition">
              <Mail size={20} />
            </a>
          </div>

          {/* BUTTON */}
          <Link
            href="/book"
            scroll={true}
            className="
              px-7 py-3 rounded-full
              bg-[#9C7B57]
              hover:bg-[#B08A61]
              text-[#F8F1E7]
              text-sm font-semibold
              transition-all duration-300
              hover:scale-105
              shadow-[0_0_22px_rgba(156,123,87,0.35)]
              inline-block text-center
            "
          >
            Book a Table
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-[#E8D8C3]/10 pt-6 pb-24 md:pb-6 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-[#C5B19A] text-center">
    <p>
  © {new Date().getFullYear()} Zero Degree (A Unit of Six Sigma Brew and Hospitality LLP). All rights reserved.
  
</p>

        <p className="flex items-center gap-3">
          <span>Please drink responsibly · 21+ only</span>
          <Link href="/sign-in" className="text-xs text-[#8C7A68] hover:text-[#C5B19A] transition">
            Staff login
          </Link>
        </p>
      </div>
    </footer>
  );
}