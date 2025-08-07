import Banner from "../component/Home/Banner";
import AboutVideo from "../component/Home/AboutVideo";
import CtaComponent from "../component/Home/CtaComponent";
import ProjectHightlights from "../component/Home/ProjectHightlights";
import PoolSec from "../component/Home/PoolSec";
import Amenities from "../component/Home/Amenities";
import Essential_Features from "../component/Home/Essential_Features";
import VideoCta from "../component/Home/VideoCta";
import Form_sec from "../component/Home/Form_sec";
import Typology from "../component/Home/Typology";
import About from "../component/Home/About";
import { Suspense } from "react";
const Home = () => {
    return <>
            <Suspense fallback={<h1>Loading Banner</h1>}>
            <Banner />
            </Suspense>
            
            <Suspense fallback={<h1>About</h1>}>
              <About/>
            </Suspense>
              <Suspense fallback={<h1>Typology</h1>}>
              <Typology/>
            </Suspense>
            <Suspense fallback={<h1>Loading Overview</h1>}>
            <AboutVideo />
            </Suspense>
            <Suspense fallback={<h1>Loading CTA</h1>}>
            <CtaComponent />
            </Suspense>
              <Suspense fallback={<h1>Project Hightlights</h1>}>
            <ProjectHightlights />
            </Suspense>
            <Suspense fallback={<h1>Loading Pool Sec</h1>}>
              <PoolSec/>
            </Suspense>
            <Suspense fallback={<h1>Loading Amenities</h1>}>
              <Amenities/>
            </Suspense>
            <Suspense fallback={<h1>Essential Features</h1>}>
              <Essential_Features/>
            </Suspense>
             {/* <Suspense fallback={<h1>Floor Plan</h1>}>
              <FloorPlan/>
            </Suspense> */}
            <Suspense fallback={<h1>Video CTA</h1>}>
              <VideoCta/>
            </Suspense>
            <Suspense fallback={<h1>Video CTA</h1>}>
              <Form_sec/>
            </Suspense>
        
            
            </>

}
export default Home;