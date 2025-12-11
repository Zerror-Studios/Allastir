import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Journey = () => {
  const timelineData = [
    {
      year: 2010,
      title: "Inception & R&D",
      description:
        "We founded Allastir with a vision to drive pharmaceutical innovation through dedicated research and development.",
      image: "/journey/image1.jpeg",
    },
    {
      year: 2012,
      title: "First API Launched",
      description:
        "We introduced our first API, LMF, marking the beginning of our journey as a key player in pharmaceutical manufacturing.",
      image: "/journey/image2.jpeg",
    },
    {
      year: 2014,
      title: "Expansion in API Portfolio",
      description:
        "We launched Vitamin K2-7 API, further strengthening our expertise in niche and specialized pharmaceutical ingredients.",
      image: "/journey/image3.jpeg",
    },
    {
      year: 2016,
      title: "Certified for Quality",
      description:
        "We obtained GMP and ISO certifications, ensuring our manufacturing processes align with global regulatory standards.",
      image: "/journey/image4.jpeg",
    },
    {
      year: 2018,
      title: "Regulatory Milestone",
      description:
        "We received CDSCO approval for Iguratimod and acquired land for the expansion of our second manufacturing facility.",
      image: "/journey/image5.jpeg",
    },
    {
      year: 2019,
      title: "Growth & Development",
      description:
        "We secured CDSCO approval for Fimasartan and initiated the construction of our second state-of-the-art manufacturing unit.",
      image: "/journey/image6.jpeg",
    },
    {
      year: 2020,
      title: "Global Expansion",
      description:
        "We began exporting APIs to international markets and registered our finished products for distribution in Myanmar.",
      image: "/journey/image7.jpeg",
    },
    {
      year: 2021,
      title: "Finished Product Market Entry",
      description:
        "We launched the export of finished pharmaceutical products and expanded our reach with registrations in Cambodia.",
      image: "/journey/image8.jpeg",
    },
    {
      year: 2025,
      title: "Entering Oncology Market",
      description:
        "We are expanding into the anti-cancer drug market with a focus on innovation and a projected revenue of $16 million.",
      image: "/journey/image10.jpeg",
    },
    {
      year: 2027,
      title: "Diversification & Growth",
      description:
        "We plan to enter the hormonal and OTC drug markets, strengthening our portfolio and targeting $40 million in revenue.",
      image: "/journey/image11.jpeg",
    },
  ];

  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-section",
        start: "top top",
        end: "top -550%",
        pin: true,
        scrub: 1,
        anticipatePin: 1, // Helps smoother transition
        invalidateOnRefresh: true, // Recalculates values on resize
      },
    });
    tl.add("year10")
      .to(
        ".timeline-strip",
        {
          height: "11%",
          duration: 1,
        },
        "s"
      )
      .to(
        ".present-year , .timeline-title",
        {
          transform: "translateY(-100%)",
          duration: 1,
        },
        "s"
      )
      .to(
        ".timeline-para1",
        {
          opacity: 0,
          duration: 1,
        },
        "s"
      )
      .to(
        ".tlig1",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
        },
        "s"
      )
      .to(
        ".tlig2",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        "s"
      )
      .to(".timeline-para2", {
        opacity: 1,
        duration: 0.3,
      })
      .to(
        ".dot-2",
        {
          backgroundColor: "#000",
        },
        "a"
      )
      .to(
        ".dot-out2",
        {
          scale: 1,
        },
        "a"
      )
      .to(
        ".year2",
        {
          color: "black",
        },
        "a"
      )
      .add("year2012")

      .to(
        ".timeline-strip",
        {
          height: "22%",
          duration: 1,
        },
        "s2"
      )
      .to(
        ".present-year , .timeline-title",
        {
          transform: "translateY(-200%)",
          duration: 1,
        },
        "s2"
      )
      .to(
        ".timeline-para2",
        {
          opacity: 0,
          duration: 1,
        },
        "s2"
      )
      .to(".timeline-para3", {
        opacity: 1,
        duration: 0.3,
      })
      .to(
        ".tlig2",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
        },
        "s2"
      )
      .to(
        ".tlig3",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        "s2"
      )
      .to(
        ".dot-3",
        {
          backgroundColor: "#000",
        },
        "b"
      )
      .to(
        ".dot-out3",
        {
          scale: 1,
        },
        "b"
      )
      .to(
        ".year3",
        {
          color: "black",
        },
        "b"
      )
      .add("year2014")

      .to(
        ".timeline-strip",
        {
          height: "33%",
          duration: 1,
        },
        "s3"
      )
      .to(
        ".present-year , .timeline-title",
        {
          transform: "translateY(-300%)",
          duration: 1,
        },
        "s3"
      )
      .to(
        ".timeline-para3",
        {
          opacity: 0,
          duration: 1,
        },
        "s3"
      )
      .to(".timeline-para4", {
        opacity: 1,
        duration: 0.3,
      })
      .to(
        ".tlig3",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
        },
        "s3"
      )
      .to(
        ".tlig4",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        "s3"
      )
      .to(
        ".dot-4",
        {
          backgroundColor: "#000",
        },
        "c"
      )
      .to(
        ".dot-out4",
        {
          scale: 1,
        },
        "c"
      )
      .to(
        ".year4",
        {
          color: "black",
        },
        "c"
      )
      .add("year2016")
      .to(
        ".timeline-strip",
        {
          height: "44%",
          duration: 1,
        },
        "s4"
      )
      .to(
        ".present-year , .timeline-title",
        {
          transform: "translateY(-400%)",
          duration: 1,
        },
        "s4"
      )
      .to(
        ".timeline-para4",
        {
          opacity: 0,
          duration: 1,
        },
        "s4"
      )
      .to(".timeline-para5", {
        opacity: 1,
        duration: 0.3,
      })
      .to(
        ".tlig4",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
        },
        "s4"
      )
      .to(
        ".tlig5",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        "s4"
      )
      .to(
        ".dot-5",
        {
          backgroundColor: "#000",
        },
        "d"
      )
      .to(
        ".dot-out5",
        {
          scale: 1,
        },
        "d"
      )
      .to(
        ".year5",
        {
          color: "black",
        },
        "d"
      )
      .add("year2018")

      .to(
        ".timeline-strip",
        {
          height: "55%",
          duration: 1,
        },
        "s5"
      )
      .to(
        ".present-year , .timeline-title",
        {
          transform: "translateY(-500%)",
          duration: 1,
        },
        "s5"
      )
      .to(
        ".timeline-para5",
        {
          opacity: 0,
          duration: 1,
        },
        "s5"
      )
      .to(".timeline-para6", {
        opacity: 1,
        duration: 0.3,
      })
      .to(
        ".tlig5",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
        },
        "s5"
      )
      .to(
        ".tlig6",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        "s5"
      )
      .to(
        ".dot-6",
        {
          backgroundColor: "#000",
        },
        "e"
      )
      .to(
        ".dot-out6",
        {
          scale: 1,
        },
        "e"
      )
      .to(
        ".year6",
        {
          color: "black",
        },
        "e"
      )
      .add("year2019")
      .to(
        ".timeline-strip",
        {
          height: "66%",
          duration: 1,
        },
        "s6"
      )
      .to(
        ".present-year , .timeline-title",
        {
          transform: "translateY(-600%)",
          duration: 1,
        },
        "s6"
      )
      .to(
        ".timeline-para6",
        {
          opacity: 0,
          duration: 1,
        },
        "s6"
      )
      .to(".timeline-para7", {
        opacity: 1,
        duration: 0.3,
      })
      .to(
        ".tlig6",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
        },
        "s6"
      )
      .to(
        ".tlig7",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        "s6"
      )
      .to(
        ".dot-7",
        {
          backgroundColor: "#000",
        },
        "f"
      )
      .to(
        ".dot-out7",
        {
          scale: 1,
        },
        "f"
      )
      .to(
        ".year7",
        {
          color: "black",
        },
        "f"
      )
      .add("year2020")

      .to(
        ".timeline-strip",
        {
          height: "77%",
          duration: 1,
        },
        "s7"
      )
      .to(
        ".present-year , .timeline-title",
        {
          transform: "translateY(-700%)",
          duration: 1,
        },
        "s7"
      )
      .to(
        ".timeline-para7",
        {
          opacity: 0,
          duration: 1,
        },
        "s7"
      )
      .to(".timeline-para8", {
        opacity: 1,
        duration: 0.3,
      })
      .to(
        ".tlig7",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
        },
        "s7"
      )
      .to(
        ".tlig8",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        "s7"
      )
      .to(
        ".dot-8",
        {
          backgroundColor: "#000",
        },
        "g"
      )
      .to(
        ".dot-out8",
        {
          scale: 1,
        },
        "g"
      )
      .to(
        ".year8",
        {
          color: "black",
        },
        "g"
      )
      .add("year2021")

      .to(
        ".timeline-strip",
        {
          height: "88%",
          duration: 1,
        },
        "s8"
      )
      .to(
        ".present-year , .timeline-title",
        {
          transform: "translateY(-800%)",
          duration: 1,
        },
        "s8"
      )
      .to(
        ".timeline-para8",
        {
          opacity: 0,
          duration: 1,
        },
        "s8"
      )
      .to(".timeline-para9", {
        opacity: 1,
        duration: 0.3,
      })
      .to(
        ".tlig8",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
        },
        "s8"
      )
      .to(
        ".tlig9",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        "s8"
      )
      .to(
        ".dot-9",
        {
          backgroundColor: "#000",
        },
        "h"
      )
      .to(
        ".dot-out9",
        {
          scale: 1,
        },
        "h"
      )
      .to(
        ".year9",
        {
          color: "black",
        },
        "h"
      )
      .add("year2025")

      .to(
        ".timeline-strip",
        {
          height: "100%",
          duration: 1,
        },
        "s10"
      )
      .to(
        ".present-year , .timeline-title",
        {
          transform: "translateY(-900%)",
          duration: 1,
        },
        "s10"
      )
      .to(
        ".timeline-para10",
        {
          opacity: 0,
          duration: 1,
        },
        "s10"
      )
      .to(".timeline-para11", {
        opacity: 1,
        duration: 0.3,
      })
      .to(
        ".tlig10",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
        },
        "s10"
      )
      .to(
        ".tlig11",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        "s10"
      )
      .to(
        ".dot-11",
        {
          backgroundColor: "#000",
        },
        "j"
      )
      .to(
        ".dot-out11",
        {
          scale: 1,
        },
        "j"
      )
      .to(
        ".year10",
        {
          color: "black",
        },
        "j"
      )
      .add("year2027");

    const yearProgressMap = {
      year2010: tl.labels["year2010"] / tl.duration(),
      year2012: tl.labels["year2012"] / tl.duration(),
      year2014: tl.labels["year2014"] / tl.duration(),
      year2016: tl.labels["year2016"] / tl.duration(),
      year2018: tl.labels["year2018"] / tl.duration(),
      year2019: tl.labels["year2019"] / tl.duration(),
      year2020: tl.labels["year2020"] / tl.duration(),
      year2021: tl.labels["year2021"] / tl.duration(),
      year2025: tl.labels["year2025"] / tl.duration(),
      year2027: tl.labels["year2027"] / tl.duration(),
    };

    ScrollTrigger.addEventListener("refreshInit", () => {
      document.querySelectorAll("h2[data-year]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const year = btn.dataset.year;
          const progress = yearProgressMap[year];
          const st = tl.scrollTrigger;

          if (!st) {
            console.error("ScrollTrigger not attached to timeline.");
            return;
          }

          const scrollToY = st.start + (st.end - st.start) * progress;

          gsap.to(window, {
            scrollTo: { y: scrollToY },
            duration: 1,
            ease: "power2.out",
          });
        });
      });
    });

    ScrollTrigger.refresh();

    return () => {
      // Cleanup function to remove timeline and all ScrollTrigger instances
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh();
    };
  }, []);
  return (
    <div className="timeline-section w-full  h-[100vh]  flex sm:flex-col md:flex-col lg:flex-col lg:gap-[5vw] sm:justify-center md:justify-center lg:justify-center items-center">
      <div className="sm:w-full md:w-full lg:w-full w-[42%] sm:h-[50vh] md:h-[43vh] lg:h-[43vh]  h-full  flex flex-col justify-center sm:justify-between pl-[2.5vw] sm:pl-[4vw] md:pl-[4vw] lg:pl-[4vw] xl:pt-[15vw] sm:pt-[15vw]  pt-[6vw] py-[1vw]">
        <h2 className="sm:text-[10vw] md:text-[7vw] lg:text-[7vw] text-[3vw] font-semibold  mb-[1vw] capitalize leading-[.7]">
          Our Journey
        </h2>

        <div className="w-full sm:h-[20vh] h-fit sm:flex flex-col justify-between">
          <div className="sm:h-[18.5vw] md:h-[12.5vw] lg:h-[9vw] h-[10vw] w-fit overflow-hidden ">
            {timelineData.map((data, i) => (
              <h1
                key={i}
                className="present-year sm:text-[12vw] md:text-[12vw] lg:text-[8vw] text-[10vw] font-semibold leading-none"
              >
                {data.year}
              </h1>
            ))}
          </div>
          <div className="hidden w-full h-[60%] sm:h-[100%] sm:flex flex-col justify-end sm:mb-[5vw] md:mb-[5vw] lg:mb-[5vw]">
            <div className="sm:h-[8.5vw] md:h-[6vw] lg:h-[6vw] xl:h-[4vw] h-[4vw] w-fit overflow-hidden sm:mb-[3vw] md:mb-[3vw] lg:mb-[3vw] xl:mb-[3vw]">
              {timelineData.map((data, i) => (
                <h2
                  key={i}
                  className="timeline-title leading-1 whitespace-nowrap sm:text-[5vw] md:text-[4vw] lg:text-[4vw]  xl:text-[2.5vw]  text-[2.3vw] capitalize"
                >
                  {data.title}
                </h2>
              ))}
            </div>
            <div className="w-full relative h-[40%]">
              {timelineData.map((data, i) => (
                <p
                  key={i}
                  className={` timeline-para${i + 1} ${
                    i === 0 ? "" : "opacity-0"
                  } absolute w-[90%] lg:w-[70%] sm:text-[4.5vw]  md:text-[3.7vw] lg:text-[2.5vw] xl:text-[1.8vw]  text-[1vw] leading-1 text-[#80868B]`}
                >
                  {data.description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-full md:w-full lg:w-full w-[57%] relative  sm:h-fit md:h-fit lg:h-fit sm:px-[4vw] md:px-[4vw] lg:px-[4vw] sm:pt-[0] md:pt-[0] lg:pt-[0] xl:pt-[15vw]  pt-[6vw]">
        <div className="w-full sm:h-[38vh] md:h-[38vh] lg:h-[38vh]  h-[80vh] flex justify-between items-end pb-[1vw] sm:pb-[2vw] md:pb-[2vw] lg:pb-[2vw] sm:mt-[0vw] md:mt-[0vw] lg:mt-[0vw]">
          <div className="timeline w-[15%] sm:hidden md:hidden lg:hidden h-full relative   sm:absolute sm:rotate-[-90deg] sm:top-[-45%] sm:left-1/2 sm:-translate-x-1/2 flex items-center">
            <div className="w-[1px] sm:h-[89vw] h-[75.5vh] bg-zinc-300">
              <div className="timeline-strip w-full h-0 bg-[#000]"></div>
            </div>
            <div className="w-full sm:h-[89vw]  h-full flex flex-col text-zinc-400 justify-between sm:pl-[0vw] pl-[1.2vw] sm:text-[4.5vw] text-[1.1vw]">
              {timelineData.map((item, i) => (
                <h2
                  key={i}
                  data-year={`year${item.year}`}
                  className={`year${i + 1} ${
                    i === 0 ? "text-black" : ""
                  } sm:relative sm:text-center sm:rotate-90 cursor-pointer ${
                    i % 2 !== 0 ? "sm:right-[100%]" : ""
                  }`}
                >
                  {item.year}
                </h2>
              ))}
            </div>
            <div className="w-[1.5vw] left-[-.75vw] sm:h-[92vw] h-full absolute top-0 sm:top-1/2 sm:-translate-y-1/2 flex flex-col justify-between items-center">
              <div className="dot1 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                <div className="dot-1 w-[35%] h-[35%] bg-[#000] rounded-full"></div>
                <div className="dot-out1 w-full h-full border border-[#000] scale-1 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full"></div>
              </div>
              <div className="dot2 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                <div className="dot-2 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                <div className="dot-out2 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full"></div>
              </div>
              <div className="dot3 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                <div className="dot-3 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                <div className="dot-out3 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full"></div>
              </div>
              <div className="dot4 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                <div className="dot-4 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                <div className="dot-out4 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full"></div>
              </div>
              <div className="dot5 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                <div className="dot-5 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                <div className="dot-out5 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full"></div>
              </div>
              <div className="dot6 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                <div className="dot-6 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                <div className="dot-out6 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full"></div>
              </div>
              <div className="dot7 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                <div className="dot-7 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                <div className="dot-out7 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full"></div>
              </div>
              <div className="dot8 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                <div className="dot-8 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                <div className="dot-out8 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full"></div>
              </div>
              <div className="dot9 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                <div className="dot-9 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                <div className="dot-out9 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full"></div>
              </div>
              <div className="dot11 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                <div className="dot-11 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                <div className="dot-out11 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-full lg:w-full w-[89%] sm:h-[80%] md:h-[100%] lg:h-[95%] h-full relative rounded-lg overflow-hidden">
            {timelineData.map((data, index) => (
              <div
                key={index}
                className={`tlig${
                  index + 1
                } w-full h-full object-cover absolute top-0 left-0 flex items-center justify-center`}
                style={{
                  clipPath:
                    index === 0
                      ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                      : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <Image
                  width={1000}
                  height={1000}
                  key={index}
                  className={`w-full h-full object-cover`}
                  src={data.image}
                  alt={`Image ${index + 1}`}
                />
                <div
                  style={{
                    background:
                      "linear-gradient(to bottom , transparent , black)",
                  }}
                  className="sm:hidden w-full h-full absolute top-0 left-0 flex flex-col justify-end p-[2vw]"
                >
                  <div className="sm:h-[8.5vw] md:h-[4vw] lg:h-[6vw] xl:h-[4vw] h-[4vw] w-fit overflow-hidden sm:mb-[3vw] md:mb-[3vw] lg:mb-[3vw] xl:mb-[3vw]">
                    {timelineData.map((data, i) => (
                      <h2
                        key={i}
                        className="timeline-title text-white leading-1 whitespace-nowrap sm:text-[5vw] md:text-[3vw] lg:text-[4vw]  xl:text-[2.5vw]  text-[2.3vw] capitalize"
                      >
                        {data.title}
                      </h2>
                    ))}
                  </div>
                  <div className="relative md:h-[30%] h-[15%] w-[70%]">
                    {timelineData.map((data, i) => (
                      <p
                        key={i}
                        className={` timeline-para${i + 1} ${
                          i === 0 ? "" : "opacity-0"
                        } text-white absolute w-[90%] lg:w-[70%] sm:text-[4.5vw]  md:text-[2vw] lg:text-[2.5vw] xl:text-[1.8vw]  text-[1vw] leading-1`}
                      >
                        {data.description}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
