"use client";

import { useEffect } from "react";

import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";

import { useUser } from "@clerk/nextjs";

import Loader from "./../(public)/components/Loader";

import {
  LayoutDashboard,
  CalendarDays,
  TicketPercent,
  Trophy,
  BookOpen,
  ImageIcon,
} from "lucide-react";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Events",
    href: "/admin/events",
    icon: CalendarDays,
  },
  {
    name: "Offers",
    href: "/admin/offers",
    icon: TicketPercent,
  },
  {
    name: "Sports",
    href: "/admin/sports",
    icon: Trophy,
  },
  {
    name: "Bookings",
    href: "/admin/bookings",
    icon: BookOpen,
  },
  {
    name: "Gallery",
    href: "/admin/gallery",
    icon: ImageIcon,
  },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const router = useRouter();

  const { isLoaded, isSignedIn, user } = useUser();

  // ==========================================
  // AUTH CHECK
  // ==========================================
  useEffect(() => {
    if (!isLoaded) return;

    // NOT LOGGED IN
    if (!isSignedIn) {
      router.push("/sign-in");

      return;
    }

    // NOT ADMIN
    if (user?.publicMetadata?.role !== "admin") {
      router.push("/unauthorized");
    }
  }, [isLoaded, isSignedIn, user, router]);

  // ==========================================
  // LOADING
  // ==========================================
  if (!isLoaded) {
    return <Loader />;
  }

  // ==========================================
  // BLOCK NON-ADMIN
  // ==========================================
  if (user?.publicMetadata?.role !== "admin") {
    return null;
  }

  return (
    <div
      className="
        min-h-screen
        bg-[#140F0D]
        text-white
        flex
      "
    >
      {/* SIDEBAR */}
      <aside
        className="
          w-72 hidden md:flex
          flex-col
          border-r border-[#E8D8C3]/10
          bg-[#1A1411]
          p-6
        "
      >
        {/* LOGO */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold">
            <span className="text-[#F5EBDD]">Zero</span>{" "}
            <span className="text-white">Degree</span>
          </h1>

          <p
            className="
              text-[#A68B6B]
              text-sm mt-2
            "
          >
            Admin Dashboard
          </p>
        </div>

        {/* MENU */}
        <div className="space-y-3">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;

            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                    flex items-center gap-4
                    px-5 py-4 rounded-2xl
                    transition-all duration-300
                    border

                    ${
                      isActive
                        ? `
                          bg-[#9C7B57]
                          border-[#9C7B57]
                          text-white
                          shadow-[0_0_30px_rgba(156,123,87,0.25)]
                        `
                        : `
                          border-[#E8D8C3]/5
                          hover:border-[#E8D8C3]/15
                          hover:bg-[#241B17]
                        `
                    }
                  `}
              >
                <Icon size={20} />

                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1">
        {/* TOPBAR */}
        <div
          className="
            h-20
            border-b border-[#E8D8C3]/10
            bg-[#1A1411]/80
            backdrop-blur-xl

            px-8

            flex items-center
            justify-between
          "
        >
          <div>
            <h2
              className="
                text-2xl font-bold
              "
            >
              Admin Panel
            </h2>
          </div>

          <Link href="/">
            <div
              className="
                text-sm text-[#C7B299]
                cursor-pointer

                hover:text-[#E8D8C3]

                transition
              "
            >
              Back to Home
            </div>
          </Link>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
