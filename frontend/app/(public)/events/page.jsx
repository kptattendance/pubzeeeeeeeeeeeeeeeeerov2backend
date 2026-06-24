"use client";

import EventsHero from "./EventsHero";
import UpcomingEvents from "./UpcomingEvents";
import WeeklyEvents from "./WeeklyEvents";
import PrivateEvents from "./PrivateEvents";

export default function EventsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <EventsHero />

      <div className="space-y-20 py-1">
        <UpcomingEvents />
        <WeeklyEvents />
        <PrivateEvents />
      </div>
    </main>
  );
}
