"use client";

import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);

  const videos = [
    "https://res.cloudinary.com/dnreqxbdw/video/upload/f_auto,q_auto/v1/3_cbp3ji.mp4",
    "https://res.cloudinary.com/dnreqxbdw/video/upload/f_auto,q_auto/v1/2_hla1ym.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const togglePlay = async () => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      <video
        key={currentVideo}
        ref={videoRef}
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex gap-3">
        <button
          onClick={togglePlay}
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white"
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <button
          onClick={toggleMute}
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    </section>
  );
}
