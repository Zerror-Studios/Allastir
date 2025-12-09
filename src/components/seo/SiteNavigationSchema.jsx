import React from "react";
import { Const } from "@/utils/Constant";
import { menus } from "@/helpers/MenuData";

const SiteNavigationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [],
    url: [],
  };
  menus.forEach((menu) => {
    schemaData.name.push(menu.name);
    schemaData.url.push(`${Const.ClientLink}${menu.path}`);
    if (menu && menu.submenus && menu.submenus.length > 0) {
      menu.submenus.forEach((submenu) => {
        if (submenu.name !== "All") {
          schemaData.name.push(submenu.name);
          schemaData.url.push(`${Const.ClientLink}${submenu.path}`);
        }
      });
    }
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    ></script>
  );
};

export default SiteNavigationSchema;
