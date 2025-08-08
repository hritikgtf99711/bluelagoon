import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ZoomOut = ({ children, duration = 1.5, initialScale = 1.5, setHeight }) => {
  const elementRef = useRef(null);
  const location = useLocation(); 
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // GSAP animation
    const animation = gsap.fromTo(
      element,
      { scale: initialScale },
      {
        scale: 1,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "restart pause restart pause",
          scrub: false,
        },
      }
    );

    ScrollTrigger.refresh();

    return () => {
      animation.scrollTrigger?.kill(); // Proper cleanup
    };
  }, [location.pathname]);

  return (
    <div ref={elementRef} style={{ width: "100%", height: setHeight ? setHeight : "100%" }}>
      {children}
    </div>
  );
};

export default ZoomOut;