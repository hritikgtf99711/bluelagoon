import React from 'react'
import Headings from '../../utils/Headings'
import ArtisticImpression from '../../utils/ArtisticImpression'
export default function Essential_Features() {
  return (
    <section className='py-[80px] bg-[var(--primary-color)] overflow-hidden relative'>
        <img src='/assets/icons/layered_blob.svg' className='absolute bottom-[-80px] left-0 w-[100%]' alt='layered blob'/>
         <div className="heading_container text-center mb-[20px]">
            <img src="/assets/icons/icon_design_secondary.svg" className="m-auto" alt="icon design" data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6" />
            <span className="uppercase text-[var(--secondary-color)] mb-[15px] mt-[30px] font-[500] block" data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">ESSENTIAL FEATURES</span>
            <Headings classNames=' text-[var(--secondary-color)] ' headings={<span>Designed with Purpose<span className="lg:block"></span>and Precision</span>} />
        </div>
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[80px] mt-[40px] lg:mt-[150px]'>
                <div className='col-span-4' >
                    <div className='cars_item'>
                        <div className='relative'>
                        <img src='/assets/images/home/essential/essential_1.webp' data-gsap="clip-polygon" data-gsap-duration="1" data-gsap-delay="0.6" className='w-[100%]' alt='essential 1'/>
                        <ArtisticImpression/>
                        </div>
                        <h3 className='text-[var(--secondary-color)] text-[20apx] lg:text-[24px] text-center mt-[25px]' data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">Elevators</h3>
                    </div>
                </div>
                 <div className='col-span-4 lg:mt-[-85px]' >
                    <div className='cars_item'>
                        <div className='relative'>
                        <img src='/assets/images/home/essential/essential_2.webp' className='w-[100%]'  data-gsap="clip-polygon" data-gsap-duration="1" data-gsap-delay="0.6" alt='essential 1'/>
                         <ArtisticImpression/>
                        </div>
                        <h3 className='text-[var(--secondary-color)] text-[20apx] lg:text-[24px] text-center mt-[25px]' data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">Smart Home <span className='lg:block'></span> Technology</h3>
                    </div>
                </div>
                 <div className='col-span-4'>
                    <div className='cars_item'>
                        <div className='relative'>
                        <img src='/assets/images/home/essential/essential_3.webp' className='w-[100%] '  data-gsap="clip-polygon" data-gsap-duration="1" data-gsap-delay="0.6"  alt='essential 1' />
                         <ArtisticImpression/>
                        </div>
                        <h3 className='text-[var(--secondary-color)] text-[20apx] lg:text-[24px] text-center mt-[25px]' data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">Security</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
