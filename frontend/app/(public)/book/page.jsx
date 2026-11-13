"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { SITE, whatsappLink } from "@/lib/site";

// Indian mobile: optional +91 / 0 prefix, then 10 digits starting 6-9
const cleanPhone = (value) => value.replace(/[^d]/g, "").replace(/^(91|0)(?=d{10}$)/, "");
const isValidPhone = (value) => /^[6-9]d{9}$/.test(cleanPhone(value));

const swalTheme = {
  background: "#241B17",
  color: "#F8F1E7",
  confirmButtonColor: "#9C7B57",
};

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

  const [minDate, setMinDate] = useState("");

  // DEFAULT: today, next 15-minute slot at least 30 min from now
  // (falls back to 7:30 PM when we are closed, 1 AM - 12 PM)
  useEffect(() => {
    const slot = new Date(Date.now() + 30 * 60 * 1000);
    slot.setMinutes(Math.ceil(slot.getMinutes() / 15) * 15, 0, 0);

    let hours24 = slot.getHours();
    let minutes = slot.getMinutes();
    const isOpen = hours24 >= 12 || hours24 < 1;
    if (!isOpen) {
      hours24 = 19;
      minutes = 30;
    }

    // local date (toISOString is UTC and shows yesterday before 5:30 AM IST)
    const today = new Date().toLocaleDateString("en-CA");

    // runs after load on purpose: "today" must come from the visitor's clock, not the server
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinDate(today);
    setForm((prev) => ({
      ...prev,
      date: isOpen ? slot.toLocaleDateString("en-CA") : today,
      hour: String(hours24 % 12 || 12).padStart(2, "0"),
      minute: String(minutes).padStart(2, "0"),
      period: hours24 >= 12 ? "PM" : "AM",
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name.trim().length < 2 || !form.phone || !form.date) {
      Swal.fire({
        icon: "warning",
        title: "Missing Details",
        text: "Please enter your name, phone number and date",
        ...swalTheme,
      });

      return;
    }

    if (!isValidPhone(form.phone)) {
      Swal.fire({
        icon: "warning",
        title: "Check Phone Number",
        text: "Please enter a valid 10-digit mobile number",
        ...swalTheme,
      });

      return;
    }

    if (minDate && form.date < minDate) {
      Swal.fire({
        icon: "warning",
        title: "Check Date",
        text: "Please choose today or a future date",
        ...swalTheme,
      });

      return;
    }

    setLoading(true);

    const timeFormatted = `${form.hour}:${form.minute} ${form.period}`;

    const message = `🍻 *Table Booking Request*

Name: ${form.name.trim()}
Phone: +91 ${cleanPhone(form.phone)}
Date: ${form.date}
Time: ${timeFormatted}
Guests: ${form.guests}`;

    const url = whatsappLink(message);

    Swal.fire({
      icon: "success",
      title: "Opening WhatsApp...",
      text: "Just tap Send in WhatsApp to confirm your booking",
      ...swalTheme,
    }).then(() => {
      setLoading(false);
      // same-tab navigation: popup blockers (esp. iPhone Safari) block window.open
      // after an async dialog, but always allow this - and it opens the WhatsApp app
      window.location.href = url;
    });
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
            aria-label="Your name"
            name="name"
            autoComplete="name"
            required
            maxLength={60}
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
            placeholder="Mobile Number (10 digits)"
            aria-label="Mobile number"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={16}
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
            aria-label="Booking date"
            required
            min={minDate || undefined}
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
              aria-label="Hour"
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

                return (
                  <option key={val} value={val}>
                    {val}
                  </option>
                );
              })}
            </select>

            {/* MINUTES */}
            <select
              aria-label="Minutes"
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
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            {/* PERIOD */}
            <select
              aria-label="AM or PM"
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
            aria-label="Number of guests"
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
              <option key={g} value={String(g)}>
                {g} {g === 1 ? "Guest" : "Guests"}
              </option>
            ))}
            <option value="10+ (large group)">10+ Guests (large group)</option>
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
            href={`tel:${SITE.phoneTel}`}
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
