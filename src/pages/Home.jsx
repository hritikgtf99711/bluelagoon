import Banner from "../component/Home/Banner";
import About from "../component/Home/About";
import CtaComponent from "../component/Home/CtaComponent";
import ProjectHightlights from "../component/Home/ProjectHightlights";
import { Suspense } from "react";
const Home = () => {
    return <>
            <Suspense fallback={<h1>Loading Banner</h1>}>
            <Banner />
            </Suspense>
            <Suspense fallback={<h1>Loading Overview</h1>}>
            <About />
            </Suspense>
            <Suspense fallback={<h1>Loading CTA</h1>}>
            <CtaComponent />
            </Suspense>
              <Suspense fallback={<h1>Project Hightlights</h1>}>
            <ProjectHightlights />
            </Suspense>
            
    </>


}
export default Home;