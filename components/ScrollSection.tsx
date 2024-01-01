import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

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
        duration: 1,
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
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section flex items-center flex-col">
            <h3>
              Are you aware how deeply grateful I am to Allah for bringing
              someone like you into my life? Every day, I witness the beauty of
              your heart reflected in your actions. From the way you lend a
              listening ear to those in need to the unwavering support you offer
              me, your kindness leaves me in awe
            </h3>
            <Image
              src="/images/cat.jpg"
              alt="cat pic"
              width={350}
              height={350}
              className="rounded-xl"
            />
          </div>
          <div className="scroll-section flex items-center flex-col">
            <Image
              src="/images/flower.jpg"
              alt="flower pic"
              width={350}
              height={350}
              className="rounded-xl mt-7"
            />
            <h3>
              Two years. Two years of whispered secrets across time zones,
              virtual movie nights under shared constellations, and hearts that
              beat in perfect harmony despite the distance. We've learned to
              paint bridges with words, build castles with dreams, and find
              comfort in the echo of each other's laughter. May our journey
              stretch like starlight, babe, forever connected by the invisible
              threads of love.
            </h3>
          </div>
          <div className="scroll-section flex items-center flex-col">
            <h3>
              Even across oceans, your birthday sparklers light up my heart.
              This distance can't sever the invisible thread that binds us, my
              love. Each whispered wish echoes across the miles, a testament to
              the unyielding power of our connection. Soon, sweetheart, we'll
              dance under the same sky, celebrating life's milestones with the
              rhythm of our beating hearts.
            </h3>
            <Image
              src="/images/moon.jpg"
              alt="moon pic"
              width={350}
              height={350}
              className="rounded-xl"
            />
          </div>
          <div className="scroll-section flex flex-col gap-3">
            <h3>
              Babe, happy birthday to the girl who makes every sunrise feel like
              a celebration. May this year be the most joy-filled one yet,
              bursting with laughter, adventures, and the fulfillment of every
              single dream you hold dear. I miss you fiercely, but the thought
              of our next reunion keeps my heart dancing. Every sunset spent
              apart is a brushstroke towards the dawn where I can whisper 'Happy
              Birthday, my love' in your ear again. I love you more than words
              can express, and I can't wait to paint our future together with
              vibrant colors of joy. Happy birthday, my moonbeam!
            </h3>

            <div>

            <h4 className="yourLove">Your Love</h4>
            <h4 className="yourLove">~Mubeen</h4>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
