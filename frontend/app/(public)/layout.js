import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyBooking from "./components/StickyBooking";

export const metadata = {
  title: {
    default: "Zero Degree Brewery & Kitchen",
    template: "%s | Zero Degree",
  },
  description:
    "Experience craft brews, global cuisine, live events, and unforgettable nightlife at Zero Degree Brewery & Kitchen, Bangalore.",
};

// <html>, <body> and <ClerkProvider> live in the root app/layout.jsx only
export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {children}

      <FloatingWhatsApp />
      <StickyBooking />
      <Footer />
    </div>
  );
}
