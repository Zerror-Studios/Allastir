import Section1 from "@/components/contact/Section1";
import SeoHeader from "@/components/seo/SeoHeader";
import React from "react";

const Contact = ({ meta }) => {
  return (
    <>
      <SeoHeader meta={meta} />
      <div className="w-full relative overflow-hidden">
        <Section1 />
      </div>
    </>
  );
};

export default Contact;

export async function getStaticProps() {
 const meta = {
  title: "Contact Us | Allastir Private Limited",
  description:
    "Contact Allastir for inquiries, collaborations, and niche API solutions. We're here to support your pharmaceutical needs.",
  keywords:
    "contact Allastir, API supplier, pharma inquiries, API manufacturing support, pharmaceutical contact, API solutions",
  author: "Allastir",
  robots: "index,follow",
};

  return { props: { meta: meta } };
}
