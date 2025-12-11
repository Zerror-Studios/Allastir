import Image from "next/image";
import React, { useState } from "react";
import Cart from "../common/Cart";
import ProductCard from "./ProductCard";

const ProductListing = ({ allCategories }) => {
  // Sort main categories alphabetically (skip "See All" for sorting)
  const sortedCategories = [...allCategories].sort((a, b) =>
    a.category.localeCompare(b.category)
  );
  const MAIN_TABS = ["See All", ...sortedCategories.map((c) => c.category)];

  const [activeMainIndex, setActiveMainIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToBag = (product) => {
    setSelectedProduct(product);
    setIsCartOpen(true);
  };

  const allProducts = sortedCategories.flatMap((cat) =>
    cat.data.flatMap((sub) => sub.product)
  );

  const currentCategory =
    activeMainIndex !== 0 ? sortedCategories[activeMainIndex - 1] : null;

  // Sort subcategories alphabetically
  const currentSubCategory = currentCategory
    ? [...currentCategory.data].sort((a, b) => a.title.localeCompare(b.title))[
        activeSubIndex
      ]
    : null;

  const currentSubCategories = currentCategory
    ? [...currentCategory.data].sort((a, b) => a.title.localeCompare(b.title))
    : [];

  return (
    <div className="relative w-full min-h-fit p-[11%] py-[6vw] sm:p-[20px] md:p-[4vw] sm:py-[10vw]">
      {/* 🌟 PAGE HEADING */}
      <h2 className="text-[3vw] leading-tight sm:mb-[8vw] md:mt-[2vw] md:mb-[4vw] mb-[3vw] sm:text-[6vw] md:text-[5vw]">
        Advanced facilities built for quality. <br className="sm:hidden md:hidden" />
        Experts in niche and high-value APIs.
      </h2>

      {/* MAIN TABS */}
      <div
        id="main-scroll"
        className="w-full mb-2 overflow-auto"
        data-lenis-prevent
      >
        <ul className="flex gap-2">
          {MAIN_TABS.map((tab, i) => (
            <li
              key={i}
              onClick={() => {
                setActiveMainIndex(i);
                setActiveSubIndex(0);
              }}
              className={`mb-[16px] shrink-0 text-center sm:text-[12px] text-[14px] sm:py-[12px] py-[12px] sm:px-[20px]  px-[30px] 
                font-semibold rounded-full border border-gray-300 cursor-pointer transition
                ${
                  activeMainIndex === i
                    ? "text-white bg-[#DD2B1C]"
                    : "bg-gray-100/50 text-black"
                }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* SUB CATEGORY TABS */}
      {activeMainIndex !== 0 && (
        <div id="sub-scroll" className="w-full overflow-auto mb-6">
          <ul className="flex gap-2">
            {currentSubCategories.map((sub, i) => (
              <li
                key={i}
                onClick={() => setActiveSubIndex(i)}
                className={`mb-[16px] shrink-0 text-center sm:text-[12px] text-[14px] sm:py-[12px] py-[12px] sm:px-[20px]  px-[30px]
                font-semibold rounded-full border border-gray-300 cursor-pointer transition
                ${
                  activeSubIndex === i
                    ? "text-white bg-[#DD2B1C]"
                    : "bg-gray-100/50 text-black"
                }`}
              >
                {sub.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* FILTER / INFO BAR */}
      <div className="mb-6 p-4 bg-white/70 backdrop-blur-md border border-gray-400 rounded-xl shadow-sm">
        {activeMainIndex === 0 && (
          <p className="text-[15px] font-medium text-gray-600">
            Showing{" "}
            <span className="font-semibold text-black">
              {allProducts.length}
            </span>{" "}
            products across all categories.
          </p>
        )}

        {activeMainIndex !== 0 && !currentSubCategory && (
          <p className="text-[15px] font-medium text-gray-600">
            Viewing category:{" "}
            <span className="font-semibold text-black">
              {currentCategory?.category}
            </span>
          </p>
        )}

        {activeMainIndex !== 0 && currentSubCategory && (
          <p className="text-[15px] font-medium text-gray-600">
            Viewing:{" "}
            <span className="font-semibold text-black">
              {currentCategory?.category}
            </span>{" "}
            →
            <span className="font-semibold text-[#DD2B1C]">
              {currentSubCategory.title}
            </span>{" "}
            ({currentSubCategory.product.length} products)
          </p>
        )}
      </div>

      {/* PRODUCT GRID */}
      <div
        className="w-full grid sm:grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-4 
  xxl:grid-cols-4 grid-cols-4 gap-8"
      >
        {activeMainIndex === 0 &&
          allProducts.map((p, i) => (
            <ProductCard key={i} product={p} handleAddToBag={handleAddToBag} />
          ))}

        {activeMainIndex !== 0 &&
          currentSubCategories[activeSubIndex]?.product.map((p, i) => (
            <ProductCard key={i} product={p} handleAddToBag={handleAddToBag} />
          ))}
      </div>

      {/* BACKGROUND */}
      <div className="w-[150%] h-auto -z-10 absolute left-[50%] -translate-x-1/2 top-[-35vh]">
        <Image
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center"
          src="https://www.supriyalifescience.com/assets/images/bg/abstract3.svg"
          alt="bg-image"
        />
      </div>

      {/* CART */}
      {isCartOpen && selectedProduct && (
        <Cart
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          productData={selectedProduct}
        />
      )}
    </div>
  );
};

export default ProductListing;
