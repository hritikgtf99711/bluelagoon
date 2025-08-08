const CtaComponent=()=>{
    return <section className="bg-[url('/assets/images/home/cta_banner.jpg')]   bg-[cover] lg:h-[100vh]" >
        <div className="container  h-[100%]  lg:bg-[transparent] bg-[#0000004f] lg:py-0 py-[80px]">
            <div className="lg:grid-cols-12 grid-cols-1 grid h-[100%]">
                <div className="col-span-6 m-auto">
        <div className="content text-center">
            <h3 data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6" className="lg:bg-gradient-to-t mb-[8px] font-[600] text-[24px] lg:text-[32px] uppercase from-[#1A4A5B]  to-[#412C24] text-[#fff] lg:text-transparent lg:bg-clip-text">
                One of the Largest
            </h3>
            <h3  data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6" className="lg:bg-gradient-to-t font-[600] text-[24px] lg:text-[32px] uppercase from-[#1A4A5B]  to-[#412C24] text-[#fff] lg:text-transparent lg:bg-clip-text">
                 residential project IN
            </h3>
            <h2 data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6"  className="lg:bg-gradient-to-t from-[#412C24] uppercase lg:!text-[60px] !text-[40px] font-[600] to-[#1A4A5B] text-[#fff] lg:text-transparent lg:bg-clip-text">Maldives</h2>
        </div>
        </div>
         <div className="col-span-6"></div>
        </div>
</div>
    </section>
}
export default CtaComponent