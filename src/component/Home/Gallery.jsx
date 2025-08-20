import React, { useState } from "react";
import Headings from "../../utils/Headings";
import ArtisticImpression from "../../utils/ArtisticImpression";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css"; // For captions plugin

export default function Gallery() {
  // State to manage lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Array of images for the lightbox
  const images = [
    {
      src: "assets/images/home/gallery/gallery_1.webp",
    },
    {
      src: "assets/images/home/gallery/gallery_2.webp",
    },
    {
    src: "assets/images/home/gallery/gallery_3.webp",
    },
    {
      src: "assets/images/home/gallery/gallery_4.webp",
    },
    {
      src: "assets/images/home/gallery/gallery_5.webp",
    },
  ];

  // Handle image click to open lightbox
  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="relative overflow-hidden py-[80px]">
      <div className="heading_container mb-[20px] text-center">
        <img
          src="assets/icons/icon_design.svg"
          className="m-auto"
          alt="icon design"
          data-gsap="fade-up"
          data-gsap-duration="1"
          data-gsap-delay="0.6"
        />
        <span
          className="mt-[30px] mb-[15px] block font-medium uppercase text-[var(--primary-color)]"
          data-gsap="fade-up"
          data-gsap-duration="1"
          data-gsap-delay="0.6"
        >
          Project Gallery
        </span>
        <Headings
          headings={
            <span>
              Experience the lifestyle <span className="lg:block"></span>{" "}
              through our visuals
            </span>
          }
        />
      </div>
      <div className="container relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 80,
            },
          }}
          className="mt-[40px]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="cars_item group">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    className="!h-[430px] object-[bottom] w-full object-cover transition-transform duration-1000 group-hover:scale-125 lg:h-auto"
                    data-gsap="clip-polygon"
                    data-gsap-duration="1"
                    data-gsap-delay="0.6"
                    alt={image.title}
                    onClick={() => handleImageClick(index)} // Open lightbox on click
                    style={{ cursor: "pointer" }}
                  />
                  <ArtisticImpression />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <div className="flex justify-center mt-[30px] items-center gap-[10px]">
          <div className="h-[40px] w-[40px] rounded-[50%] p-[5px] swiper-button-prev-custom bg-[var(--primary-color)] z-10 cursor-pointer">
            <svg
              className="w-[100%] h-[100%] text-[var(--secondary-color)] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="h-[40px] w-[40px] rounded-[50%] p-[5px] swiper-button-next-custom bg-[var(--primary-color)] z-10 cursor-pointer">
            <svg
              className="w-[100%] h-[100%] text-[var(--secondary-color)] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Lightbox Component */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={images.map((image) => ({
            src: image.src,
            alt: image.title,
            // title: image.title,
            // description: "Artistic Impression",
          }))}
          // plugins={[Captions, Fullscreen, Zoom]}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
          captions={{ descriptionTextAlign: "center", bottom: "30px" }}
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        />
      )}
    </section>
  );
}
