"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useRevealAnimation(selector: string) {
  useLayoutEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(selector);
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector]);
}
