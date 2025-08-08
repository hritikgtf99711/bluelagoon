        import React from 'react' 

        export default function VideoCta() {
        return (
            <section className=' relative '>
                <video className="w-[100%] h-[100%] absolute top-0 object-cover" autoPlay muted>
                        <source src="/assets/video/cta_video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                <div className=' mx-[auto]  bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)] py-[120px] h-[100%] w-[100%] text-white relative text-center '>
                        <div className='m-[auto]'>
                        <h2 className='text-[65px] font-[600]'>Get In Touch</h2>
                        <p className='font-manrope my-[25px] capitalize tracking-[1px] mb-[40px] leading-[1.8]'>Your perfect beachside escape is just a message away <span className='lg:block'></span>
                            – our dedicated team is standing by to craft your <span className='lg:block'></span>
                            personalized coastal experience.</p>

                        <a href='#' className='bg-[white] text-[#000] uppercase font-[600] inline-block  font-[500] px-[40px] py-[12px]'>Download Brochure</a>
                            </div>
                </div>
            </section>
        )
        }
