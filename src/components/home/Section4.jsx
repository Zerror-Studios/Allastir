import Image from "next/image";
import Link from "next/link";
import React from "react";
const Section4 = ({ products }) => {
  return (
    <div className="w-full sm:h-[35vh] md:h-[40vh] sm:pb-[10vw] md:pb-[10vw] pt-[6vw] h-[63vh] flex  flex-col">
      <h2 className="sm:text-[10vw] md:text-[7vw] lg:text-[5vw] text-[3vw] xl:text-[5vw] font-semibold sm:mb-[3vw] sm:mt-[2vw]  mb-[2vw] text-center">
        Our Products
      </h2>
      <div className="product-marquee-main w-full sm:h-[60vw] md:h-[60vw]  h-[45vh]  flex items-center overflow-hidden">
        <div className="product-marquee mq1 w-fit h-full flex items-start sm:gap-[1vw] md:gap-[1vw] gap-[.5vw] px-[.25vw]">
          {products.map((data, i) => (
            <Link
              key={i}
              href="/product"
              className="mq-card relative overflow-hidden group border-gray-500 sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[15vw] h-full"
            >
              {/* Default View */}
              <div className="card-front absolute top-0 left-0 w-full h-full z-10 transition-transform duration-500">
                <div className="w-full h-[85%] rounded overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-[80%] h-full object-contain"
                    src={data.product[0].image}
                    alt="product-image"
                  />
                </div>
                <div className="flex gap-[.5vw] items-center h-[10%] sm:h-[15%] px-[.5vw]">
                  <span className="relative h-full flex overflow-hidden items-center">
                    <h3 className="sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.85vw] group-hover:text-[.9vw] capitalize font-semibold whitespace-nowrap">
                      {data.title.charAt(0) + data.title.slice(1).toLowerCase()}
                    </h3>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="product-marquee mq2 w-fit h-full flex items-start sm:gap-[1vw] md:gap-[1vw] gap-[.5vw] px-[.25vw]">
          {products.map((data, i) => (
            <Link
              key={i}
              href="/product"
              className="mq-card relative overflow-hidden group border-gray-500 sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[15vw] h-full"
            >
              {/* Default View */}
              <div className="card-front absolute top-0 left-0 w-full h-full z-10 transition-transform duration-500">
                <div className="w-full h-[85%] rounded overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                    src={data.product[0].image}
                    alt="product-image"
                  />
                </div>
                <div className="flex gap-[.5vw] items-center h-[10%] sm:h-[15%] px-[.5vw]">
                  <span className="sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full"></span>
                  <span className="relative h-full flex overflow-hidden items-center">
                    <h3 className="sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.85vw] capitalize font-semibold whitespace-nowrap">
                      {data.title.charAt(0) + data.title.slice(1).toLowerCase()}
                    </h3>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
