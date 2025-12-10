import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Section3 from '@/components/about/Section3'
import Section4 from '@/components/home/Section4'
import Section5 from '@/components/home/Section5'
import Section6 from '@/components/home/Section6'
import SeoHeader from '@/components/seo/SeoHeader'
import React from 'react'

const Home = ({ meta, bluetxt, normaltxt }) => {
  return (
    <>
      <SeoHeader meta={meta} />
      <div className='relative overflow-hidden'>
        <Section1 />
        <Section2 bluetxt={bluetxt} normaltxt={normaltxt} />
        <Section3 />
        {/* <Section4 products={products} /> */}
        <Section5 />
        <Section6 />
      </div>
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const meta = {
    title: "Allastir Private Limited",
    description:
      "Allastir Private Limited is a leading manufacturer of high-quality niche APIs in India. Backed by strong R&D, we deliver innovation, precision, and reliability to the pharmaceutical industry.",
    keywords:
      "niche APIs India, pharmaceutical APIs India, API manufacturing India, high-quality APIs, pharma ingredients, research-based APIs, custom API solutions, pharmaceutical R&D",
    author: "Allastir",
    robots: "index,follow",
  };

  // const products = productData;
  const bluetxt =
    "Allastir is a globally recognized leader in pharmaceutical innovation, driving advancements in Active Pharmaceutical Ingredients (APIs), pharmaceutical formulations, and dietary supplements.";
  const normaltxt =
    "With world-class manufacturing facilities, state-of-the-art research, and a team of industry experts, we are committed to transforming healthcare through cutting-edge science, quality, and excellence. Our unwavering dedication to regulatory compliance and breakthrough solutions ensures that we consistently deliver superior healthcare products to markets worldwide.";

  return { props: { meta, bluetxt, normaltxt} };
};
