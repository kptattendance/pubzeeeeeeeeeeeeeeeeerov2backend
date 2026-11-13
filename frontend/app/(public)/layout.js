import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyBooking from "./components/StickyBooking";
import { SITE } from "@/lib/site";

// Structured data so Google can show address, phone, hours & map in search
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "BarOrPub", "Brewery"],
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/opengraph-image.jpg`,
  logo: `${SITE.url}/icon.png`,
  telephone: SITE.phoneTel,
  email: SITE.email,
  servesCuisine: ["Continental", "Indian", "Pizza", "Bar Food"],
  priceRange: "₹₹₹",
  acceptsReservations: true,
  hasMap: SITE.mapsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.pincode,
    addressCountry: SITE.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: SITE.opens,
      closes: SITE.closes,
    },
  ],
};

// <html>, <body> and <ClerkProvider> live in the root app/layout.jsx only
export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-[#9C7B57] focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <div id="main-content" className="flex-1">
        {children}
      </div>

      <FloatingWhatsApp />
      <StickyBooking />
      <Footer />
    </div>
  );
}
