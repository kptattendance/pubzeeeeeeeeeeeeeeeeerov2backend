"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, ShieldCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { isSignedIn, user } = useUser();

  const isAdmin = user?.publicMetadata?.role === "admin";
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2B211B]/90 backdrop-blur-2xl border-b border-[#E8D8C3]/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-gradient-to-b from-[#1A1411]/90 to-transparent"
      }`}
    >
      {/* AMBIENT TOP GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.18),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            {/* LOGO IMAGE */}
            <img
              src="/images/logo.png"
              alt="Zero Degree Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />

            {/* LOGO TEXT */}
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide leading-none">
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
              <span className="text-white">Degree</span>
            </h1>
          </motion.div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link key={item.path} href={item.path} className="relative group">
                <span
                  className={`text-[17px] font-medium transition duration-300 ${
                    isActive
                      ? "text-[#F5EBDD]"
                      : "text-[#E6D5C3] group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

                {/* UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-[#C8AE8D] transition-all duration-300 ${
                    isActive
                      ? "w-full shadow-[0_0_10px_rgba(200,174,141,0.6)]"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* BUTTON */}
          <div className="flex items-center gap-4">
            {!isSignedIn ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/sign-in"
                  className="
        px-5 py-3 rounded-full
        border border-[#E8D8C3]/15
        bg-[#241B17]/70
        hover:bg-[#32251E]
        text-[#F8F1E7]
        font-medium
        transition-all duration-300
        inline-flex items-center gap-2
      "
                >
                  <ShieldCheck size={18} />
                  Admin Login
                </Link>
              </motion.div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/admin"
                  className="
    px-5 py-3 rounded-full
      bg-[#241B17]
      border border-[#E8D8C3]/10
      text-[#F8F1E7]
      hover:bg-[#32251E]
      transition-all duration-300
      "
                >
                  Dashboard
                </Link>

                <UserButton afterSignOutUrl="/" />
              </div>
            )}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/book"
                className="
        px-7 py-3 rounded-full
        bg-[#9C7B57]
        hover:bg-[#B08A61]
        text-[#F8F1E7]
        font-semibold
        transition-all duration-300
        shadow-[0_0_24px_rgba(156,123,87,0.35)]
        inline-block
      "
              >
                Book Table
              </Link>
            </motion.div>
          </div>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden text-[#F8F1E7]">
          {isOpen ? (
            <X size={30} onClick={() => setIsOpen(false)} />
          ) : (
            <Menu size={30} onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            md:hidden
            bg-[#241B17]/95
            backdrop-blur-2xl
            border-t border-[#E8D8C3]/10
            px-6 py-6 space-y-6
          "
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium transition ${
                  isActive
                    ? "text-[#F5EBDD]"
                    : "text-[#D9C7B2] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          {!isSignedIn ? (
            <Link
              href="/sign-in"
              onClick={() => setIsOpen(false)}
              className="
      block w-full text-center
      border border-[#E8D8C3]/10
      bg-[#241B17]
      text-[#F8F1E7]
      py-3 rounded-full
      font-semibold
      transition-all duration-300
    "
            >
              Admin Login
            </Link>
          ) : (
            <>
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="
      block w-full text-center
      border border-[#E8D8C3]/10
      bg-[#241B17]
      text-[#F8F1E7]
      py-3 rounded-full
      font-semibold
      transition-all duration-300
    "
              >
                Dashboard
              </Link>

              <div className="flex justify-center pt-2">
                <UserButton afterSignOutUrl="/" />
              </div>
            </>
          )}
          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            className="
              block w-full text-center
              bg-[#9C7B57]
              hover:bg-[#B08A61]
              text-[#F8F1E7]
              py-3 rounded-full
              font-semibold
              transition-all duration-300
              shadow-[0_0_22px_rgba(156,123,87,0.35)]
            "
          >
            Book Table
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
