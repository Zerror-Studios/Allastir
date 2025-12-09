import React from "react";
import Navbar from "../common/Navbar";
import Popup from "../common/Popup";
import Footer from "../common/Footer";
import BrochurePopup from "../common/BrochurePopup";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <Popup /> */}
      <BrochurePopup />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
