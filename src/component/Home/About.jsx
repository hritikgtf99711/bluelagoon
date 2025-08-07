import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Headings from '../../utils/Headings';
import { useOutletContext } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { openModal, closeModal, isOpen } = useOutletContext();

  const stickyRef = useRef(null);
  const leftImagesRef = useRef([]);
  const rightImagesRef = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: stickyRef.current,
      pin: true,
      start: `top top+=96px`,
      end: 'bottom bottom',
      pinSpacing: false,
    });

    leftImagesRef.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { 
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
          opacity: 0 
        },
        {
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
          duration: 1,
          delay: index * 0.2,
          ease: 'power2.out'
        }
      );
    });

    rightImagesRef.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { 
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
          opacity: 0 
        },
        {
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
          duration: 1,
          delay: index * 0.2,
          ease: 'power2.out'
        }
      );
    });

    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 30%',
          end: 'top 20%',
          scrub: 1,
        },
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out'
      }
    );

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 min-h-screen">
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-3 flex flex-col gap-4">
           <img
            src="/assets/images/home/about/about_1.jpg"
            className="mx-auto h-[400px]  rounded-br-[10px] rounded-tr-[10px]  w-[100%] object-cover  mt-[400px] max-w-full"
            alt="About_1 design"
            ref={(el) => (rightImagesRef.current[0] = el)}
          />
          <img
            src="/assets/images/home/about/about_1.jpg"
            className="mx-auto h-[400px] w-[100%]  rounded-br-[10px] rounded-tr-[10px] object-cover mt-[450px] max-w-full"
            alt="About_1 design"
            ref={(el) => (rightImagesRef.current[1] = el)}
          />
        </div>

        <div className="col-span-6 text-center" ref={stickyRef}>
          <div className="mb-12" ref={contentRef}>
            <img
              src="/assets/icons/icon_design.svg"
              className="mx-auto"
              alt="icon design"
            />
            <span className="uppercase text-[var(--primary-color)] mb-4 mt-8 font-medium block">
              Welcome to Blue Lagoon
            </span>
            <Headings
              headings={
                <span>
                  Where luxury meets
                  <span className="lg:block">the ocean breeze</span>
                </span>
              }
            />
            <div className="lg:px-24 content_sec mt-[60px]">
              <p className="font-manrope leading-loose font-light">
                Welcome to Blue Lagoon by VCL Constructions — a place where the
                serene beauty of the ocean meets the comforts of modern living.
                Inspired by the endless horizon and the purity of nature, Blue
                Lagoon offers a collection of thoughtfully designed residences and
                dynamic commercial spaces, each curated to bring you closer to the
                peaceful essence of the sea.
              </p>
              <p className="font-manrope leading-loose font-light mt-6">
                Every residence at Blue Lagoon provides an uninterrupted view of the
                ocean, allowing you to immerse yourself in tranquility and natural
                beauty with every glance. The design integrates nature seamlessly,
                with open spaces that promote a sense of freedom and serenity.
              </p>
            </div>
            <div className="text-center mt-12">
              <a
                href="javascript:void(0)"
                onClick={openModal}
                className="uppercase font-[500] bg-[var(--primary-color)] text-white py-3.5 px-11"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-4">
         
          <img
            src="/assets/images/home/about/about_2.jpg"
            className="mx-auto h-[400px] w-[100%] rounded-bl-[10px] rounded-tl-[10px] object-cover max-w-full"
            alt="About_2 design"
            ref={(el) => (leftImagesRef.current[0] = el)}
          />
          <img
            src="/assets/images/home/about/about_2.jpg"
            className="mx-auto h-[400px] object-cover rounded-bl-[10px]  rounded-tl-[10px] w-[100%] max-w-full mt-[300px]"
            alt="About_2 design"
            ref={(el) => (leftImagesRef.current[1] = el)}
          />
        </div>
      </div>
    </section>
  );
}