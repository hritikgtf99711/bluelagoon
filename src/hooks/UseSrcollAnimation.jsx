import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (ref, animationType = "xy") => {
  useEffect(() => {
    if (!ref.current) return;

    const animationProps =
      animationType === "zoom"
        ? {
            from: { opacity: 0, scale: 0.8 },
            to: { opacity: 1, scale: 1 }, 
          }
        : {
            from: { opacity: 0, y: 50 }, 
            to: { opacity: 1, y: 0 }, 
          };

    gsap.fromTo(
      ref.current,
      animationProps.from,
      {
        ...animationProps.to,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [ref, animationType]);
};

export default useScrollAnimation;