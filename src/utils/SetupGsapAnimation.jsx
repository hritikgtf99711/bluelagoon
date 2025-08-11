import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

export const setupGsapAnimations = (container = document) => {
  // Find all elements with data-gsap attribute within the specified container
  const elements = container.querySelectorAll('[data-gsap]');
  const scrollTriggers = [];

  elements.forEach((element) => {
    const animationType = element.dataset.gsap || 'fade';
    const delay = parseFloat(element.dataset.gsapDelay) || 0;
    const duration = parseFloat(element.dataset.gsapDuration) || 1;
    const start = '200 bottom'; // Trigger at bottom of viewport
    const ease = element.dataset.gsapEase || 'ease.out';

    // Define animation properties
    let animationProps = {};
    switch (animationType) {
      case 'fade':
        animationProps = {
          from: { opacity: 0 },
          to: { opacity: 1, duration, ease, delay },
        };
        break;
      case 'fade-up':
        animationProps = {
          from: { opacity: 0, y: 50 },
          to: { opacity: 1, y: 0, duration, ease, delay },
        };
        break;
      case 'fade-down':
        animationProps = {
          from: { opacity: 0, y: -50 },
          to: { opacity: 1, y: 0, duration, ease, delay },
        };
        break;
      case 'zoom-in':
        animationProps = {
          from: { opacity: 0, scale: 0.8 },
          to: { opacity: 1, scale: 1, duration, ease, delay },
        };
        break;
      case 'slide-right':
        animationProps = {
          from: { opacity: 0, x: -50 },
          to: { opacity: 1, x: 0, duration, ease, delay },
        };
        break;
      case 'clip-polygon':
        animationProps = {
          from: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
          to: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration, ease, delay },
        };
        break;
      default:
        animationProps = {
          from: { opacity: 0 },
          to: { opacity: 1, duration, ease, delay },
        };
    }

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: element,
      start,
      toggleActions: 'play none none none',
      animation: gsap.fromTo(element, animationProps.from, animationProps.to),
    });

    scrollTriggers.push(trigger);
  });

  // Return cleanup function
  return () => {
    scrollTriggers.forEach((trigger) => trigger.kill());
  };
};