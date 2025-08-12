import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutCounter() {
  const counterRefs = useRef([]);
  const [triggerEnabled, setTriggerEnabled] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTriggerEnabled(true);
    }, 2000); 
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!triggerEnabled) return;

    const animations = counterRefs.current.map((el) => {
      const targetValue = Number(el.dataset.target || 0);

      return gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: 'power1.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top 80%',
            once: true,
          },
          onUpdate: function () {
            el.innerText = Math.ceil(el.innerText);
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      animations.forEach((anim) => anim.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [triggerEnabled]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] relative mt-[40px]">
      <div className="col-span text-center">
        <h3
          ref={(el) => (counterRefs.current[0] = el)}
          data-target="37"
          className="text-[var(--primary-color)] text-[30px] font-[500]"
        >
          0
        </h3>
        <span className="text-[var(--primary-color)]">Years of Experience</span>
      </div>

      <div className="col-span text-center">
        <h3
          ref={(el) => (counterRefs.current[1] = el)}
          data-target="31"
          className="text-[var(--primary-color)] text-[30px] font-[500]"
        >
          0
        </h3>
        <span className="text-[var(--primary-color)]">Projects Completed in Last 10 Years</span>
      </div>

      <div className="col-span text-center">
        <h3
          ref={(el) => (counterRefs.current[2] = el)}
          data-target="22"
          className="text-[var(--primary-color)] text-[30px] font-[500]"
        >
          0
        </h3>
        <span className="text-[var(--primary-color)]">Active Projects</span>
      </div>
    </div>
  );
}
