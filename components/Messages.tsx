"use client";

import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Messages = () => {
    useEffect(() => {
        gsap.to(".message_heading", {
            opacity: 3,
            duration: 4,
            scrollTrigger: {
                trigger: ".message",
                start: "top 30%",
                end: "bottom",
                scrub: true,
            },
        });
        gsap.to(".message_heading_two", {
            opacity: 3,
            duration: 4,
            scrollTrigger: {
                trigger: ".message_two",
                start: "top 30%",
                end: "bottom",
                scrub: true,
            },
        });
        gsap.to(".message_heading_three", {
            opacity: 3,
            duration: 4,
            scrollTrigger: {
                trigger: ".message_three",
                start: "top 30%",
                end: "bottom",
                scrub: true,
            },
        });
    }, []);

    return (
        <>
            <div className="h-screen bg-black flex justify-center items-center panel flex-col">
                <h2 className="text-center text-white">Swipe down to see more</h2>
                <p className="text-white">(slowly)</p>
            </div>

            <section className="message panel">
                <h1 className="message_heading mainMessage">To My</h1>
            </section>
            <section className="message_two panel">
                <h1 className="message_heading_two mainMessage">Beautiful</h1>
            </section>
            <section className="message_three panel">
                <h1 className="message_heading_three mainMessage">Babe &lt;3</h1>
            </section>
        </>
    );
};

export default Messages;
