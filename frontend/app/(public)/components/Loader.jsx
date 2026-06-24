"use client";

import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div
      className="
        min-h-screen
        flex items-center
        justify-center
        bg-[#140F0D]
      "
    >
      <div className="text-center">
        {/* SPINNER */}
        <div
          className="
            w-20 h-20
            rounded-full

            border-4
            border-[#9C7B57]/20
            border-t-[#9C7B57]

            animate-spin

            mx-auto
          "
        />

        {/* TEXT */}
        <p
          className="
            mt-6
            text-[#C7B299]
            tracking-widest
            uppercase
            text-sm
          "
        >
          Loading Admin Panel...
        </p>
      </div>
    </div>
  );
}
