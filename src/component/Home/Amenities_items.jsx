import React from 'react';
import Headings from '../../utils/Headings';
import ArtisticImpression from '../../utils/ArtisticImpression';
const amenitiesData = [
  {
    image: 'assets/images/home/amenities/amenities_1.webp',
    title: 'State-of-the-Art Clubhouse',
    description:
      'Designed as an extension of your sophisticated lifestyle, this exclusive space offers an ideal setting for both socialising and unwinding. Whether hosting intimate gatherings or attending curated resident events, the clubhouse provides an elegant backdrop for unforgettable moments. This 2 storey Clubhouse will have its own entrance lobby, and dedicated lift.',
    imageOnLeft:window.innerWidth<991?true: true,
  },
  {
    image: 'assets/images/home/amenities/amenities_2.webp',
    title: 'Multipurpose Hall',
    description:
      'The multipurpose hall is designed to accommodate everything from exclusive business meetings to intimate private events. With its sophisticated decor and flexible layout, this hall transforms effortlessly to meet your high expectations.',
    imageOnLeft:window.innerWidth<991?true: false,
  },
  {
    image: 'assets/images/home/amenities/amenities_3.webp',
    title: 'Children’s Play Area',
    description:
      'Our carefully designed children’s play area offers a safe, and engaging environment where young residents can let their imaginations run free. With high-quality, interactive play areas and soft, modern furnishings, this space is perfect for creating joyful memories for the little ones.',
    imageOnLeft:window.innerWidth<991?true: true,
  },
  {
    image: 'assets/images/home/amenities/amenities_4.webp',
    title: 'Fully-Equipped Gymnasium',
    description:
      'Achieve your wellness goals in our cutting-edge gym, featuring the latest in high performance equipment. Thoughtfully designed to cater to all fitness levels, this space offers a private, serene environment where you can work towards your health and fitness journey',
    imageOnLeft:window.innerWidth<991?true: false,
  },
  {
    image: 'assets/images/home/amenities/amenities_5.webp',
    title: 'Theatre',
    description:
      'Experience the magic of cinema in the comfort of your own residence. Our luxurious private theatre is designed to deliver a truly immersive viewing experience. Whether you’re hosting a private screening or enjoying a quiet movie night, this theatre provides a world-class experience.',
    imageOnLeft:window.innerWidth<991?true: true,
  },
  {
    image: 'assets/images/home/amenities/amenities_6.webp',
    title: 'Entrance Lobby',
    description:
      'The building hosts not one but 3 entrance lobbies with a separate lobby for the club ensuring huge degree of privacy within the building.',
    imageOnLeft:window.innerWidth<991?true: false,
  },
  {
    image: 'assets/images/home/amenities/amenities_7.webp',
    title: 'LARGE SEMI-FURNISHED APARTMENTS',
    description:
      'Fully air conditioned, Luxury specifications, Walk-in wardrobes',
    imageOnLeft:window.innerWidth<991?true: true,
  },
  {
    image: 'assets/images/home/amenities/amenities_8.webp',
    title: 'LARGE BALCONY HOMES',
    description:
      'A minimum of 320sqft of balcony space with every apartment.',
    imageOnLeft:window.innerWidth<991?true: false,
  },
];

const AmenityItem = () => (
      <div className="amenities-items lg:pt-16">
        {amenitiesData.map((item,index)=>{
            const {imageOnLeft,title,description,image}=item;
   return <div className={`grid grid-cols-1 lg:py-0 lg:mb-0 lg:border-0 py-[50px] mb-[20px] border-b-[1px] border-[#23516252] gap-[10px] lg:grid-cols-12 lg:gap-[100px] gap-[20px] pb-[25px] lg:pb-[100px]`}>
    <div className={`col-span  lg:col-span-7 ${imageOnLeft ? 'order-1' : 'order-2'}`}>
      <div className='relative overflow-hidden rounded-lg'>
      <img
        src={image}
        className="w-full "
        alt={`${title} amenity`}
        data-gsap="clip-polygon" data-gsap-duration="1" data-gsap-delay="0.6"
        width="800"
        height="600"
      />
      <ArtisticImpression/>
      </div>
    </div>
    <div className={`col-span lg:col-span-5 mt-[auto] pb-[30px] ${imageOnLeft ? 'order-2' : 'order-1'}`}>
      <div className="lg:pb-10">
        <img
        data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6"
          src="/assets/icons/icon_design.svg"
          className="mb-4"
          alt="Design Icon"
          width="40"
          height="40"
        />
        <Headings classNames="text-start lg:!text-[24px] !text-[20px] !px-0" headings={title} />
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