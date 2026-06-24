"use client";

import GalleryHero from "./GalleryHero";
import GalleryGrid from "./GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <GalleryHero />

      <div className="py-16">
        <GalleryGrid />
      </div>
    </main>
  );
}
