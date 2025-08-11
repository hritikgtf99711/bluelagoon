import VideoCta from "../component/Home/VideoCta";
import Form_sec from "../component/Home/Form_sec";
import Banner from "../component/About/Banner";
import AboutContent from "../component/About/AboutContent";
import { Suspense } from "react";
import FounderSec from "../component/About/FounderSec";
import Footer from "../component/Footer";
const About = () => {
    return <>
            <Suspense fallback={<h1>Banner</h1>}>
                <Banner/>
            </Suspense>
               <Suspense fallback={<h1>Video </h1>}>
                <AboutContent/>
            </Suspense>
             <Suspense fallback={<h1>Form</h1>}>
                <FounderSec/>
            </Suspense> 
            <Suspense fallback={<h1>Video </h1>}>
                <VideoCta/>
            </Suspense>
            <Suspense fallback={<h1>Form</h1>}>
                <Form_sec/>
            </Suspense> 
            </>
}
export default About;
