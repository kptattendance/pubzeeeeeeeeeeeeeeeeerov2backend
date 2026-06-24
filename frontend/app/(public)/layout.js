import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyBooking from "./components/StickyBooking";

import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Zero Degree Brewery & Kitchen",
    template: "%s | Zero Degree",
  },
  description:
    "Experience craft brews, global cuisine, live events, and unforgettable nightlife at Zero Degree Brewery & Kitchen, Bangalore.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <Navbar />

          {children}

          <FloatingWhatsApp />
          <StickyBooking />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
