import React from "react";
import Headings from "../../utils/Headings";
export default function AboutContent() {
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
          
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] relative mt-[40px]">
        <div  data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
            <h3 className="text-[var(--primary-color)] text-[30px] font-[500]">37+</h3>
            <span className="text-[var(--primary-color)]">Years of <span className="block"></span> Experience</span>
        </div>
         <div  data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
            <h3 className="text-[var(--primary-color)] text-[30px] font-[500]">31+</h3>
            <span className="text-[var(--primary-color)]">Projects Completed in <span className="block"></span>Last 10 Years</span>
        </div>
         <div  data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
            <h3 className="text-[var(--primary-color)] text-[30px] font-[500]">22+</h3>
            <span className="text-[var(--primary-color)]">Active <span className="block"></span>Projects</span>
        </div>
      </div>
      
         <div className="grid  grid-cols-1 lg:grid-cols-3 gap-[30px] mt-[50px] relative">
        <div  data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
      <button class="lg:text-[14px] text-[14px] mx-[auto] bg-[var(--primary-color)] text-[14px]  book_btn cursor-pointer tracking-[2px] text-white uppercase lg:px-8 lg:py-3 px-[35px] py-[15px]">Brochure</button>
      </div>
       <div   data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
      <button class="lg:text-[14px] text-[14px] mx-[auto] bg-[var(--primary-color)] text-[14px]  book_btn cursor-pointer tracking-[2px] text-white uppercase lg:px-8 lg:py-3 px-[35px] py-[15px]">Floor plans</button>
      </div>
       <div   data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
      <button class="lg:text-[14px] text-[14px] mx-[auto] bg-[var(--primary-color)] text-[14px]  book_btn cursor-pointer tracking-[2px] text-white uppercase lg:px-8 lg:py-3 px-[35px] py-[15px]">Cost sheet</button>
      </div>
       <div   data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
      <button class="lg:text-[14px] text-[14px] mx-[auto] bg-[var(--primary-color)] text-[14px]  book_btn cursor-pointer tracking-[2px] text-white uppercase lg:px-8 lg:py-3 px-[35px] py-[15px]">Payment Schedule</button>
      </div>
       <div   data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
      <button class="lg:text-[14px] text-[14px] mx-[auto] bg-[var(--primary-color)] text-[14px]  book_btn cursor-pointer tracking-[2px] text-white uppercase lg:px-8 lg:py-3 px-[35px] py-[15px]">Finishing Schedule</button>
      </div>
   <div   data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" className="col-span text-center">
    <button class="lg:text-[14px] text-[14px] mx-[auto] bg-[var(--primary-color)] text-[14px]  book_btn cursor-pointer tracking-[2px] text-white uppercase lg:px-8 lg:py-3 px-[35px] py-[15px]">Application form</button>
      </div>
      </div>
        </div>
</div>
      </div>
      </div>
   
      <figure className="mt-[50px]"  data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">
        <img
          src="/assets/images/about/map.jpg"
          className="object-cover w-[100vw]"
          alt="map"
        />
      </figure>
      
   
    </>
  );
}