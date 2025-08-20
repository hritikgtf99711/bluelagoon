import VideoCta from "../component/Home/VideoCta";
import Form_sec from "../component/Home/Form_sec";
import Banner from "../component/About/Banner";
import AboutContent from "../component/About/AboutContent";
import { Suspense } from "react";
import FounderSec from "../component/About/FounderSec";
import Footer from "../component/Footer";
import { Helmet } from 'react-helmet-async';
const About = () => {
    return <>
            <Helmet>
                <title>About Us | Blue Lagoon Maldives Luxury Resort</title>
                    <meta name="keywords" content="Discover Blue Lagoon Maldives – a luxury beach resort offering stunning water villas, romantic honeymoon stays, and unforgettable Maldives vacations." />
                    <meta name="description" content=" Learn more about Blue Lagoon Maldives – a luxury resort in the Maldives offering beachfront and overwater villas, fine dining, spa experiences, and unforgettable island adventures." />
                    <meta name="google-site-verification" content="ObKQScf_fxHfyTzt69kbO49KQL9uoIqtRO1mH-FccTY" />
                    <link rel="canonical" href="https://www.bluelagoon.mv/about" />
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
                    <meta property="og:title" content="About Blue Lagoon Maldives | Luxury Beach Resort" />
                    <meta property="og:description" content=" Discover the story of Blue Lagoon Maldives – luxury villas, turquoise lagoons, pristine beaches, and world-class hospitality." />
                    <meta property="og:url" content="https://www.bluelagoon.mv/about" />
                    <meta property="og:site_name" content="Blue Lagoon Maldives" />
                    <meta property="og:image" content="https://www.bluelagoon.mv/assets/images/home/gallery/gallery_3.webp" />
            </Helmet>
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
