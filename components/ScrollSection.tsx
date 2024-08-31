import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import DancingCat from '../public/images/0y8JYpJebaDz0Fi1WC (1).webp'

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 4,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section flex items-center flex-col">
            <h3>
              Wish you a many many happy returns of the day, thanks for coming in my life and giving me happiness, tum hi ho jisne mujhe hamesha khushi di thanks for that, you have no idea how much you change me, humne aaj Tak jitni bhi memories banayi hai sath me woh sab lifetime Tak yaad rakhegi mujhe, tum mere liye bahut special aur important ho aur hamesha rahoge
            </h3>
            <Image
              src="/images/cat.jpg"
              alt="cat pic"
              width={350}
              height={350}
              className="rounded-xl md:hidden"
            />
          </div>
          <div className="scroll-section flex items-center flex-col">
            <Image
              src="/images/flower.jpg"
              alt="flower pic"
              width={350}
              height={350}
              className="rounded-xl md:hidden"
            />
            <h3>
              One more time i wish you a happy birthday, be happy in your life and stay healthy..!!
            </h3>
          </div>
          <div className="scroll-section flex flex-col gap-3 justify-center items-center">
            <h4 className="yourLove text-4xl md:text-6xl lg:text-8xl">MOTI 🐱✨</h4>
          </div>
          <div className="scroll-section flex items-center flex-col">
            <h3 className="text-2xl font-bold text-white">
              Always remember, my dear friend, you are a treasure in my life. Here’s to many more moments of joy and brilliance together!
            </h3>
            <Image
              src={DancingCat}
              alt="dancing cat"
              width={350}
              height={350}
              className="rounded-xl" // Added class for proper styling
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
