import React, { useState } from "react";
import Headings from "../../utils/Headings";
import AboutCounter from "./AboutCounter";
import { useOutletContext } from "react-router-dom";
export default function AboutContent() {
   const { openModal} = useOutletContext();


  return (
    <>
      <div className=" py-[80px] relative flex flex-col justify-center items-center h-[100%]">
        <div className="relative">
        <img
          className="absolute inset-0 h-full w-full bg-[url(/assets/images/about/overlay_map.svg)] bg-cover bg-center"
          style={{ opacity: 0.15 }}
        />
        <div className="container">
        <figure className="mb-[30px] flex justify-center">
          <img src="/assets/images/about/globe.png" alt="img" />
        </figure>{" "}
        <div className="lg:w-[70%]  m-[auto]">
          <Headings
           classNames="lg:!text-[32px] !text-[20px]"
            headings={
              <span>A PROJECT BY <span className="lg:block"></span> VARENDERA CONSTRUCTIONS <span className="lg:block"></span> INTERNATIONAL LIMITED</span>
            }
          />
          <p  data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="text-[14px] font-[300] leading-[25px] tracking-[1px] font-manrope text-center my-[25px] text-normal ">
            We are a leading integrated Engineering, Procurement, and
            Construction (EPC) company with vast experience in delivering
            diverse building projects. Our portfolio includes residential
            complexes, commercial malls, office spaces, railway stations,
            hospitals, high courts, and libraries. Additionally, we undertake
            major infrastructure projects such as metro depots, aircraft
            hangars, and roads, demonstrating our wide-ranging capabilities
            across various sectors.
          </p>
          <p  data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="text-[14px] font-[300] leading-[25px] tracking-[1px] font-manrope text-center my-[25px] text-normal ">
            Founded in 1987 by Mr. Varinder Garg, our company has grown into a
            key player in the construction industry. Under his visionary
            leadership, we have evolved from executing small-scale projects like
            officers' accommodation in Abohar to landmark developments such as
            the Sarojini Nagar residential redevelopment in New Delhi. Over the
            years, we have built strong partnerships with prestigious agencies
            like NBCC, MES, and NHAI, enabling us to consistently deliver
            high-quality projects that meet both client expectations and
            industry standards.
          </p>
          
           <AboutCounter/>
      
         
        </div>
</div>
      </div>
      </div>
   
      <figure className="lg:mt-[50px]"  data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">
        <img
          src="/assets/images/about/map.jpg"
          className="object-cover w-[100vw]"
          alt="map"
        />
      </figure>
      
   
    </>
  );
}