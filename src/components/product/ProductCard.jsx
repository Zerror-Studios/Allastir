import Image from "next/image";
import React from "react";

const ProductCard = ({ product, handleAddToBag }) => {
  return (
    <div className="relative bg-white rounded-xl flex flex-col justify-between gap-6 border hover:border-[#DD2B1C] border-gray-400 p-5 overflow-hidden transition-all">
      <div>
        <Image
          width={1000}
          height={1000}
          src={product.image}
          alt={product.name}
          className="w-full h-[200px] sm:h-[180px] md:h-[190px] lg:h-[200px] object-contain rounded-lg mb-5 grayscale"
        />

        <h3 className="text-base sm:text-lg md:text-base lg:text-lg font-semibold sm:mb-1 mb-3 text-center">
          {product.name}
        </h3>

        <p className="text-sm sm:text-xs md:text-sm text-gray-900 mb-3 text-center">
          {product.description}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={() => handleAddToBag(product)}
          className="
          text-center sm:text-[12px] text-[14px] sm:py-[12px] py-[12px] sm:px-[20px]  px-[30px]
                font-semibold rounded-full border border-gray-300 cursor-pointer
           bg-[#DD2B1C] text-white sm:w-full"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
