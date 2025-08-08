import Headings from "../../utils/Headings";
import { useOutletContext } from "react-router-dom";
const ProjectHightlights = () => {
const { openModal, closeModal, isOpen } = useOutletContext();
    return <section className="pt-[80px] relative">
        <div className="heading_container text-center mb-[20px]">
            <img src="/assets/icons/icon_design.svg" className="m-auto" alt="icon design" />
            <span className="uppercase text-[var(--primary-color)] mb-[15px] mt-[30px] font-[500] block">Project Hightlights</span>
            <Headings headings={<span>Where experience <span className="lg:block"></span>is elevated</span>} />
        </div>
        <div className="grid grid-cols-12 mt-[15px] relative">
            <div className="col-span-7">
                <img src="/assets/images/home/project_highlights.png" className="w-[100%] h-[100%] object-cover" alt="" />
            </div>
            <div className="col-span-4 m-auto pb-[80px]">
                <ul className="overflow-y-scroll max-h-[400px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <li className="uppercase flex place-items-center mb-[35px]">
                        <img src="/assets/icons/icon_building.svg" alt="Building"/>
                        <span className="block ml-[35px] font-[500] leading-[1.6]">One of the Largest Residential <span className="lg:block"></span>
                        Project in the Maldives</span>
                        </li>
                    <li className="uppercase flex place-items-center mb-[35px]">
                         <img src="/assets/icons/icon_terrace.svg" alt="Building"/>
                         <span className="block ml-[35px] font-[500] leading-[1.6]">Terrace Garden & Swimming Pool</span>
                        </li>
                    <li className="uppercase flex place-items-center mb-[35px]">
                    <img src="/assets/icons/icon_wellit.svg" alt="Building"/>
                   <span className="block ml-[35px] font-[500] leading-[1.6]"> Cross-Ventilated & Well-Lit Homes</span>
                    </li>
                    <li className="uppercase flex place-items-center mb-[35px]">
                    <img src="/assets/icons/icon_ev.svg" alt="Building"/>
                       <span className="block ml-[35px] font-[500] leading-[1.6]">  EV Charging Infrastructure</span>
                    </li>
                    <li className="uppercase flex place-items-center  mb-[35px]">
                        <img src="/assets/icons/icon_lobby.svg" alt="Building"/>
                      <span className="block ml-[35px] font-[500] leading-[1.6]">   Grand Luxury Lobby</span>
                    </li>
                    <li className="uppercase flex place-items-center  mb-[35px]">
                        <img src="/assets/icons/icon_efficient.png" width={'45px'} alt="Building"/>
                      <span className="block ml-[35px] font-[500] leading-[1.6]">  Efficient Vertical Mobility</span>
                    </li>
                    <li className="uppercase flex place-items-center  mb-[35px]">
                        <img src="/assets/icons/icon_tools.png" alt="Premium Finishes Throughout" width={'45px'}/>
                      <span className="block ml-[35px] font-[500] leading-[1.6]">  Premium Finishes Throughout</span>
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