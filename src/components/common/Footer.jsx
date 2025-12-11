import { menus } from "@/helpers/MenuData";
import useBrochureStore from "@/stores/brochureStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  const { openPopup } = useBrochureStore();

  return (
    <div className="w-full bg-[#DD2B1C]  text-white  h-[auto] p-[4vw] sm:p-[4vw] md:p-[4vw] lg:p-[4vw] sm:pb-[8vw] md:pb-[4vw] lg:pb-[4vw] px-[2.5vw]">
      <div className="w-full h-full flex sm:flex-col md:flex-col lg:flex-col sm:justify-between md:justify-between lg:justify-between justify-between">
        <div className="sm:w-full lg:w-full md:w-full sm:h-fit lg:h-fit md:h-fit h-full flex flex-col justify-between">
          <Link href="/" className="sm:hidden">
            <Image
              width={1000}
              height={1000}
              className="w-[200px] h-auto filter invert brightness-0"
              src="/footer-log.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="sm:w-full  lg:w-full md:w-full xl:w-[85%] w-[55%] xl:flex-wrap sm:h-fit lg:h-fit md:h-fit h-full xl:h-[60%] sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.8vw] xl:text-[1.8vw]  flex sm:flex-wrap  md:flex-wrap lg:flex-wrap sm:mt-[10vw] md:mt-[10vw]  lg:mt-[10vw] capitalize sm:justify-between md:justify-between lg:justify-between justify-between">
          <div className="sm:w-[48%] md:w-[48%] lg:w-[48%] w-[15%] sm:h-fit lg:h-fit md:h-fit h-full flex flex-col sm:gap-[4vw] lg:gap-[2vw] xl:gap-[1vw]  gap-[1vw]">
            <h2 className="sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.8vw] xl:text-[1.8vw]  text-[1.1vw]">
              <strong>Quick Link</strong>
            </h2>
            <div className="flex flex-col gap-[.5vw] sm:h-fit lg:h-fit md:h-fit h-[70%]">
              {menus.map(({ path, name }, index) =>
                name === "Brochure" ? (
                  <span
                    key={index}
                    onClick={openPopup}
                    className="cursor-pointer hover:text-gray-300 w-fit"
                  >
                    {name}
                  </span>
                ) : (
                  <Link
                    key={index}
                    href={path}
                    className={`${
                      router.pathname === path
                        ? "font-bold "
                        : "hover:text-gray-300 "
                    } w-fit`}
                  >
                    {name}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="sm:w-full md:w-full lg:w-full shrink-0 xl:w-[100%] w-[33.3%] sm:h-fit lg:h-fit md:h-fit sm:mt-[5vh] md:mt-[10vh] lg:mt-[10vh] h-full flex flex-col sm:gap-[4vw] lg:gap-[2vw] md:gap-[4vw] gap-[1vw]">
            <h2 className="sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.8vw] xl:text-[1.8vw]  text-[1.1vw]">
              <strong>Unit 1</strong>
            </h2>
            <div className="flex flex-col xl:flex-row sm:gap-[4vw] md:gap-[4vw] lg:gap-[2vw] gap-[.5vw] sm:h-fit lg:h-fit md:h-fit h-[70%]">
              <span>
                <strong>Address : </strong>{" "}
                <a
                  href="https://www.google.com/maps/place/Allastir+Private+Limited/@13.2049661,80.2602679,17z/data=!3m1!4b1!4m6!3m5!1s0x3a527bd3e5162223:0xf46d6c8e7f745a4b!8m2!3d13.2049661!4d80.2628428!16s%2Fg%2F11fv45s00w?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                  target="_blank"
                  className="hover:text-gray-300 sm:text-[4vw]"
                >
                  Plot No. 12, Shed No. 9A, Sidco Industrial Estate, Vichoor,
                  Manali New Town, Chennai - 600103, Tamilnadu, INDIA
                </a>
              </span>
              <span>
                <strong>E-Mail : </strong>{" "}
                <a
                  target="_blank"
                  href="mailto:sales@allastir.com"
                  className="hover:text-gray-300 lowercase sm:text-[4vw]"
                >
                  sales@allastir.com
                </a>
              </span>
              <span>
                <strong>Mobile No. : </strong>{" "}
                <a
                  target="_blank"
                  href="tel:+91-97910 39207"
                  className="hover:text-gray-300 lowercase sm:text-[4vw]"
                >
                  +91-97910 39207
                </a>
              </span>
              <span>
                <strong>Telephone No. : </strong>{" "}
                <a
                  target="_blank"
                  href="tel:+91-98400 51621"
                  className="hover:text-gray-300 lowercase sm:text-[4vw]"
                >
                  +91-98400 51621
                </a>
              </span>
            </div>

            <div className="sm:hidden w-full flex flex-col sm:mt-[7vw]">
              <p className="sm:block lg:block md:block hidden text-[3.5vw] lg:text-[2vw] opacity-[.8]">
                All Rights Reserved © Allastir Pvt. Ltd.
              </p>
              <p className="sm:block lg:block md:block hidden text-[3.5vw] lg:text-[2vw]">
                <span className="opacity-[.8]">Developed by</span>{" "}
                <a
                  target="_blank"
                  href="https://www.zerrorstudios.com/"
                  className="text-white font-semibold"
                >
                  Zerror Studios
                </a>
              </p>
              <div></div>
            </div>
          </div>
          <div className="sm:w-full md:w-full lg:w-full shrink-0 xl:w-[100%] w-[33.3%] sm:h-fit lg:h-fit md:h-fit sm:mt-[5vh] md:mt-[10vh] lg:mt-[10vh] h-full flex flex-col sm:gap-[4vw] lg:gap-[2vw] md:gap-[4vw] gap-[1vw]">
            <h2 className="sm:hidden sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.8vw] xl:text-[1.8vw]  text-[1.1vw]">
              <strong>Unit 2</strong>
            </h2>
            <div className="flex flex-col xl:flex-row sm:gap-[4vw] md:gap-[4vw] lg:gap-[2vw] gap-[.5vw] sm:h-fit lg:h-fit md:h-fit h-[70%]">
              <span>
                <strong>Address : </strong>{" "}
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/j87WGfps9Go8yHrz7"
                  className="hover:text-gray-300 sm:text-[4vw]"
                >
                  Plot No. 8-7, 8-8, 8-17, 8-18, APIIC Industrial Park,
                  Attivaram Village, Ozili Mandal, Tirupati District, Andhra
                  Pradesh -524 421.
                </a>
              </span>
              <span>
                <strong>E-Mail : </strong>{" "}
                <a
                  target="_blank"
                  href="mailto:sales@allastir.com"
                  className="hover:text-gray-300 lowercase sm:text-[4vw]"
                >
                  sales@allastir.com
                </a>
              </span>
              <span>
                <strong>Mobile No. : </strong>{" "}
                <a
                  target="_blank"
                  href="tel:+91-97910 39207"
                  className="hover:text-gray-300 lowercase sm:text-[4vw]"
                >
                  +91-97910 39207
                </a>
              </span>
              <span>
                <strong>Telephone No. : </strong>{" "}
                <a
                  target="_blank"
                  href="tel:+91-98400 51621"
                  className="hover:text-gray-300 lowercase sm:text-[4vw]"
                >
                  +91-98400 51621
                </a>
              </span>
            </div>

            <div className="sm:hidden w-full flex flex-col sm:mt-[7vw]">
              <p className="sm:hidden lg:hidden md:hidden hidden text-[3.5vw] lg:text-[2vw] opacity-[.8]">
                All Rights Reserved © Allastir Pvt. Ltd.
              </p>
              <p className="sm:hidden lg:hidden md:hidden hidden text-[3.5vw] lg:text-[2vw]">
                <span className="opacity-[.8]">Developed by</span>{" "}
                <a
                  target="_blank"
                  href="https://www.zerrorstudios.com/"
                  className="text-white font-semibold"
                >
                  Zerror Studios
                </a>
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-ful flex justify-between items-end sm:flex-col-reverse sm:items-start sm:gap-[5vw] sm:mt-[5vw] mt-[5vw]">
        <div>
          <p className="sm:text-[3.5vw] lg:text-[2vw] xl:text-[1.5vw] text-[.8vw] opacity-[.9]">
            All Rights Reserved © Allastir Pvt. Ltd.
          </p>
          <p className="sm:text-[3.5vw] lg:text-[2vw] xl:text-[1.5vw] text-[.8vw]">
            <span className="opacity-[.9] text-white">Developed by</span>{" "}
            <a
              target="_blank"
              href="https://www.zerrorstudios.com/"
              className="text-white font-bold"
            >
              Zerror Studios
            </a>
          </p>
        </div>
        <div className="flex gap-[3vw] sm:gap-[5vw] md:gap-[3vw] lg:gap-[3vw] sm:text-[3.5vw] lg:text-[2vw] xl:text-[1.5vw] text-[.8vw]">
          <Link href="/" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
