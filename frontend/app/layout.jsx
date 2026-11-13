import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Brewery, Kitchen & Nightlife in Bengaluru`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Zero Degree",
    "brewery Bengaluru",
    "microbrewery Rajarajeshwari Nagar",
    "pub RR Nagar",
    "restaurant Bengaluru",
    "craft beer Bangalore",
    "nightlife Bangalore",
    "rooftop bar Bangalore",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport = {
  themeColor: "#1A1411",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html
        lang="en-IN"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full bg-[#1A1411] text-[#F8F1E7]">{children}</body>
      </html>
    </ClerkProvider>
  );
}
