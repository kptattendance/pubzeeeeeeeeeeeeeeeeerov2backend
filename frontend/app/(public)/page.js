import CTASection from "../(public)/components/home/CTASection";
import FeaturedMenu from "../(public)/components/home/FeaturedMenu";
import GalleryPreview from "../(public)/components/home/GalleryPreview";
import Hero from "../(public)/components/home/Hero";
import SignatureStrip from "../(public)/components/home/SignatureStrip";
import HeroVideo from "./components/home/Herovideoonly";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroVideo />
      <SignatureStrip />
      <FeaturedMenu />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
