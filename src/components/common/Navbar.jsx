import { menus } from "@/helpers/MenuData";
import useBrochureStore from "@/stores/brochureStore";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Navbar = ({ navRef }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { openPopup } = useBrochureStore();

  const openSidebar = () => {
    if (open) {
      document.querySelector(".menu-icon").classList.remove("ri-close-line");
      document.querySelector(".menu-icon").classList.add("ri-menu-fill");
      gsap.to(".side-menu", {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(".side-menu", { pointerEvents: "none" });
        },
      });
      setOpen(false);
    } else {
      document.querySelector(".menu-icon").classList.add("ri-close-line");
      document.querySelector(".menu-icon").classList.remove("ri-menu-fill");
      gsap.to(".side-menu", {
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          gsap.set(".side-menu", { pointerEvents: "all" });
        },
      });
      setOpen(true);
    }
  };

  return (
    <div
      ref={navRef}
      className="w-full sm:px-[4vw] md:px-[4vw] lg:px-[4vw] px-[2.5vw] sm:py-[3.1vw] md:py-[3.1vw] lg:py-[3.1vw] py-[.8vw] text-black bg-white flex items-center justify-between fixed z-10 top-0 left-0"
      style={{ backdropFilter: "blur(40px)" }}
    >
      <Link href="/">
        <Image
          width={1000}
          height={1000}
          priority
          className="w-[200px] h-[60px] object-contain"
          src="/allastir_logo.webp"
          alt="logo"
        />
      </Link>

      {/* Desktop/Top Menu */}
      <div className="sm:hidden md:hidden lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 xl:text-[1.8vw] text-[1.1vw] font-regular capitalize -translate-y-1/2 flex items-center gap-[3vw]">
        {menus.map(({ path, name }, index) =>
          name === "Brochure" ? (
            <button
              key={index}
              onClick={openPopup}
              className="hover:text-[#E31E23] transition-all duration-75 relative cursor-pointer"
            >
              {name}
            </button>
          ) : (
            name !== "Contact" && (
              <Link
                key={index}
                href={path}
                className={`transition-all duration-75 relative ${
                  router.pathname === path ? "text-[#E31E23]" : "hover:text-[#E31E23]"
                }`}
              >
                {name}
              </Link>
            )
          )
        )}
      </div>

      <div className="flex items-center gap-[50px]">
        <Link
          href="/contact"
          className="sm:hidden md:hidden lg:hidden bg-[#DD2B1C] text-white py-[.6vw] rounded-full font-semibold p-[2vw] transition-all duration-75 relative"
        >
          Contact
        </Link>
        <i
          onClick={openSidebar}
          className="menu-icon cursor-pointer ri-menu-fill text-[5.5vw] lg:text-[3.3vw] sm:block md:block lg:block hidden font-semibold"
        ></i>
      </div>

      {/* Side Menu */}
      <div className="side-menu duration-300 w-[100%] sm:pt-[20vw] bg-white h-[90dvh] absolute top-[100%] opacity-0 pointer-events-none left-0 text-black sm:flex sm:flex-col sm:justify-between md:flex lg:flex hidden justify-end capitalize text-left text-[5.5vw] lg:text-[3.5vw]">
        <div className="w-full h-fit relative flex flex-col gap-[2vw] justify-center items-end bg-white p-[4vw]">
          {menus.map(({ path, name }, index) =>
            name === "Brochure" ? (
              <button
                key={index}
                onClick={() => {
                  openPopup();
                  openSidebar(); // close sidebar after opening popup
                }}
                className="hover:opacity-[.8] relative cursor-pointer"
              >
                {name}
              </button>
            ) : (
              <Link
                key={index}
                href={path}
                 onClick={() => {
                  openSidebar();
                }}
                className="hover:opacity-[.8] relative"
              >
                {name}
              </Link>
            )
          )}
        </div>
        <div className="w-full flex items-center justify-between text-[4.5vw] p-[4vw]">
          <p>Contact</p>
          <p><a href="mailto:sales@allastir.com">sales@allastir.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
