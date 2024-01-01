import Reac, { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const ScrollSection = () => {
    return (
        <section className="scroll-section-outer">
            <div>
                <div className="scroll-section-inner">
                    <div>
                        <h1>Section One</h1>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ScrollSection