import React from "react";
import Headings from "../../utils/Headings";

export default function FounderSec() {
  return (
    <section className="fount_sec py-[80px]">
      <div className="container">
        <div className="heading_container text-center mb-[20px]">
          <img
            src="assets/icons/icon_design.svg"
            className="m-auto"
            alt="icon design"
            data-gsap="fade-down"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          />
          <span
            className="uppercase text-[var(--primary-color)] mb-[15px] mt-[30px] font-[500] block"
            data-gsap="fade-down"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          >
            Our Leadership Team
          </span>
          <Headings
            headings={
              <span>
                LEADING WITH VISION<span className="lg:block"></span>AND
                EXPERTISE
              </span>
            }
          />
        </div>
        <div className="w-[60%] grid gap-[30px] lg:gap-[100px] m-[auto] mt-[60px] grid-cols-1 lg:grid-cols-12">
            <div className="col-span-4 text-center">
                <img src="assets/images/founder/founder_1.png" className="mb-[20px]" alt="founder"/>
                <h3 className="text-[var(--primary-color)] text-[18px] lg:text-[20px] font-[500]">MR. VARINDER GARG</h3>
                <small className="text-[var(--primary-color)]">Chairman</small>
            </div>
              <div className="col-span-4 text-center">
                 <img src="assets/images/founder/founder_2.png" className="mb-[20px]" alt="founder"/>
                  <h3 className="text-[var(--primary-color)] text-[18px] lg:text-[20px] font-[500]">MR. VIVEK GARG</h3>
                  <small className="text-[var(--primary-color)]">Managing Director & CEO</small>
            </div>
        </div>
      </div>
    </section>
  );
}
