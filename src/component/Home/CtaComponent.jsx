const CtaComponent=()=>{
    return <section className="bg-[url('/assets/images/home/cta_banner.jpg')]  bg-[cover] h-[100vh]" >
        <div className="container  h-[100%]">
            <div className="grid-cols-12 grid h-[100%]">
                <div className="col-span-6 m-auto">
        <div className="content text-center">
            <h3 data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6" className="bg-gradient-to-t mb-[8px] font-[600] text-[32px] uppercase from-[#1A4A5B]  to-[#412C24] text-transparent bg-clip-text">
                One of the Largest
            </h3>
            <h3  data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6" className="bg-gradient-to-t font-[600] text-[32px] uppercase from-[#1A4A5B]  to-[#412C24] text-transparent bg-clip-text">
                 residential project IN
            </h3>
            <h2 data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6"  className="bg-gradient-to-t from-[#412C24] uppercase text-[60px] font-[600] to-[#1A4A5B] text-transparent bg-clip-text">Maldives</h2>
        </div>
        </div>
         <div className="col-span-6"></div>
        </div>
</div>
    </section>
}
export default CtaComponent