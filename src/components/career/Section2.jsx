import React, { useState } from "react";
import PopupForm from "./PopupForm";

const Section2 = ({ sec2Ref }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const jobOpenings = [
    {
      id: 1,
      position: "HR & Administration - Asst. Manager",
      experience: "8 to 10 years (Pharma/Bulk Drugs)",
      skills:
        " Bachelor's Degree (Must), Specialization/Master's in Administration (preferred).",
      location: "Naidupetta, Andhra Pradesh",
    },
    {
      id: 2,
      position: "Quality Control – Asst. Manager",
      experience: "10-15 years (Pharma/Bulk Drugs)",
      skills: "B.Pharm/M.Pharm/M.Sc.,",
      location: "Naidupetta, Andhra Pradesh",
    },
    {
      id: 3,
      position: "Quality Control – Executive",
      experience: "4 to 8 Years",
      skills:
        "B.Pharm/M.Pharm/M.Sc., Knowledge of HPLC, GC. calibration of QC instruments, Sampling and analysis of Raw Material",
      location: "Naidupetta, Andhra Pradesh",
    },
    {
      id: 4,
      position: "Assistant Manager QC",
      experience: "7 to 10 Years in API Industry",
      skills: "GC & HPLC - Method Development and Validation",
      location: "Chennai",
    },
    {
      id: 5,
      position: "Marketing Executive - Finished Products",
      experience: "3 to 5 years",
      skills: "B. Com Graduate",
      location: "Chennai",
    },
    {
      id: 7,
      position: "Executive - Quality Assurance (1 Position)",
      experience: "10 to 15 years",
      skills:
        "B. Sc / M.Sc (Chemistry) Graduate with hands on experience in QA activities in Pharmaceutical Industry",
      location: "Industrial Park, Attivaram, Andhra Pradesh - 524421",
    },
    {
      id: 6,
      position: "Assistant Manager - Finance & Accounts",
      experience: "5 to 7 years",
      skills:
        "Responsible for overall Financial and Accounting functions including accounts finalization, taxation, audit and related regulatory compliance. Work experience in GST & Financial Accounting Knowledge is must - Preparation of GSTR 1, GSTR 3. Monthly TDS, GST payments, Calculations, reconciling and filling TDS and GST return, Making Quarterly TDS return statement and filling revise return if any. The candidate must have complete knowledge on Tally ERP-9 and MS Excel (Expert Level). Experience in Finalization of Accounts.",
      location: "Chennai",
    },
  ];

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
        <h1 className="sm:text-[7vw] md:text-[6vw] text-[3vw] font-semibold">
          Careers at Allastir
        </h1>

        <p className="text-zinc-700 sm:text-[4vw] md:text-[3vw] text-[1vw] mb-[2.5vw] w-[80%]">
          We’re always looking for passionate individuals to join our team.
        </p>

        {/* UPDATED GRID: ALWAYS 2 columns on desktop */}
        <div className="grid grid-cols-2 gap-[2vw]">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="border p-[2vw] rounded-xl shadow-sm hover:border-[#DD2B1C] transition"
            >
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

              <button
                onClick={() => handleApplyClick(job.position)}
                className="bg-[#DD2B1C]  text-white py-[.6vw] rounded-full font-semibold p-[2vw]  transition-all duration-75 relative mt-4"
              >
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
