import Link from 'next/link'
import React from 'react'

const Section6 = () => {
  return (
    <div className='w-full flex items-end justify-center px-[2.5vw] py-[4vw]'>
        <div className='contact-wrapper w-full sm:h-[15vh] h-[28vh] relative'>
            <video autoPlay muted loop playsInline className='w-full h-full object-cover' src="/videos/pharma.mp4"></video>
        <div className="video-overlay w-full h-full absolute top-0 left-0  flex items-center justify-center">
            <Link href="/contact" id='home-connect' className='text-white sm:text-[4vw] md:text-[3.7vw]text-[2vw] capitalize'>Contact Us</Link>
        </div>
        </div>

    </div>
  )
}

export default Section6