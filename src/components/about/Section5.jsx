import Image from 'next/image'
import React from 'react'

const Section5 = () => {
  return (
    <div className='px-[2.5vw] sm:px-[4vw] md:px-[4vw] flex sm:flex-col md:flex-col justify-between w-full min-h-screen py-[4vw] sm:gap-[15vw] md:gap-[6vw] gap-[.5vw]'>
       <div className='w-full  h-[100vh] sm:h-fit md:h-fit'>
        <div className="w-full sm:h-[40%] md:h-[40%] h-[40%]  flex flex-col justify-between pr-[5vw] sm:pb-[5vw] md:pb-[5vw] pb-[1.2vw]">
          <h2 className='sm:text-[7vw] md:text-[5vw] text-[3vw] leading-tight sm:mb-[6vw]'>Precision and Innovation Across Two Advanced Units.</h2>
          <div>
          <p className='sm:text-[6vw] md:text-[3vw] md:mt-[2vw] text-[1.5vw]'><strong>Unit 1</strong></p>
          <h4 className='sm:text-[4.5vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.8vw] text-[1vw] sm:mt-[2.5vw] md:mt-[2.5vw]'>Designed for precision and efficiency, Unit 1 is our foundation for high-quality API manufacturing. Equipped with advanced technology and rigorous quality control, it drives our commitment to excellence in pharmaceutical production.</h4>
          </div>
         </div>
        <div className="w-full sm:h-[35vh] md:h-[35vh] lg:h-[40vh] lg:mt-[8vw] h-[60%] bg-zinc-200 rounded-md overflow-hidden">
        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/unit1.png" alt='unit-image'/>
        </div>
      </div>
      <div className='w-full  h-[100vh] sm:h-fit md:h-fit'>
        <div className="w-full sm:h-[40%] md:h-[30%] h-[40%]  flex flex-col  justify-end pr-[5vw] sm:pb-[5vw] md:pb-[5vw] pb-[1.2vw]">
          <p className='sm:text-[6vw] md:text-[3vw] text-[1.5vw]'><strong>Unit 2</strong></p>
          <h4 className='sm:text-[4.5vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.8vw] text-[1vw] sm:mt-[2.5vw] md:mt-[2.5vw]'>Unit 2 expands our capabilities with increased production capacity and cutting-edge innovation. Built to meet global standards, it strengthens our ability to deliver advanced pharmaceutical solutions to markets worldwide.</h4>
        </div>
        <div className="w-full sm:h-[35vh] md:h-[35vh] lg:h-[40vh] lg:mt-[8vw] h-[60%] bg-zinc-200 rounded-md overflow-hidden">
        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/unit2.jpg" alt='unit-image'/>
        </div>
      </div>
     
    </div>
  )
}

export default Section5