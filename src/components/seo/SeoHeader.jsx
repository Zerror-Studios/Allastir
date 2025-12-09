import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Const } from "@/utils/Constant";
import WebPageSchema from "./WebPageSchema";
import NewsMediaOrganizationSchema from "./NewsMediaOrganizationSchema";
import SiteNavigationSchema from "./SiteNavigationSchema";

const SeoHeader = ({ meta }) => {
  const router = useRouter();
  const canonical = `${Const.ClientLink}/${router.asPath?.slice(1)}`;

  return (
    <Head>
      <title>{meta?.title ?? "Allastir Private Limited"}</title>

      {/* Basic Meta */}
      <meta name="description" content={meta?.description ?? ""} />
      <meta name="keywords" content={meta?.keywords ?? ""} />
      <meta
        name="author"
        content={meta?.author ?? "Allastir Private Limited"}
      />
      <meta
        name="robots"
        content={
          `${meta?.robots}, max-image-preview:large` ??
          "index,follow, max-image-preview:large"
        }
      />

      {/* Canonical */}
      <link rel="canonical" href={meta?.canonical ?? canonical} />

      {/* OG Tags */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta?.og?.title ?? meta?.title} />
      <meta
        property="og:description"
        content={meta?.og?.description ?? meta?.description}
      />
      <meta property="og:url" content={meta?.canonical ?? canonical} />
      <meta property="og:site_name" content="Allastir Private Limited" />
      <meta
        property="og:image"
        content={meta?.og?.image ?? "/allastir-og.png"}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Tags */}
      <meta
        name="twitter:card"
        content={meta?.twitter?.card ?? "summary_large_image"}
      />
      <meta
        name="twitter:title"
        content={meta?.twitter?.title ?? meta?.title}
      />
      <meta
        name="twitter:description"
        content={meta?.twitter?.description ?? meta?.description}
      />
      <meta name="twitter:site" content="@Allastir" />
      <meta
        name="twitter:image"
        content={meta?.twitter?.image ?? "/allastir-og.png"}
      />
      <meta name="twitter:creator" content="@Allastir" />

      {/* General */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.jpg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.jpg" />
      <link rel="apple-touch-icon" href="/favicon.jpg" />

      {/* Hreflang */}
      <link
        rel="alternate"
        hreflang="en-in"
        href={meta?.canonical ?? canonical}
      />

      {/* Schema Markup */}
      <WebPageSchema
        name={meta?.title ?? "Allastir Private Limited"}
        description={meta?.description ?? ""}
        url={meta?.canonical ?? canonical}
      />

      <NewsMediaOrganizationSchema
        name="Allastir Private Limited"
        clientLink={`${Const.ClientLink}/`}
        logoUrl={`${Const.ClientLink}/favicon.jpg`}
        address={[
          {
            "@type": "PostalAddress",
            streetAddress:
              "Unit 1: Plot No. 12, Shed No. 9A, Sidco Industrial Estate, Vichoor, Manali New Town",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600103",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            streetAddress:
              "Unit 2: Plot No. 8-7, 8-8, 8-17, 8-18, APIIC Industrial Park, Attivaram Village, Ozili Mandal",
            addressLocality: "Tirupati District",
            addressRegion: "Andhra Pradesh",
            postalCode: "524421",
            addressCountry: "IN",
          },
        ]}
        contact={{
          telephone: "+91-98400 51621",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: "English",
          hoursAvailable: {
            opens: "09:00",
            closes: "18:00",
          },
          email: "sales@allastir.com",
        }}
        sameAs={["https://www.allastir.com"]}
      />

      <SiteNavigationSchema />
    </Head>
  );
};

export default SeoHeader;
