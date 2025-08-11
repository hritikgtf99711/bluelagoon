import ArtisticImpression from "../../utils/ArtisticImpression";
const PoolSec=()=>{
    return <section className="bg-[url('/assets/images/home/poolbanner.webp')] lg:block   bg-[cover] lg:h-[85vh] h-[60vh] relative">
                   <div className="content lg:px-0 lg:block flex justify-center flex-col px-[15px] h-[100%] lg:absolute top-[120px] lg:bg-[transparent] bg-[#00000073] lg:py-[0] py-[80px] left-[50%] w-[100%] text-center lg:left-[30%] lg:translate-x-[-50%] z-[1]">
            <h3 className="text-[var(--secondary-color)] text-[28px] lg:text-[32px] font-[600] " data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6">
                Swimming Pool and
            </h3>
            <h3 className="text-[var(--secondary-color)] text-[28px] lg:text-[32px] lg:ml-[145px] mt-[6px] font-[600]" data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6">
             
                Rooftop Garden
            </h3>
            </div>
            <ArtisticImpression/>
    </section>
}
export default PoolSec;