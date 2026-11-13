import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-[#1A1411] via-[#241B17] to-[#1A1411] text-center">
      <div className="max-w-md">
        <p className="text-sm tracking-[0.3em] uppercase text-[#BCA894] mb-4">
          Error 404
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F5EBDD] mb-5">
          This page took a wrong turn
        </h1>
        <p className="text-[#D9C7B2] leading-7 mb-10">
          The page you are looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back to the good stuff.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-7 py-3 rounded-full bg-[#9C7B57] hover:bg-[#B08A61] text-[#F8F1E7] font-semibold transition"
          >
            Go to Home
          </Link>
          <Link
            href="/menu"
            className="px-7 py-3 rounded-full border border-[#E8D8C3]/15 bg-[#241B17] hover:bg-[#32251E] text-[#F8F1E7] font-semibold transition"
          >
            View Menu
          </Link>
        </div>
      </div>
    </main>
  );
}
