import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (window.innerWidth < 600) {
      gsap.set(videoRef.current, { opacity: 0 });
      var tl = gsap.timeline();
      tl.to(videoRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power4.in",
        onComplete: () => {
          videoRef.current.play();
        },
      })
        .to(
          ".hero-txt1 , .hero-txt2",
          {
            transform: "translateY(0%)",
            duration: 0.3,
          },
          "a"
        )
        .to(
          ".hero-para",
          {
            opacity: 1,
            duration: 0.3,
          },
          "a"
        );
      ScrollTrigger.refresh();
      return;
    }
    gsap.set(videoRef.current, { opacity: 0 });
    var tl = gsap.timeline();
    tl.to(videoRef.current, {
      opacity: 1,
      duration: 0.2,
      ease: "power4.in",
      onComplete: () => {
        videoRef.current.play();
      },
    })
      .to(".hero-txt1 , .hero-txt2", {
        transform: "translateY(0%)",
        duration: 0.6,
      })
      .to(
        ".hero-para",
        {
          opacity: 1,
          duration: 0.2,
        },
        "a"
      );
    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div className="hero w-full h-screen relative overflow-hidden">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="w-full  h-[128vh] brightness-[70%] mt-[-4%] object-cover"
        src="/videos/hero_video.mp4"
      ></video>
      <div className="overlay-hero w-full h-full absolute top-0 left-0  text-white flex flex-col items-center justify-center">
        <div className="sm:hidden md:hidden lg:hidden  block overflow-hidden sm:h-[14vw] md:h-[12vw] xl:h-[7.2vw] lg:h-[9vw]  h-[5vw] font-semibold">
          <h1
            className="hero-txt1 sm:text-[11vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] text-[4vw] leading-none"
            style={{ transform: "translateY(130%)" }}
          >
            Innovation driven
          </h1>
        </div>
        <div className="sm:hidden md:hidden lg:hidden  block overflow-hidden sm:h-[14vw] md:h-[12vw] xl:h-[7.2vw] lg:h-[9vw] h-[5vw] font-semibold">
          <h1
            className="hero-txt2 sm:text-[11vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] text-[4vw] leading-none"
            style={{ transform: "translateY(130%)" }}
          >
            Pharmaceutical Manufacturer.
          </h1>
        </div>
        <div className="sm:block md:block lg:block hidden overflow-hidden sm:h-[14vw] md:h-[12vw] lg:h-[9vw] h-[5vw]">
          <h1
            className="hero-txt1 sm:text-[11vw] md:text-[9vw] lg:text-[7vw] text-[4vw] leading-none"
            style={{ transform: "translateY(130%)" }}
          >
            Innovation driven
          </h1>
        </div>
        <div className="sm:block md:block lg:block hidden overflow-hidden sm:h-[14vw] md:h-[12vw] lg:h-[9vw] h-[5vw]">
          <h1
            className="hero-txt2 sm:text-[11vw] md:text-[9vw] lg:text-[7vw] text-[4vw] leading-none"
            style={{ transform: "translateY(130%)" }}
          >
            Pharmaceutical
          </h1>
        </div>
        <div className="sm:block md:block lg:block hidden overflow-hidden sm:h-[14vw] md:h-[12vw] lg:h-[9vw] h-[5vw]">
          <h1
            className="hero-txt2 sm:text-[11vw] md:text-[9vw] lg:text-[7vw] text-[4vw] leading-none"
            style={{ transform: "translateY(130%)" }}
          >
            Manufacturer.
          </h1>
        </div>
        <div className="hero-para flex flex-col items-center justify-center sm:gap-[4vw] md:gap-[6vw] lg:gap-[6vw] xl:gap-[4vw] xl:mt-[4vw] gap-[1vw] sm:mt-[2.5vw] md:mt-[2.5vw] opacity-0">
          <p className="sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.8vw] xl:text-[2.5vw] text-[1.4vw] sm:w-[90%] md:w-[80%] w-[56%] text-center">
            Pioneering breakthroughs in healthcare with cutting-edge research
            and manufacturing.
          </p>
          <Link
            href="/contact"
            className="flex items-center justify-center sm:h-[8vw] h-[4vw]"
          >
            <div className="text-white sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.8vw] bg-[#DD2B1C] w-fit capitalize sm:px-[4.5vw] md:px-[3.7vw] lg:px-[3.7vw] xl:px-[3.7vw]  px-[1.5vw] hover:px-[2vw] hover:sm:px-[5vw] hover:md:px-[4vw] transition-all duration-500 cursor-pointer sm:py-[2vw] md:py-[1vw] xl:py-[1vw] py-[.6vw] hover:sm:py-[2.5vw] hover:md:py-[1.5vw] hover:py-[1vw] rounded-full">
              <h4>Contact Us</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
