import React from 'react';
import Headings from '../../utils/Headings';
import Amenities_items from './Amenities_items';
import ArtisticImpression from '../../utils/ArtisticImpression';
const amenitiesData = [
  ['Pathway', 'Mound', 'Covered Seating'],
  ['Gazebo', 'Sculpture', 'Informal Seating Area'],
  ['Pergola', 'BBQ Area', 'Pool'],
  ['Infinity Pool', 'Pool Deck', 'Cabana'],
  ['Seating Lounge', 'Lawn', 'Seat'],
  ['Fruit Orchard', 'Jogging Track'],
];

export default function Amenities() {
  let count = 0;

  return (
    <section className="py-[80px]" >
      <div className="text-center mb-5">
        <img
          src="assets/icons/icon_design.svg"
          className="mx-auto mb-5"
          alt="Design Icon"
          width="50"
          height="50"
          data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6"
        />
        <Headings headings="ROOFTOP AMENITIES" />
      </div>
      <div className="container mx-auto">
        <img
          src="assets/images/home/amenities/map.png"
          className="w-[100%] my-[30px] lg:my-[50px]"
          data-gsap="clip-polygon" data-gsap-duration="1" data-gsap-delay="0.6"
          alt="Rooftop Amenities Map"
        />
        <div className="grid grid-cols-2 lg:grid-cols-6 lg:gap-[10px]" data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">  
          {amenitiesData.map((column, index) => (
            <div key={`col-span-${index}`} className="col">
              <ol >
                {column.map((amenity, idx) => {
                  count++;
                  return (
                    <li key={`amenity-${index}-${idx}`} className="mb-2 text-[14px] font-[500]">
                      {count}. {amenity}
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
        <Amenities_items/>
      </div>
    </section>
  );
}