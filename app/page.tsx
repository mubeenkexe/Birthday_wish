"use client";

import Messages from "@/components/Messages";
import ScrollSection from "@/components/ScrollSection";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <>
      <Messages />
      <ScrollSection />
    </>
  );
}
