import React, { useState } from "react";
import PopupForm from "./PopupForm";
import { jobOpenings } from "@/helpers/careerData";

const Section2 = ({ sec2Ref }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setShowPopup(true);
  };

  return (
    <>
      <div
        ref={sec2Ref}
        className="w-full min-h-screen sm:p-[20px] sm:py-[10vw] p-[11%] py-[6vw] bg-white"
      >
        <h1 className="sm:font-semibold sm:text-[7vw] md:text-[7vw] text-[3vw] sm:mb-[3vw] capitalize leading-none">
          Careers at Allastir
        </h1>
        <p className="sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.2vw] sm:w-full md:w-full text-[1vw] w-[80%] sm:my-[4.5vw] md:my-[4.5vw] lg:my-[4.5vw] my-[1vw] leading-1">
          We’re always looking for passionate individuals to join our team.
          <br className="sm:hidden" /> If you don’t see a suitable opening
          listed below, feel free to share your resume at{" "}
          <a href="mailto:career@gmail.com">
            <strong>career@allastir.com</strong>
          </a>
          .
        </p>

        {/* UPDATED GRID: ALWAYS 2 columns on desktop */}
        <div className="grid sm:grid-cols-1 grid-cols-2 sm:gap-[4vw] gap-[2vw]">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="border sm:p-[5vw] p-[2vw] rounded-xl flex flex-col justify-between shadow-sm hover:border-[#DD2B1C] transition"
            >
              <div>
                <h2 className="text-[1.5vw] sm:text-[5vw] font-bold mb-2">
                  {job.position}
                </h2>

                <p className="text-zinc-700 text-[1vw] sm:text-[4vw]">
                  <strong>Experience:</strong> {job.experience}
                </p>

                <p className="text-zinc-700 text-[1vw] sm:text-[4vw] mt-1">
                  <strong>Skills:</strong> {job.skills}
                </p>

                <p className="text-zinc-700 text-[1vw] sm:text-[4vw] mt-1">
                  <strong>Location:</strong> {job.location}
                </p>
              </div>

              <button
                onClick={() => handleApplyClick(job.position)}
                className="
          text-center sm:text-[12px] text-[14px] sm:py-[12px] py-[12px] sm:px-[20px]  px-[30px]
                font-semibold rounded-full border border-gray-300 cursor-pointer
           bg-[#DD2B1C] text-white sm:w-full w-fit mt-4"
              >
                {" "}
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <PopupForm
          position={selectedPosition}
          closePopup={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default Section2;
