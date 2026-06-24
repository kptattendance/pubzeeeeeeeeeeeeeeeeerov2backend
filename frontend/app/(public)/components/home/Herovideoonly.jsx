"use client";

import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = async () => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = async () => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    video.muted = !video.muted;

    try {
      await video.play();
    } catch (err) {
      console.log(err);
    }

    setIsMuted(video.muted);
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      {" "}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        className="absolute inset-0 h-full w-full object-cover"
      >
        {" "}
        <source
          src="https://res.cloudinary.com/dnreqxbdw/video/upload/f_auto,q_auto/v1/3_cbp3ji.mp4"
          type="video/mp4"
        />{" "}
      </video>
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex gap-3">
        <button
          onClick={togglePlay}
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white shadow-lg hover:bg-black/70 transition"
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <button
          onClick={toggleMute}
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white shadow-lg hover:bg-black/70 transition"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    </section>
  );
}
