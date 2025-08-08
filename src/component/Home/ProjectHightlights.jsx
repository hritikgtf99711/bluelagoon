import Headings from "../../utils/Headings";
import { useOutletContext } from "react-router-dom";
const ProjectHightlights = () => {
const { openModal, closeModal, isOpen } = useOutletContext();
    return <section className="pt-[80px] relative">
        <div className="heading_container text-center mb-[20px]">
            <img src="/assets/icons/icon_design.svg" className="m-auto" alt="icon design" data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6"  />
            <span className="uppercase text-[var(--primary-color)] mb-[15px] mt-[30px] font-[500] block" data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6"  >Project Hightlights</span>
            <Headings headings={<span>Where experience <span className="lg:block"></span>is elevated</span>} />
        </div>
        <div className="grid grid-cols-12 gap-[40px] mt-[30px] h-[85vh] relative">
            <div className="col-span-6" >
                <img src="/assets/images/home/project_highlights.png" className="w-[100%] h-[100%] object-cover"  data-gsap="clip-polygon" data-gsap-duration="1" data-gsap-delay="0.6"  alt="" />
            </div>
            <div className="col-span-5 m-auto pb-[80px]  overflow-y-scroll h-[100%] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6" >
                <ul className="">
                    <li className="uppercase flex place-items-start  mb-[45px]" >
                        <img src="/assets/icons/1.png" alt="Building" className="me-[18px] mt-[5px] w-[50px]"/>
                        <div className="content">
                        <h3 className="block font-[500] text-[20px] text-[var(--primary-color)] leading-[1.6]">One of the Largest Residential <span className="lg:block"></span>
                        Project in the Maldives</h3>
                        <p  className="font-manrope lowercase mt-[10px]">Setting a benchmark in scale and vision, this development proudly stands as one of the largest residential project in the Maldives, offering an unparalleled living experience in a premium urban setting</p>
                        </div>
                        </li>
                    <li className="uppercase flex place-items-start  mb-[45px]">
                         <img src="/assets/icons/2.png" alt="Building" className="me-[18px] mt-[5px] w-[50px]"/>
                          <div className="content">
                         <h3 className="block font-[500] text-[20px] text-[var(--primary-color)] leading-[1.6]">Terrace Garden & Swimming Pool</h3>
                          <p  className="font-manrope lowercase mt-[10px]">An 18,000+ sq. ft. terrace garden crowned with a luxurious swimming pool offers a tranquil escape, blending nature with modern living for the ultimate rooftop retreat</p>
                          </div>
                        </li>
                    <li className="uppercase flex place-items-start  mb-[45px]">
                    <img src="/assets/icons/3.png" alt="Building" className="me-[18px] mt-[5px] w-[50px]"/>
                    <div className="content">
                   <h3 className="block font-[500] text-[20px] text-[var(--primary-color)] leading-[1.6]"> Cross-Ventilated & Well-Lit Homes</h3>
                   <p  className="font-manrope lowercase mt-[10px]">Units in the project is thoughtfully designed to ensure ample natural light and cross ventilation, creating bright, airy living spaces that promote health and comfort throughout the day.</p>
                   </div>
                    </li>
                    <li className="uppercase flex place-items-start  mb-[45px]">
                    <img src="/assets/icons/4.png" alt="Building" className="me-[18px] mt-[5px] w-[50px]"/>
                    <div className="content">
                       <h3 className="block font-[500] text-[20px] text-[var(--primary-color)] leading-[1.6]">  EV Charging Infrastructure</h3>
                       <p  className="font-manrope lowercase mt-[10px]">Keeping pace with sustainable living, the project features dedicated EV charging stations, supporting an eco-conscious lifestyle for the modern homeowner.</p>
                       </div>
                    </li>
                      <li className="uppercase flex place-items-start  mb-[45px]">
                    <img src="/assets/icons/5.png" alt="Building" className="me-[18px] mt-[5px] w-[50px]"/>
                     <div className="content">
                       <h3 className="block font-[500] text-[20px] text-[var(--primary-color)] leading-[1.6]">Spacious Balcony Living</h3>
                       <p  className="font-manrope lowercase mt-[10px]">Our homes are designed with expansive balconies, giving residents a private outdoor corner to relax, sip a coffee, or soak in the island breeze—right from the comfort of their own home.</p>
                       </div>
                    </li>
                       <li className="uppercase flex place-items-start  mb-[45px]">
                    <img src="/assets/icons/6.png" alt="Building" className="me-[18px] mt-[5px] w-[50px]"/>
                    <div className="content">
                       <h3 className="block font-[500] text-[20px] text-[var(--primary-color)] leading-[1.6]">Expansive Clubhouse Amenities</h3>
                       <p  className="font-manrope lowercase mt-[10px]">Residents enjoy access to a sprawling 15,000+ sq. ft. clubhouse, thoughtfully designed with leisure, fitness, and community in mind-perfect for relaxation and social gatherings.</p>
                       </div>
                    </li>
                    <li className="uppercase flex place-items-start   mb-[35px]">
                        <img src="/assets/icons/7.png" alt="Building" className="me-[18px] mt-[5px] w-[50px]"/>
                        <div className="content">
                      <h3 className="block font-[500] text-[20px] text-[var(--primary-color)] leading-[1.6]">   Grand Luxury Lobby</h3>
                      <p  className="font-manrope lowercase mt-[10px]">The luxury entrance lobbies set a sophisticated tone from the moment youstep in, with elegant finishes and stylish décor that reflect refined taste and high standards.</p>
                      </div>
                    </li>
                    <li className="uppercase flex place-items-start   mb-[35px]">
                        
                        <img src="/assets/icons/8.png" width={'45px'} alt="Building" className="me-[18px] mt-[5px] w-[50px]"/>
                        <div className="content">
                      <h3 className="block font-[500] text-[20px] text-[var(--primary-color)] leading-[1.6]">  Efficient Vertical Mobility</h3>
                      <p  className="font-manrope lowercase mt-[10px]">Each tower is equipped with six high-speed lifts, significantly reducing waiting time and ensuring smooth, efficient access to all floors, even during peak hours.</p>
                      </div>
                    </li>
                    <li className="uppercase flex place-items-start   mb-[35px]">
                        <img src="/assets/icons/9.png" alt="Premium Finishes Throughout" className="me-[18px] mt-[5px] w-[50px]" width={'45px'}/>
                          <div className="content">
                      <h3 className="block font-[500] text-[20px] text-[var(--primary-color)] leading-[1.6]">  Premium Finishes Throughout</h3>
                      <p  className="font-manrope lowercase mt-[10px]">High-end materials and superior craftsmanship are evident in every corner of the project, ensuring a luxurious, long-lasting finish that complements contemporary living.</p>
                      </div>
                    </li>
                    
                </ul>
                <div className="text-center  mt-[80px]">
                <a href="javascript:void(0)" className="uppercase bg-[var(--primary-color)] text-white  py-[14px] px-[44px]" onClick={openModal}>View More</a>
                </div>
            </div>
            <img src="/assets/icons/coconut_blob.png" className="absolute w-[180px] right-[0] bottom-0 right-0" alt="" />
        </div>
    </section>

}
export default ProjectHightlights;