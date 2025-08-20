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
import Footer from "../component/Footer";
import Tabs from "../utils/Tabs";
import { Helmet } from 'react-helmet-async';
import Gallery from "../component/Home/Gallery";
const Home = () => {
    return <>
              <Helmet>
             <title>Blue Lagoon Maldives | Luxury Beach Resort in Maldives</title>
              <meta name="keywords" content="Blue Lagoon Maldives, Maldives resorts, luxury beach resort Maldives, Maldives villas, water villas Maldives, honeymoon resorts Maldives, best resorts in Maldives, Maldives vacation" />
              <meta name="description" content=" Experience paradise at Blue Lagoon Maldives – luxury beach and water villas with stunning ocean views, world-class dining, and unforgettable island adventures." />
              <meta name="google-site-verification" content="ObKQScf_fxHfyTzt69kbO49KQL9uoIqtRO1mH-FccTY" />
              <link rel="canonical" href="https://www.bluelagoon.mv/" />
              <meta name="distribution" content="Global" />
              <meta name="Language" content="English" />
              <meta name="doc-type" content="Public" />
              <meta name="robots" content="index, follow" />
              <meta name="author" content="Blue Lagoon Maldives" />
              <meta name="googlebot" content="all, index, follow" />
              <meta name="YahooSeeker" content="all, index, follow" />
              <meta name="msnbot" content="all, index, follow" />
              <meta name="HandheldFriendly" content="true" />
              <meta name="revisit-after" content="1 days"/>
              <meta name="rating" content="safe for kids"/>
              <meta name="expires" content="never"/>
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Blue Lagoon Maldives | Luxury Beach Resort in Maldives" />
              <meta property="og:description" content="Discover Blue Lagoon Maldives – stunning villas, turquoise lagoons, pristine beaches, and a luxury escape like no other." />
              <meta property="og:url" content="https://www.bluelagoon.mv/" />
              <meta property="og:site_name" content="Blue Lagoon Maldives" />
              <meta property="og:image" content="https://www.bluelagoon.mv/assets/images/home/gallery/gallery_3.webp" />
              </Helmet>
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
            <Suspense fallback={<h1>Gallery</h1>}>
              <Gallery/>
            </Suspense>
             
            <Suspense fallback={<h1>Video CTA</h1>}>
              <VideoCta/>
            </Suspense>
            <Suspense fallback={<h1>Pdfs</h1>}>
              <Tabs/>
            </Suspense>
            <Suspense fallback={<h1>Video CTA</h1>}>
              <Form_sec/>
            </Suspense>
        
            
            </>

}
export default Home;