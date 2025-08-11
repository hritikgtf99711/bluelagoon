import React from 'react';
import Headings from '../../utils/Headings';
import ArtisticImpression from '../../utils/ArtisticImpression';

export default function Essential_Features() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary-color)] py-[80px]">
      <img
        src="assets/icons/layered_blob.svg"
        className="absolute bottom-[-80px] left-0 w-full"
        alt="layered blob"
      />
      <div className="heading_container mb-[20px] text-center">
        <img
          src="assets/icons/icon_design_secondary.svg"
          className="m-auto"
          alt="icon design"
          data-gsap="fade-up"
          data-gsap-duration="1"
          data-gsap-delay="0.6"
        />
        <span
          className="mt-[30px] mb-[15px] block font-medium uppercase text-[var(--secondary-color)]"
          data-gsap="fade-up"
          data-gsap-duration="1"
          data-gsap-delay="0.6"
        >
          ESSENTIAL FEATURES
        </span>
        <Headings
          classNames="text-[var(--secondary-color)]"
          headings={
            <span>
              Designed with Purpose<span className="lg:block"></span> and Precision
            </span>
          }
        />
      </div>
      <div className="container">
        <div className="mt-[40px] grid grid-cols-1 gap-[40px] lg:mt-[150px] lg:grid-cols-12 lg:gap-[80px]">
          <div className="col-span-4">
            <div className="cars_item group">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/home/essential/essential_1.webp"
                  className="h-[280px] w-full object-cover transition-transform duration-1000 group-hover:scale-125 lg:h-auto"
                  data-gsap="clip-polygon"
                  data-gsap-duration="1"
                  data-gsap-delay="0.6"
                  alt="elevators"
                />
                <ArtisticImpression />
              </div>
              <h3
                className="mt-[25px] text-center text-[20px] text-[var(--secondary-color)] lg:text-[24px]"
                data-gsap="fade-up"
                data-gsap-duration="1"
                data-gsap-delay="0.6"
              >
                Elevators
              </h3>
            </div>
          </div>
          <div className="col-span-4 lg:mt-[-85px]">
            <div className="cars_item group">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/home/essential/essential_2.webp"
                  className="h-[280px] w-full object-cover transition-transform duration-1000 group-hover:scale-125 lg:h-auto"
                  data-gsap="clip-polygon"
                  data-gsap-duration="1"
                  data-gsap-delay="0.6"
                  alt="smart home technology"
                />
                <ArtisticImpression />
              </div>
              <h3
                className="mt-[25px] text-center text-[20px] text-[var(--secondary-color)] lg:text-[24px]"
                data-gsap="fade-up"
                data-gsap-duration="1"
                data-gsap-delay="0.6"
              >
                Smart Home <span className="lg:block"></span> Technology
              </h3>
            </div>
          </div>
          <div className="col-span-4">
            <div className="cars_item group">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/home/essential/essential_3.webp"
                  className="h-[280px] w-full object-cover transition-transform duration-1000 group-hover:scale-125 lg:h-auto"
                  data-gsap="clip-polygon"
                  data-gsap-duration="1"
                  data-gsap-delay="0.6"
                  alt="security"
                />
                <ArtisticImpression />
              </div>
              <h3
                className="mt-[25px] text-center text-[20px] text-[var(--secondary-color)] lg:text-[24px]"
                data-gsap="fade-up"
                data-gsap-duration="1"
                data-gsap-delay="0.6"
              >
                Security
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}