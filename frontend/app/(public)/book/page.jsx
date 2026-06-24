"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    hour: "",
    minute: "",
    period: "PM",
    guests: "2",
  });

  const [loading, setLoading] = useState(false);

  // SET CURRENT DATE & TIME
  useEffect(() => {
    const now = new Date();

    const today = now.toISOString().split("T")[0];

    let hour = now.getHours();
    const minute = now.getMinutes();

    const period = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    setForm((prev) => ({
      ...prev,
      date: today,
      hour: String(hour).padStart(2, "0"),
      minute: String(minute).padStart(2, "0"),
      period,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.date) {
      Swal.fire({
        icon: "warning",
        title: "Missing Details",
        text: "Please fill all fields",
        background: "#241B17",
        color: "#F8F1E7",
        confirmButtonColor: "#9C7B57",
      });

      return;
    }

    setLoading(true);

    const timeFormatted = `${form.hour}:${form.minute} ${form.period}`;

    const message = `🍻 *Table Booking Request*

Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Time: ${timeFormatted}
Guests: ${form.guests}`;

    const url = `https://wa.me/9591228330?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Redirecting to WhatsApp...",
        text: "Click send to confirm your booking",
        background: "#241B17",
        color: "#F8F1E7",
        confirmButtonColor: "#9C7B57",
      }).then(() => {
        window.open(url, "_blank");
      });
    }, 800);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1A1411] via-[#241B17] to-[#1A1411] flex items-center justify-center px-6 py-32">
      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#9C7B57]/15 blur-[150px]" />

        <div className="absolute bottom-20 right-1/4 w-[350px] h-[350px] bg-[#B08A61]/10 blur-[150px]" />
      </div>

      {/* BOOKING CARD */}
      <form
        onSubmit={handleSubmit}
        className="
          relative z-10
          w-full max-w-lg
          rounded-[36px]
          border border-[#E8D8C3]/10
          bg-gradient-to-b
          from-[#32251E]
          via-[#241B17]
          to-[#1A1411]
          p-8 md:p-10
          backdrop-blur-2xl
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        "
      >
        {/* GLOW */}
        <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(156,123,87,0.15),transparent_60%)] pointer-events-none" />

        {/* TITLE */}
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Book a{" "}
            <span
              className="text-[#F5EBDD]"
              style={{
                textShadow: `
                  0 0 10px rgba(245,235,221,0.45),
                  0 0 24px rgba(232,216,195,0.25)
                `,
              }}
            >
              Table
            </span>
          </h2>

          <p className="text-[#D9C7B2] leading-7">
            Reserve your space for an unforgettable evening of craft brews,
            curated cuisine, and elevated nightlife experiences.
          </p>
        </div>

        {/* INPUTS */}
        <div className="relative z-10 space-y-5">
          {/* NAME */}
          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="
              w-full p-4 rounded-2xl
              bg-[#2B211B]/70
              border border-[#E8D8C3]/10
              text-[#F8F1E7]
              placeholder:text-[#BCA894]
              focus:border-[#C8AE8D]/40
              focus:outline-none
              transition-all duration-300
            "
          />

          {/* PHONE */}
          <input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="
              w-full p-4 rounded-2xl
              bg-[#2B211B]/70
              border border-[#E8D8C3]/10
              text-[#F8F1E7]
              placeholder:text-[#BCA894]
              focus:border-[#C8AE8D]/40
              focus:outline-none
              transition-all duration-300
            "
          />

          {/* DATE */}
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="
              w-full p-4 rounded-2xl
              bg-[#2B211B]/70
              border border-[#E8D8C3]/10
              text-[#F8F1E7]
              focus:border-[#C8AE8D]/40
              focus:outline-none
              transition-all duration-300
            "
          />

          {/* TIME */}
          <div className="flex gap-3">
            {/* HOUR */}
            <select
              value={form.hour}
              onChange={(e) => setForm({ ...form, hour: e.target.value })}
              className="
                w-1/3 p-4 rounded-2xl
                bg-[#2B211B]/70
                border border-[#E8D8C3]/10
                text-[#F8F1E7]
                focus:border-[#C8AE8D]/40
                focus:outline-none
              "
            >
              {[...Array(12)].map((_, i) => {
                const val = String(i + 1).padStart(2, "0");

                return <option key={val}>{val}</option>;
              })}
            </select>

            {/* MINUTES */}
            <select
              value={form.minute}
              onChange={(e) => setForm({ ...form, minute: e.target.value })}
              className="
                w-1/3 p-4 rounded-2xl
                bg-[#2B211B]/70
                border border-[#E8D8C3]/10
                text-[#F8F1E7]
                focus:border-[#C8AE8D]/40
                focus:outline-none
              "
            >
              {["00", "15", "30", "45"].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>

            {/* PERIOD */}
            <select
              value={form.period}
              onChange={(e) => setForm({ ...form, period: e.target.value })}
              className="
                w-1/3 p-4 rounded-2xl
                bg-[#2B211B]/70
                border border-[#E8D8C3]/10
                text-[#F8F1E7]
                focus:border-[#C8AE8D]/40
                focus:outline-none
              "
            >
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>

          {/* GUESTS */}
          <select
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="
              w-full p-4 rounded-2xl
              bg-[#2B211B]/70
              border border-[#E8D8C3]/10
              text-[#F8F1E7]
              focus:border-[#C8AE8D]/40
              focus:outline-none
            "
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((g) => (
              <option key={g}>{g} Guests</option>
            ))}
          </select>

          {/* BUTTON */}
          <button
            disabled={loading}
            className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#9C7B57] hover:bg-[#B08A61] text-[#F8F1E7] hover:scale-[1.02] shadow-[0_0_24px_rgba(156,123,87,0.35)]"
            }`}
          >
            {loading ? "Processing..." : "Book via WhatsApp"}
          </button>

          {/* CALL */}
          <a
            href="tel:+918159919085"
            className="
              block text-center text-sm
              text-[#C5B19A]
              hover:text-[#F5EBDD]
              transition duration-300
              mt-4
            "
          >
            Or Call Us Directly
          </a>
        </div>
      </form>
    </main>
  );
}
