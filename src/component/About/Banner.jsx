import React from 'react'
import ArtisticImpression from '../../utils/ArtisticImpression'
export default function Banner() {
  return (
    <section className='bg-[url("/assets/images/about/about.jpg")] relative h-[66vh] bg-[cover]'>
        <div className='container flex place-items-center h-[100%]'>
             <h1 class=" heading-text mt-[auto] pb-[180px] tracking-[2px] text-[48px] leading-[1.3] uppercase text-center font-[600] ">
                <span className="bg-gradient-to-t from-[#5b90ca]  to-white text-transparent bg-clip-text">About us</span></h1>

        </div>
        <ArtisticImpression/>
    </section>
  ) 
}
