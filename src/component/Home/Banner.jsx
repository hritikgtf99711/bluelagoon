import { Link } from "react-router-dom"
import ZoomOut from "../../utils/ZoomOut"
import ArtisticImpression from "../../utils/ArtisticImpression"
const Banner = () => {
    return <section
    
        className={`${window.innerWidth<991?"bg-[url('/assets/images/home/banner_mob.jpg')]":"bg-[url('/assets/images/home/banner.jpg')]"} banner_sec bg-cover bg-no-repeat bg-[bottom] relative h-[80vh] lg:h-screen w-screen`}>
        <div className="container lg:block flex flex-col place-items-center  justify-center relative z-[1] h-[100%]">
            <h1 class="lg:absolute xl:top-[26%] heading-text tracking-[2px] text-[38px] leading-[1.3] uppercase text-center left-[25%] lg:translate-[-50%] font-[600] " data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">
                <span className="bg-gradient-to-t from-[#5b90ca7d]  to-white text-transparent bg-clip-text"> Where Every Detail </span><span className="lg:block"></span> <span className="bg-clip-text bg-gradient-to-t from-[#5b90ca7d]  to-white text-transparent "> Inspires Serenity</span></h1>

            <ul className="lg:absolute lg:inline-block hidden flex lg:w-[auto] w-[100%] place-items-center justify-center gap-[20px] left-[10px] bottom-[214px]" data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">
              
                <li className="my-[35px]"><Link href="#"><img className="w-[20px]" src="./assets/icons/icon_video.svg" alt="" /></Link></li>
                <li><Link href="#"><img className="w-[20px]" src="./assets/icons/icon_facebook.svg" alt="" /></Link></li>
            </ul>
        </div>
        <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.30)_100%)] h-[200px] w-[100%] absolute bottom-0 right-0"></div>
        <ArtisticImpression/>
        </section>
}

export default Banner