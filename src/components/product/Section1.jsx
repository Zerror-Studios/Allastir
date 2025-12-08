import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section1 = ({ sec1Ref }) => {

  return (
    <div ref={sec1Ref} className='product-hero relative w-full sm:h-[35vh] md:h-[40vh] lg:h-[50vh] bg-black h-[60vh] flex flex-col items-center justify-center text-[15vw] font-bold uppercase'>
      <Image width={1000} height={1000} priority className='w-full h-full object-cover' src="/product-banner.jpg" alt="banner-image" />
      <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black/40'>
        <div className='sm:h-[10vw] md:h-[7vw] lg:h-[6vw] h-[4vw] overflow-hidden sm:mt-[70px] md:mt-[70px] lg:mt-[70px]'>
          <h2 className='sm:text-[10vw] md:text-[7vw] lg:text-[6vw] leading-none text-[4vw] text-white'>Our Products</h2>
        </div>
      </div>
    </div>
  )
}

export default Section1