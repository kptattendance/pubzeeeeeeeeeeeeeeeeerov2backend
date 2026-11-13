"use client";

import Link from "next/link";

export default function Error({ reset }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-[#1A1411] via-[#241B17] to-[#1A1411] text-center">
      <div className="max-w-md">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F5EBDD] mb-5">
          Something went wrong
        </h1>
        <p className="text-[#D9C7B2] leading-7 mb-10">
          Sorry about that. Please try again, or call us on{" "}
          <a href="tel:+919986466266" className="underline hover:text-white">
            +91 99864 66266
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="px-7 py-3 rounded-full bg-[#9C7B57] hover:bg-[#B08A61] text-[#F8F1E7] font-semibold transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-7 py-3 rounded-full border border-[#E8D8C3]/15 bg-[#241B17] hover:bg-[#32251E] text-[#F8F1E7] font-semibold transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
