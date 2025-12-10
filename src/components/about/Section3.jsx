import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const bars = [
        { id: 1, target: "2 State of the Art Manufacturing facilities", title: "2 State of the Art Manufacturing facilities", description: "Our advanced manufacturing units, covering 225,000+ SQFT, ensure precision, efficiency, and scalability.", image:"/company-our-strengths.png" },
        { id: 2, target: "Associated with almost all Top Indian Pharmaceutical MNC’s", title: "Associated with almost all Top Indian Pharmaceutical MNC’s", description: "We collaborate with top Indian pharmaceutical MNCs, delivering high-quality API and formulations.", image:"/global-reach-our-strength.png" },
        { id: 3, target: "40 Finished formulation dossiers", title: "40 Finished formulation dossiers", description: "We have 14 APIs with DMF, 5 CDSCO-approved APIs, and 6 APIs with completed toxicology studies.", image:"/Regulatory Excellence.png" },
        { id: 4, target: "25 Niche API Products", title: "25 Niche API Products", description: "We have introduced 2 first-time-in-India APIs and have 6 niche API products currently under development.", image:"/Pioneering Innovation.png" },
        { id: 5, target: "14 API’s with DMF", title: "14 API’s with DMF", description: "We have introduced 2 first-time-in-India APIs and have 6 niche API products currently under development.", image:"/company-our-strengths.png" },
        { id: 6, target: "2 First time in India API’s", title: "2 First time in India API’s", description: "We have introduced 2 first-time-in-India APIs and have 6 niche API products currently under development.", image:"/product-our-strengths.png" },
        { id: 7, target: "5 API’s with CDSCO Approvals", title: "5 API’s with CDSCO Approvals", description: "We have introduced 2 first-time-in-India APIs and have 6 niche API products currently under development.", image:"/Regulatory Excellence.png" },
        { id: 8, target: "6 API’s with Toxicology Study", title: "6 API’s with Toxicology Study", description: "We have introduced 2 first-time-in-India APIs and have 6 niche API products currently under development.", image:"/global-reach-our-strength.png" },
        { id: 9, target: "6 Niche API’s under development", title: "6 Niche API’s under development", description: "We have introduced 2 first-time-in-India APIs and have 6 niche API products currently under development.", image:"/Pioneering Innovation.png" },
    ];

    return (
        <div className="w-full sm:min-h-fit md:min-h-fit  min-h-screen py-[2vw] flex flex-col items-center">
            <h1 className="sm:text-[10vw] md:text-[7vw] lg:text-[5vw] xl:text-[4vw] text-[3vw] font-semibold sm:mb-[6vw] md:mb-[6vw] mb-[3vw]">Our Strengths</h1>
            <div className="sm:w-[92%] md:w-[90%] lg:w-[90%] xl:w-[85%] w-[75%]">
                {bars.map((bar,i) => (
                    <div
                        key={bar.id}
                        className={`w-full relative border-t ${i === bars.length - 1 && "border-b"} sm:py-[4vw] md:py-[4vw] py-[.5vw] sm:h-[55vw] md:h-[45vw] lg:h-[28vw] xl:h-[20vw] h-[12vw] flex sm:flex-col md:flex-col justify-between border-gray-600 px-[1.7vw]`}
                    >
                        <div className="flex  w-full  sm:mt-[2vw] md:mt-[2vw] gap-[2vw] sm:items-start md:items-start items-center justify-between">
                            <Image
                            width={1000}
                            height={1000}
                                className="sm:hidden sm:w-[15vw] md:w-[15vw] lg:w-[8vw] xl:w-[6vw] w-[5vw] sm:absolute md:absolute sm:top-[10%] md:top-[10%] sm:right-0 md:right-0"
                                src={bar.image}
                                alt={bar.title}
                            />
                            <div className='sm:w-full w-[80%]'>
                                <h4 className=" lg:hidden sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2vw] mb-[2vw] text-[2vw] font-semibold">{bar.title}</h4>
                                <p className="sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2vw] text-[1vw] sm:font-normal font-semibold">{bar.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section3;
