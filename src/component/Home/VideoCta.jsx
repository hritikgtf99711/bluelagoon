import React from "react";
import { useOutletContext } from "react-router-dom";
export default function VideoCta() {
  const { openModal, closeModal, isOpen } = useOutletContext();

  return (
    <section className=" relative ">
      <video
        src="assets/video/cta_video.mp4"
        className="w-[100%] h-[100%] absolute top-0 object-cover"
       playsInline  webkit-playsInline  muted autoPlay loop
      >
        Your browser does not support the video tag.
      </video>
      <div className=" mx-[auto]  bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)] py-[120px] h-[100%] w-[100%] text-white relative text-center ">
        <div className="m-[auto]">
          <h2
            className="lg:text-[65px] !text-[40px] font-[600]"
            data-gsap="clip-polygon"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          >
            Get In Touch
          </h2>
          <p
            className="font-manrope  my-[20px] lg:my-[25px] capitalize tracking-[1px]  lg:px-0 px-[30px] mb-[40px] leading-[1.8]"
            data-gsap="clip-polygon"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          >
            Your perfect beachside escape is just a message away{" "}
            <span className="lg:block"></span>– our dedicated team is standing
            by to craft your <span className="lg:block"></span>
            personalized coastal experience.
          </p>

          <a
            href="javascript:void(0)"
            onClick={openModal}
            className="bg-[white] lg:text-[16px] text-[14px] text-[#000] uppercase font-[600] inline-block  font-[500] px-[40px] py-[12px]"
            data-gsap="clip-polygon"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
