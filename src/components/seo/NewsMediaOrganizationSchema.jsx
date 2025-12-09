import React from "react";

const NewsMediaOrganizationSchema = ({
  name,
  clientLink,
  logoUrl,
  address, // Should match the prop passed from SeoHeader
  contact,
  sameAs,
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: name,
    url: clientLink,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    address: address?.map((addr) => ({
      "@type": "PostalAddress",
      streetAddress: addr.streetAddress,
      addressLocality: addr.addressLocality,
      addressRegion: addr.addressRegion,
      postalCode: addr.postalCode,
      addressCountry: addr.addressCountry ?? "IN",
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact?.telephone,
      contactType: contact?.contactType,
      areaServed: contact?.areaServed,
      availableLanguage: contact?.availableLanguage,
      hoursAvailable: {
        opens: contact?.hoursAvailable?.opens,
        closes: contact?.hoursAvailable?.closes,
      },
      email: contact?.email,
    },
    sameAs: sameAs, // Add the sameAs links
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    ></script>
  );
};

export default NewsMediaOrganizationSchema;
