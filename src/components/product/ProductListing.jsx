import Image from "next/image";
import React, { useState, useEffect } from "react";
import Cart from "../common/Cart";

const ProductListing = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Local state for Cart
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToBag = (product) => {
    setSelectedProduct(product);
    setIsCartOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // tailwind 'sm'
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-fit sm:p-[20px] sm:py-[10vw] p-[11%] py-[6vw] pb-[0vw]">
      <h2 className="sm:text-[7vw] md:text-[7vw] text-[3vw] leading-tight sm:mb-[6vw] mb-[6vw]">
        Advanced facilities built for quality. <br />
        Experts in niche and high-value APIs.
      </h2>

      {/* Mobile Accordion */}
      {isMobile ? (
        <div className="w-full">
          {products.slice(0, 8).map((productCategory, i) => (
            <div key={i} className="mb-4 border rounded-xl overflow-hidden">
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev === i ? null : i))
                }
                className={`w-full text-left px-4 py-3 font-semibold text-[4.2vw]  ${
                  activeIndex === i ? "bg-[#DD2B1C] text-white" : "bg-gray-100"
                }`}
              >
                {productCategory.title}
              </button>

              {activeIndex === i && (
                <div className="grid grid-cols-1 gap-4 p-4 bg-white">
                  {productCategory.product.map((product, idx) => (
                    <div
                      key={idx}
                      className="relative bg-white rounded-xl border border-gray-300 p-4"
                    >
                      <Image
                        width={1000}
                        height={1000}
                        src={product.image}
                        alt={product.title}
                        className="w-full h-[160px] object-contain rounded-lg mb-4 grayscale"
                      />
                      <h3 className="text-lg font-semibold mb-2 text-center">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-900 mb-2 text-center">
                        {product.description}
                      </p>
                      <p className="text-[3.5vw] text-gray-600 mb-4 text-center">
                        Chlorphenamine maleate is a part of a series of
                        antihistamines...
                      </p>
                      <div className="text-center">
                        <button
                          onClick={() => handleAddToBag(product)}
                          className="px-4 py-2 text-[3.5vw] bg-[#DD2B1C] text-white rounded-full"
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        // Desktop Grid Layout
        <div className="flex items-start justify-between pb-[8vw]">
          <div
            id="scroll-bar"
            className="w-[20%] h-[calc(100vh-10vw)] pr-2 overflow-auto"
            data-lenis-prevent
          >
            <ul>
              {products.map((product, i) => (
                <li
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`mb-[16px] text-center text-[14px]  py-[13px] font-semibold rounded-full border border-gray-300 cursor-pointer transition 
                                        ${
                                          activeIndex === i
                                            ? " text-white bg-[#DD2B1C]"
                                            : "bg-gray-100/50 text-black"
                                        } hover:bg-[#DD2B1C] hover:text-white`}
                >
                  {product.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[80%] px-[1%] grid grid-cols-3 gap-8">
            {products[activeIndex]?.product.map((product, i) => (
              <div
                key={i}
                className="product-card-hover relative bg-white rounded-xl  border hover:border-[#DD2B1C] border-gray-300 p-4 overflow-hidden"
                onMouseEnter={(e) => {
                  const btn =
                    e.currentTarget.querySelector(".product-card-btn");
                  btn.classList.remove("opacity-0", "translate-y-10");
                  btn.classList.add("opacity-100", "translate-y-0");
                }}
                onMouseLeave={(e) => {
                  const btn =
                    e.currentTarget.querySelector(".product-card-btn");
                  btn.classList.remove("opacity-100", "translate-y-0");
                  btn.classList.add("opacity-0", "translate-y-10");
                }}
              >
                <Image
                  width={1000}
                  height={1000}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[160px] object-contain rounded-lg mb-4 grayscale"
                />
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-900 mb-2 text-center">
                  {product.description}
                </p>
                <p className="sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2vw] xl:text-[1.8vw] text-[1vw]  text-gray-600 mb-16 text-center">
                  Chlorphenamine maleate is a part of a series of
                  antihistamines...
                </p>

                <div className="product-card-btn absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition-all duration-300">
                  <button
                    onClick={() => handleAddToBag(product)}
                    className="px-4 py-2 sm:text-[4.4vw] md:text-[3.6vw] lg:text-[1.9vw] xl:text-[1.7vw] text-[.9vw] bg-[#DD2B1C] text-white rounded-full"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Background */}
      <div className="w-[170%] h-[120vh] -z-10 absolute left-[40%] -translate-x-1/2 top-[-5%]">
        <Image
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center"
          src="https://www.supriyalifescience.com/assets/images/bg/abstract3.svg"
          alt="bg-image"
        />
      </div>

      {/* Cart Component */}
      {isCartOpen && selectedProduct && (
        <Cart
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          productData={selectedProduct} // pass selected product
        />
      )}
    </div>
  );
};

export default ProductListing;
