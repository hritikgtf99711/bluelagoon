import React from "react";
import Headings from "../../utils/Headings";
export default function AboutContent() {
  return (
    <>
      <div className=" py-[80px] relative flex flex-col justify-center items-center h-[100%]">
        <img
          className="absolute inset-0 h-full w-full bg-[url(/assets/images/about/overlay_map.svg)] bg-cover bg-center"
          style={{ opacity: 0.15 }} // Adjust opacity here (0.5 = 50%)
        />
        <figure className="mb-[30px] flex justify-center">
          <img src="/assets/images/about/globe.png" alt="img" />
        </figure>{" "}
        <div className="w-[60%] ">
          {" "}
          <Headings
            classNames="!text-[36px]"
            headings={
              "A PROJECT BY VARENDERA CONSTRUCTIONS INTERNATIONAL LIMITED"
            }
          />
          <p className="text-[14px] font-[300] leading-[25px] tracking-[1px] font-manrope text-center my-[25px] text-normal lowercase">
            We are a leading integrated Engineering, Procurement, and
            Construction (EPC) company with vast experience in delivering
            diverse building projects. Our portfolio includes residential
            complexes, commercial malls, office spaces, railway stations,
            hospitals, high courts, and libraries. Additionally, we undertake
            major infrastructure projects such as metro depots, aircraft
            hangars, and roads, demonstrating our wide-ranging capabilities
            across various sectors.
          </p>
          <p className="text-[14px] font-[300] leading-[25px] tracking-[1px] font-manrope text-center my-[25px] text-normal lowercase">
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
        </div>
      </div>
      <figure className="mt-[50px]">
        <img
          src="/assets/images/about/map.jpg"
          className="object-cover w-[100vw] h-[100vh]"
          alt="map"
        />
      </figure>
    </>
  );
}