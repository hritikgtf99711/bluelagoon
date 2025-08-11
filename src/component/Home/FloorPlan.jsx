import React, { useState } from 'react';
import Headings from '../../utils/Headings';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const floorPlans = [
  {
    image: '/assets/images/home/floorplans/floorplan-1.png',
    title: 'Basement',
  },
  {
    image: '/assets/images/home/floorplans/floorplan-1.png',
    title: 'Basement',
  },
  {
    image: '/assets/images/home/floorplans/floorplan-1.png',
    title: 'Basement',
  },
  {
    image: '/assets/images/home/floorplans/floorplan-1.png',
    title: 'Basement',
  },
  {
    image: '/assets/images/home/floorplans/floorplan-1.png',
    title: 'Basement',
  },
];

export default function FloorPlan() {
  const [activeTitle, setActiveTitle] = useState(floorPlans[0].title);
  const [fade, setFade] = useState(true);

  const handleSlideChange = (swiper) => {
    setFade(false);
    setTimeout(() => {
      setActiveTitle(floorPlans[swiper.activeIndex].title);
      setFade(true);
    }, 300); 
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <style>
        {`
          .fade-in-out {
            transition: opacity 0.3s ease-in-out;
          }
          .fade-in-out.fade-out {
            opacity: 0;
          }
          .fade-in-out.fade-in {
            opacity: 1;
          }
        `}
      </style>
      <img
        src="assets/icons/layered_blob.svg"
        className="absolute bottom-[-80px] left-0 w-full"
        alt="Decorative layered blob"
      />
      <div className="heading-container text-center">
        <img
          src="assets/icons/icon_design.svg"
          className="mx-auto mb-4"
          alt="Design icon"
          width="40"
          height="40"
        />
        <span className="uppercase mb-4 mt-8 text-[var(--primary-color)] font-medium block">
          FLOOR PLANS
        </span>
        <Headings
          classNames=""
          headings={
            <span>
              Affordable luxury meets<span className="lg:block">refined living</span>
            </span>
          }
        />
      </div>
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.next_arrow',
            prevEl: '.prev_arrow',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 1 },
          }}
          onSlideChange={handleSlideChange}
        >
          {floorPlans.map((plan, index) => (
            <SwiperSlide key={`floorplan-${index}`}>
              <div className="flex flex-col items-center p-4">
                <img
                  src={plan.image}
                  className="w-full object-cover rounded-lg"
                  alt={`${plan.title} floor plan`}
                  width="400"
                  height="300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex-container flex justify-between relative z-[1] px-5 pt-8 items-center">
          <div className="heading-container flex items-center gap-4">
            <div className="w-10 h-0.5 bg-[var(--primary-color)]"></div>
            <h3
              className={`text-2xl font-semibold uppercase text-[var(--primary-color)] fade-in-out ${
                fade ? 'fade-in' : 'fade-out'
              }`}
            >
              {activeTitle}
            </h3>
          </div>
          <div className="arrow-container flex gap-8">
            <img
              src="assets/icons/arrow-right.svg"
              className="prev_arrow w-10 h-10 cursor-pointer"
              alt="Previous slide"
            />
            <img
              src="assets/icons/arrow-left.svg"
              className="next_arrow w-10 h-10 cursor-pointer"
              alt="Next slide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}