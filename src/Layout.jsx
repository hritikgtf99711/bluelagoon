import { useEffect, useRef, useState } from 'react';
import Header from './component/Header';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { Outlet } from 'react-router';
import Footer from './component/Footer';
import FormModal from './utils/FormModal';
import { setupGsapAnimations } from './utils/SetupGsapAnimation';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const smootherRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = setupGsapAnimations(containerRef.current);
    return cleanup;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const wrapper = document.querySelector('#smooth-wrapper');
    const content = document.querySelector('#smooth-content');

    if (wrapper && content && !ScrollSmoother.get()) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapper,
        content: content, 
        smooth: 1,
      effects: false, // Disable effects
  normalizeScroll: true,
      });
    }

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const outletContext = {
    openModal,
    closeModal,
    isOpen,
  };

  return (
    <>
      <Header  openModal={openModal} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div id="main-content" ref={containerRef}>
            
            <Outlet context={outletContext} />
            <Footer  openModal={openModal}/>
          </div>
        </div>
      </div>
      <FormModal setIsOpen={setIsOpen}  isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default Layout;