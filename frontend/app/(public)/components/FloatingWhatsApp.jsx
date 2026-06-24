"use client";

export default function FloatingWhatsApp() {
  const phone = "918159919085"; // your number

  const message = encodeURIComponent(
    "Hi, I would like to book a table at Zero Degree 🍻",
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      className="fixed right-6 z-50 group bottom-20 md:bottom-6"
    >
      <div className="relative">
        {/* glow */}
        <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 group-hover:opacity-70 transition"></div>

        {/* button */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition">
          <span className="text-white text-xl">💬</span>
        </div>
      </div>
    </a>
  );
}
