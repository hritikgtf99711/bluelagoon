import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutCounter() {
  const counterRefs = useRef([]);

  useEffect(() => {
    counterRefs.current.forEach((el, index) => {
      const targetValue = parseInt(el.textContent); // Get the target number
      gsap.fromTo(
        el,
        { textContent: 0 },
        {
          textContent: targetValue,
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: 1 }, // Snap to whole numbers
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top 80%', // Start when the element is 80% from the top of the viewport
            toggleActions: 'play none none none', // Play animation only once
          },
          onUpdate: function () {
            el.textContent = Math.ceil(this.targets()[0].textContent); // Update text content
          },
        }
      );
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] relative mt-[40px]">
      <div data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
        <h3
          ref={(el) => (counterRefs.current[0] = el)}
          className="text-[var(--primary-color)] text-[30px] font-[500]"
        >
          37
        </h3>
        <span className="text-[var(--primary-color)]">
          Years of <span className="block"></span> Experience
        </span>
      </div>
      <div data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
        <h3
          ref={(el) => (counterRefs.current[1] = el)}
          className="text-[var(--primary-color)] text-[30px] font-[500]"
        >
          31
        </h3>
        <span className="text-[var(--primary-color)]">
          Projects Completed in <span className="block"></span> Last 10 Years
        </span>
      </div>
      <div data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
        <h3
          ref={(el) => (counterRefs.current[2] = el)}
          className="text-[var(--primary-color)] text-[30px] font-[500]"
        >
          22
        </h3>
        <span className="text-[var(--primary-color)]">
          Active <span className="block"></span> Projects
        </span>
      </div>
    </div>
  );
}