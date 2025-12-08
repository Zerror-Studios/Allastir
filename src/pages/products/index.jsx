import Section1 from "@/components/product/Section1";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SeoHeader from "@/components/seo/SeoHeader";
import { productData } from "@/helpers/ProductData";
import ProductListing from "@/components/product/ProductListing";

const Product = ({ meta, products }) => {
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 600) {
      gsap.set(sec1Ref.current, { opacity: 0 });
      gsap.set(sec1Ref.current.querySelector("h2"), { y: "100%" });
      gsap.set(sec2Ref.current, { y: 80, opacity: 0 });
      var tl = gsap.timeline();
      tl.to(
        sec1Ref.current,
        {
          opacity: 1,
          duration: 0.4,
          ease: "power4.in",
        },
        "a"
      )
        .to(
          sec1Ref.current.querySelector("h2"),
          {
            y: 0,
            duration: 0.3,
          },
          "b"
        )
        .to(
          sec2Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            delay: 0.3,
          },
          "b"
        );
    } else {
      gsap.set(sec1Ref.current, { opacity: 0 });
      gsap.set(sec1Ref.current.querySelector("h2"), { y: "100%" });
      gsap.set(sec2Ref.current, { y: 80, opacity: 0 });
      var tl = gsap.timeline();
      tl.to(sec1Ref.current, {
        opacity: 1,
        duration: 0.2,
      })
        .to(
          sec1Ref.current.querySelector("h2"),
          {
            y: 0,
            duration: 0.4,
          },
          "a"
        )
        .to(
          sec2Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            delay: 0.2,
          },
          "a"
        );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <SeoHeader meta={meta} />
      <div className="w-full relative overflow-hidden">
        <Section1 sec1Ref={sec1Ref} />
        <ProductListing products={products} />
      </div>
    </>
  );
};

export default Product;

export async function getStaticProps() {
  const meta = {
    title: "Allastir Private Limited | High-Quality Niche APIs",
    description:
      "Explore Allastir’s range of high-quality niche APIs for pharmaceutical formulations, including tablets, capsules, soft gelatins, and oral liquids.",
    keywords:
      "Niche APIs, pharmaceutical APIs, API products, API formulations, drug ingredients, high-quality APIs, pharmaceutical manufacturing, custom APIs, research-based APIs, pharma solutions",
    author: "Allastir",
    robots: "index,follow",
  };
  const products = [...productData].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return { props: { meta, products } };
}
