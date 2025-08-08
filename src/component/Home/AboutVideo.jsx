import Headings from "../../utils/Headings";
const About=()=>{
    return <section className="about_sec py-[80px]">
        <Headings headings={<span>Step into Blue <span className="block"></span> Lagoon’s World</span>}/>
        <div className="container"  data-gsap="clip-polygon" data-gsap-duration="1" data-gsap-delay="0.6">
                <div className="lg:w-[60%] mt-[30px] m-auto">
                <video width="320" className="w-[100%]  shadow-custom rounded-[10px] lg:rounded-[20px]" height="200" autoPlay muted>
                <source src="/assets/video/about_video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
        </div>
    </section>
}
export default About;