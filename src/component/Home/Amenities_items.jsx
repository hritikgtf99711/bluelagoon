import React from 'react';
import Headings from '../../utils/Headings';

const amenitiesData = [
  {
    image: '/assets/images/home/amenities/amenities_1.jpg',
    title: 'State-of-the-Art Clubhouse',
    description:
      'Designed as an extension of your sophisticated lifestyle, this exclusive space offers an ideal setting for both socialising and unwinding. Whether hosting intimate gatherings or attending curated resident events, the clubhouse provides an elegant backdrop for unforgettable moments. This 2 storey Clubhouse will have its own entrance lobby, and dedicated lift.',
    imageOnLeft: true,
  },
  {
    image: '/assets/images/home/amenities/amenities_2.jpg',
    title: 'Multipurpose Hall',
    description:
      'The multipurpose hall is designed to accommodate everything from exclusive business meetings to intimate private events. With its sophisticated decor and flexible layout, this hall transforms effortlessly to meet your high expectations.',
    imageOnLeft: false,
  },
  {
    image: '/assets/images/home/amenities/amenities_3.jpg',
    title: 'Children’s Play Area',
    description:
      'Our carefully designed children’s play area offers a safe, and engaging environment where young residents can let their imaginations run free. With high-quality, interactive play areas and soft, modern furnishings, this space is perfect for creating joyful memories for the little ones.',
    imageOnLeft: true,
  },
  {
    image: '/assets/images/home/amenities/amenities_4.jpg',
    title: 'Fully-Equipped Gymnasium',
    description:
      'Achieve your wellness goals in our cutting-edge gym, featuring the latest in high performance equipment. Thoughtfully designed to cater to all fitness levels, this space offers a private, serene environment where you can work towards your health and fitness journey',
    imageOnLeft: false,
  },
  {
    image: '/assets/images/home/amenities/amenities_5.jpg',
    title: 'Theatre',
    description:
      'Experience the magic of cinema in the comfort of your own residence. Our luxurious private theatre is designed to deliver a truly immersive viewing experience. Whether you’re hosting a private screening or enjoying a quiet movie night, this theatre provides a world-class experience.',
    imageOnLeft: true,
  },
  {
    image: '/assets/images/home/amenities/amenities_6.jpg',
    title: 'Entrance Lobby',
    description:
      'The building hosts not one but 3 entrance lobbies with a separate lobby for the club ensuring huge degree of privacy within the building.',
    imageOnLeft: false,
  },
  {
    image: '/assets/images/home/amenities/amenities_7.jpg',
    title: 'LARGE SEMI-FURNISHED APARTMENTS',
    description:
      'Fully air conditioned, Luxury specifications, Walk-in wardrobes',
    imageOnLeft: true,
  },
  {
    image: '/assets/images/home/amenities/amenities_8.jpg',
    title: 'LARGE BALCONY HOMES',
    description:
      'A minimum of 320sqft of balcony space with every apartment.',
    imageOnLeft: false,
  },
];

const AmenityItem = () => (
      <div className="amenities-items pt-16">
        {amenitiesData.map((item)=>{
            const {imageOnLeft,title,description,image}=item;
   return <div className="grid grid-cols-12 gap-20 pb-[100px]">
    <div className={`col-span-8 ${imageOnLeft ? 'order-1' : 'order-2'}`}>
      <img
        src={image}
        className="w-full rounded-lg"
        alt={`${title} amenity`}
        data-gsap="clip-polygon" data-gsap-duration="1" data-gsap-delay="0.6"
        width="800"
        height="600"
      />
    </div>
    <div className={`col-span-4 mt-[auto] pb-[30px] ${imageOnLeft ? 'order-2' : 'order-1'}`}>
      <div className="pb-10">
        <img
        data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6"
          src="/assets/icons/icon_design.svg"
          className="mb-4"
          alt="Design Icon"
          width="40"
          height="40"
        />
        <Headings classNames="text-start !text-3xl " headings={title} />
        <p className="font-manrope text-justify text-sm mt-[15px] leading-relaxed" data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">
          {description}
        </p>
      </div>
      </div>
    </div>
      })}
  </div>
);

export default AmenityItem