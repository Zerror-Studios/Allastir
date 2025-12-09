import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section2 = ({sec2Ref ,bluetxt , normaltxt}) => {
  useEffect(() => {
    gsap.to(".letters-wrapper span", {
      color: "#3D2E8D",
      stagger: .3,
      duration: 2,
      scrollTrigger: {
        trigger: ".letters-wrapper",
        start: "top 70%",
        end: "top 45%",
        scrub: 1
      }
    })

    ScrollTrigger.refresh()
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh()
    };

  }, [])
  return (
    <div ref={sec2Ref} className='sec2-h w-full  sm:h-auto md:h-auto lg:h-auto xl:h-auto sm:py-[20vw] md:py-[20vw] lg:py-[20vw] xl:py-[20vw] h-[80vh] sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.8vw] xl:text-[2.8vw] text-[2vw] flex flex-col items-center justify-center sm:px-[8vw] md:px-[6vw] px-[12.5vw] text-center'>
      <h2 className='text-[#3c2e8d76] leading-1 font-regular'><span className='text-[#3D2E8D]'>{bluetxt}</span><span className='letters-wrapper sm:text-black'> {normaltxt.split("").map((l, i) => <span key={i}>{l}</span>)}</span></h2>
    </div>
  )
}

export default Section2