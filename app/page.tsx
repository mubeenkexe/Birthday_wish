"use client";

import Messages from "@/components/Messages";
import ScrollSection from "@/components/ScrollSection";
import { useEffect } from "react";
import { Howl } from 'howler';

export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )();

    // Initialize Howler for background music
    const sound = new Howl({
      src: ['/music.mp3'], // Correct path for Next.js public directory
      autoplay: true,
      loop: true,
      volume: 0.8, // Adjust volume as needed
    });

    return () => {
      sound.stop(); // Stop the sound on component unmount
    };
  }, []);

  return (
    <>
      <Messages />
      <ScrollSection />
    </>
  );
}
