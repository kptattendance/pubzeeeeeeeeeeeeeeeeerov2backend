"use client";

import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);

  const videos = [
    "https://res.cloudinary.com/dnreqxbdw/video/upload/f_auto,q_auto,w_1280,c_limit/v1/3_cbp3ji.mp4",
    "https://res.cloudinary.com/dnreqxbdw/video/upload/f_auto,q_auto,w_1280,c_limit/v1/2_hla1ym.mp4",
  ];

  // first frame of each video as a lightweight image shown while the video loads
  const posterOf = (url) =>
    url.replace("/f_auto,q_auto,w_1280,c_limit/", "/so_0,f_auto,q_auto,w_1280,c_limit/").replace(/.mp4$/, ".jpg");

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
      <h1 className="sr-only">
        Zero Degree Brewery &amp; Kitchen - craft brewery, restaurant and nightlife in Rajarajeshwari Nagar, Bengaluru
      </h1>

      <video
        key={currentVideo}
        ref={videoRef}
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        poster={posterOf(videos[currentVideo])}
        aria-hidden="true"
        onEnded={handleVideoEnd}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex gap-3">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white"
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    </section>
  );
}
