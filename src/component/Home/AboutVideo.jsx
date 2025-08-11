import Headings from "../../utils/Headings";
import { IoMdVolumeHigh } from "react-icons/io";
import { FaVolumeMute } from "react-icons/fa";
import { useState,useRef,useEffect } from "react";
const About=()=>{
    const [isMuted, setIsMuted] = useState(true); // Start muted, as per original video
  const videoRef = useRef(null);
 useEffect(() => {
    // Sync video muted property with isMuted state
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };
    return <section className="about_sec py-[80px]">
        <Headings headings={<span>Step into Blue <span className="block"></span> Lagoon’s World</span>}/>
        <div className="container "  data-gsap="clip-polygon" data-gsap-duration="1" data-gsap-delay="0.6">
                <div className="lg:w-[60%] relative py-[30px] mt-[30px] m-auto">
                <video         ref={videoRef}  width="320" className="w-[100%]    shadow-custom rounded-[10px] lg:rounded-[20px]" height="200"  pplaysinline webkit-playsinline muted autoplay loop>
               
            </video>
            <button
        onClick={toggleMute}
        className="absolute bottom-[50px] right-[30px] cursor-pointer z-10 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {!isMuted ? <IoMdVolumeHigh /> : <FaVolumeMute />}
      </button>
            </div>
        </div>
    </section>
}
export default About;