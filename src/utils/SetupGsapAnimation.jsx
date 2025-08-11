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
    const start = '200 bottom'; 
    const ease = element.dataset.gsapEase || 'ease.out';

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




// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export const setupGsapAnimations = (container = document) => {
//   const scrollTriggers = [];

//   // Set a 2-second delay for triggering animations after page load
//   const timeoutId = setTimeout(() => {
//     // Find all elements with data-gsap attribute within the specified container
//     const elements = container.querySelectorAll('[data-gsap]');
    
//     elements.forEach((element) => {
//       const animationType = element.dataset.gsap || 'fade';
//       const delay = parseFloat(element.dataset.gsapDelay) || 0;
//       const duration = parseFloat(element.dataset.gsapDuration) || 1;
//       const start = '200 bottom'; // Trigger when element is 200px from the bottom of viewport
//       const ease = element.dataset.gsapEase || 'power2.out';

//       // Define animation properties
//       let animationProps = {};
//       switch (animationType) {
//         case 'fade':
//           animationProps = {
//             from: { opacity: 0 },
//             to: { opacity: 1, duration, ease, delay: 0 }, // Set delay to 0 here
//           };
//           break;
//         case 'fade-up':
//           animationProps = {
//             from: { opacity: 0, y: 50 },
//             to: { opacity: 1, y: 0, duration, ease, delay: 0 }, // Delay is zero to avoid initial visual delay
//           };
//           break;
//         case 'fade-down':
//           animationProps = {
//             from: { opacity: 0, y: -50 },
//             to: { opacity: 1, y: 0, duration, ease, delay: 0 },
//           };
//           break;
//         case 'zoom-in':
//           animationProps = {
//             from: { opacity: 0, scale: 0.8 },
//             to: { opacity: 1, scale: 1, duration, ease, delay: 0 },
//           };
//           break;
//         case 'slide-right':
//           animationProps = {
//             from: { opacity: 0, x: -50 },
//             to: { opacity: 1, x: 0, duration, ease, delay: 0 },
//           };
//           break;
//         case 'clip-polygon':
//           animationProps = {
//             from: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
//             to: {
//               clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//               duration,
//               ease,
//               delay: 0, // Same here, delay zero for faster effect
//             },
//           };
//           break;
//         default:
//           animationProps = {
//             from: { opacity: 0 },
//             to: { opacity: 1, duration, ease, delay: 0 },
//           };
//       }

//       // Create ScrollTrigger
//       const trigger = ScrollTrigger.create({
//         trigger: element,
//         start,
//         toggleActions: 'play none none none',
//         animation: gsap.fromTo(element, animationProps.from, animationProps.to),
//       });

//       scrollTriggers.push(trigger);
//     });

//     // Refresh ScrollTrigger positions (in case there are any initial page layout changes)
//     ScrollTrigger.refresh();
//   }, 2000); // ⏱️ Delay for 2 seconds

//   // Cleanup function to kill triggers and prevent memory leaks
//   return () => {
//     clearTimeout(timeoutId); // Clear the timeout in case of component unmount
//     scrollTriggers.forEach((trigger) => trigger.kill()); // Kill all the scroll triggers
//   };
// };
// // 