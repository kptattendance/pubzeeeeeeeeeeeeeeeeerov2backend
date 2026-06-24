export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[#F5EBDD]">Welcome Admin 👋</h1>

      <p className="mt-4 text-[#C7B299] text-lg">
        Manage events, bookings, offers, sports screenings, and gallery updates.
      </p>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-[#1E1714] border border-[#E8D8C3]/10 rounded-3xl p-6">
          <h3 className="text-[#C7B299] text-sm">Total Events</h3>

          <p className="text-4xl font-bold mt-3">12</p>
        </div>

        <div className="bg-[#1E1714] border border-[#E8D8C3]/10 rounded-3xl p-6">
          <h3 className="text-[#C7B299] text-sm">Active Bookings</h3>

          <p className="text-4xl font-bold mt-3">34</p>
        </div>

        <div className="bg-[#1E1714] border border-[#E8D8C3]/10 rounded-3xl p-6">
          <h3 className="text-[#C7B299] text-sm">Sports Screenings</h3>

          <p className="text-4xl font-bold mt-3">5</p>
        </div>
      </div>
    </div>
  );
}
