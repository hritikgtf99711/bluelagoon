import { Link } from "react-router-dom"
const Banner = () => {
    return <section
    
        className="bg-[url('/assets/images/home/banner.jpg')] bg-cover bg-no-repeat bg-[bottom] relative h-screen w-screen">
        <div className="container relative z-[1] h-[100%]">
            <h1 class="absolute xl:top-[28%] heading-text top-[33%] tracking-[2px] text-[38px] leading-[1.3] uppercase text-center left-[25%] translate-[-50%] font-[600] " data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">
                <span className="bg-gradient-to-t from-[#5b90ca]  to-white text-transparent bg-clip-text"> Where Every Detail </span><span className="lg:block"></span> <span className="bg-clip-text bg-gradient-to-t from-[#5b90ca]  to-white text-transparent "> Inspires Serenity</span></h1>

            <ul className="absolute left-0 bottom-[192px]" data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">
                <li><Link href="#"><img className="w-[20px]" src="./assets/icons/icon_linkedin.svg" alt="" /></Link></li>
                <li className="my-[35px]"><Link href="#"><img className="w-[20px]" src="./assets/icons/icon_video.svg" alt="" /></Link></li>
                <li><Link href="#"><img className="w-[20px]" src="./assets/icons/icon_facebook.svg" alt="" /></Link></li>
            </ul>
        </div>
        <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.30)_100%)] h-[200px] w-[100%] absolute bottom-0 right-0"></div></section>
}

export default Banner