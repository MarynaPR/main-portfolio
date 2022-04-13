import './index.scss'
import LogoS from '../../../assets/images/globe-yellow.gif'
import DrawSVG from 'gsap/DrawSVGPlugin'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Logo() {

    const bgRef = useRef()
    const shapes = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVG)
        gsap.timeline()
            .to(shapes.current, {
                drawSVG: "100%",
                duration: 1,
                opacity: 1,
            },
            )
            .from(shapes.current, {
                drawSVG: "0%"
            },
                { duration: 0.1, drawSVG: "10%", immediateRender: false }, "+=0.1")
            .to(shapes.current, { duration: 1, drawSVG: "90% 100%", stagger: 0.5 })
            .to(shapes.current, { duration: 1, rotation: 360, scale: 0.5, drawSVG: "100%", stroke: "white", strokeWidth: 6, transformOrigin: "50% 50%" })
        gsap.fromTo(
            shapes.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4
            }
        )
    }, [])

    return (
        <div className='logo-container'
            ref={shapes}
        >
            <img className='solid-logo'
                src={LogoS}
                ref={bgRef}
                alt='developer' />
            <svg
                version="1.0"
                baseProfile="tiny"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px"
                width="559pt"
                height="897pt"
                viewBox="0 0 400 400"
            >
                <circle
                    src={LogoS}
                    fill="none"
                    cx="71.5"
                    cy="77.5"
                    r="51.5"
                    stroke="transparent"
                    stroke-width="5" />
            </svg>
        </div>
    )
}

export default Logo