import { useEffect, useRef } from 'react'
import Header from './component/Header';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { Outlet } from 'react-router';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Layout({ children }) {
    const smootherRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return

        const wrapper = document.querySelector('#smooth-wrapper')
        const content = document.querySelector('#smooth-content')

        if (wrapper && content && !ScrollSmoother.get()) {
            smootherRef.current = ScrollSmoother.create({
                wrapper: wrapper,
                content: content,
                smooth: 1.5,
                effects: true,
            })
        }

        return () => {
            if (smootherRef.current) {
                smootherRef.current.kill()
                smootherRef.current = null
            }
        }
    }, [])

    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div id="main-content">
                        <Header />
                        <Outlet />
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
