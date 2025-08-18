import React, { useState, useEffect, useRef } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import FormModal from "./utils/FormModal";
import { Outlet, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { setupGsapAnimations } from "./utils/SetupGsapAnimation";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const pdfMap = {
  brochure: "/assets/pdf/Blue-Lagoon-Brochure.pdf",
  floorplans: "/assets/pdf/Blue-Lagoon-Floor-Plans.pdf",
  costsheet: "/assets/pdf/Tower-2-Cost-Sheet.pdf",
  paymentschedule: "/assets/pdf/Payment-Schedule.pdf",
  finishingschedule: "/assets/pdf/Finishing-Schedule.pdf",
  applicationform: "/assets/pdf/Application-Form.pdf",
};

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const smootherRef = useRef(null);
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const cleanup = setupGsapAnimations(containerRef.current);
    return cleanup;
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");

    if (wrapper && content && !ScrollSmoother.get()) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapper,
        content: content,
        smooth: 1,
        effects: false,
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

  const openModal = (pdfKey) => {
    setSelectedPdf(pdfMap[pdfKey]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPdf(null);
  };

  const outletContext = {
    openModal,
    closeModal,
    isOpen,
    selectedPdf,
  };

  return (
    <>
      <Header openModal={openModal} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div id="main-content" ref={containerRef}>
            <Outlet context={outletContext} />
            <Footer openModal={openModal} />
          </div>
        </div>
      </div>
      <FormModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        selectedPdf={selectedPdf}
      />
    </>
  );
}

export default Layout;
